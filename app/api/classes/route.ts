const { NextResponse } = require('next/server');
const { createClient } = require('@supabase/supabase-js');
const supabase = createClient(
  process.env.SUPABASE_URL || 'https://dummy.supabase.co',
  process.env.SUPABASE_ANON_KEY || 'dummy'
);
async function GET(request) {
  try {
    const { data, error } = await supabase
      .from('classes')
      .select(`
        id, 
        title, 
        description, 
        schedule_time, 
        capacity, 
        trainers (
          id, 
          name, 
          specialty
        )
      `);
    if (error) throw new Error(error.message);
    return NextResponse.json({ data, error: null }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ data: null, error: error.message }, { status: 500 });
  }
}
async function POST(request) {
  try {
    const body = await request.json();
    const { title, description, trainer_id, schedule_time, capacity } = body;
    if (!title || !trainer_id || !schedule_time || capacity === undefined) {
      return NextResponse.json(
        { data: null, error: 'Missing required fields: title, trainer_id, schedule_time, or capacity' },
        { status: 400 }
      );
    }
    const { data, error } = await supabase
      .from('classes')
      .insert([
        {
          title,
          description,
          trainer_id,
          schedule_time,
          capacity,
        },
      ])
      .select();
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