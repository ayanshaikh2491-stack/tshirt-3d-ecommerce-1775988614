const { createClient } = require('@supabase/supabase-js');
const { NextResponse } = require('next/server');
const supabase = createClient(
  process.env.SUPABASE_URL || 'https://dummy.supabase.co',
  process.env.SUPABASE_ANON_KEY || 'dummy'
);
async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId');
    if (!userId) {
      return NextResponse.json({ data: null, error: 'User ID is required' }, { status: 400 });
    }
    const { data, error } = await supabase
      .from('bookings')
      .select(`
        id, 
        status, 
        classes (
          id, 
          name, 
          schedule_time, 
          trainers (
            name, 
            specialty
          )
        )
      `)
      .eq('user_id', userId);
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
      return NextResponse.json({ data: null, error: 'Missing required fields: user_id and class_id' }, { status: 400 });
    }
    const { data: classData, error: classError } = await supabase
      .from('classes')
      .select('id, capacity')
      .eq('id', class_id)
      .single();
    if (classError || !classData) {
      return NextResponse.json({ data: null, error: 'Invalid class ID' }, { status: 404 });
    }
    const { count, error: countError } = await supabase
      .from('bookings')
      .select('*', { count: 'exact', head: true })
      .eq('class_id', class_id)
      .eq('status', 'confirmed');
    if (countError) throw new Error(countError.message);
    if (count >= classData.capacity) {
      return NextResponse.json({ data: null, error: 'Class capacity reached' }, { status: 400 });
    }
    const { data: bookingData, error: bookingError } = await supabase
      .from('bookings')
      .insert([{ user_id, class_id, status: 'confirmed' }])
      .select()
      .single();
    if (bookingError) throw new Error(bookingError.message);
    return NextResponse.json({ data: bookingData, error: null }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ data: null, error: error.message }, { status: 500 });
  }
}
module.exports = {
  GET,
  POST,
};