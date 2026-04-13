const { createClient } = require('@supabase/supabase-js');
const { NextResponse } = require('next/server');
const supabase = createClient(
  process.env.SUPABASE_URL || 'https://dummy.supabase.co',
  process.env.SUPABASE_ANON_KEY || 'dummy'
);
async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('user_id');
    let query = supabase
      .from('bookings')
      .select(`
        id, 
        user_id, 
        class_id, 
        created_at, 
        classes (id, title, schedule_time, description), 
        profiles (full_name)
      `);
    if (userId) {
      query = query.eq('user_id', userId);
    }
    const { data, error } = await query;
    if (error) throw new Error(error.message);
    return NextResponse.json({ data, error: null }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ data: null, error: error.message }, { status: 500 });
  }
}
async function POST(request) {
  try {
    const body = await request.json();
    const { user_id, class_id } = body;
    if (!user_id || !class_id) {
      return NextResponse.json(
        { data: null, error: 'user_id and class_id are required' }, 
        { status: 400 }
      );
    }
    const { data: classData, error: classError } = await supabase
      .from('classes')
      .select('id')
      .eq('id', class_id)
      .single();
    if (classError || !classData) {
      return NextResponse.json(
        { data: null, error: 'Invalid class ID' }, 
        { status: 400 }
      );
    }
    const { data, error } = await supabase
      .from('bookings')
      .insert([{ user_id, class_id }])
      .select()
      .single();
    if (error) throw new Error(error.message);
    return NextResponse.json({ data, error: null }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ data: null, error: error.message }, { status: 500 });
  }
}
module.exports = {
  GET,
  POST,
};