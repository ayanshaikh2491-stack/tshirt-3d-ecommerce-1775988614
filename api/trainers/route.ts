const { NextResponse } = require('next/server');
const { createClient } = require('@supabase/supabase-js');
const supabase = createClient(
  process.env.SUPABASE_URL || 'https://dummy.supabase.co',
  process.env.SUPABASE_ANON_KEY || 'dummy'
);
async function GET(request) {
  try {
    const { data, error } = await supabase
      .from('trainers')
      .select('id, name, bio, specialty, image_url');
    if (error) throw new Error(error.message);
    return NextResponse.json({ data, error: null }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ data: null, error: err.message }, { status: 500 });
  }
}
async function POST(request) {
  try {
    const body = await request.json();
    const { name, bio, specialty, image_url } = body;
    if (!name || !specialty) {
      return NextResponse.json(
        { data: null, error: 'Name and specialty are required fields' },
        { status: 400 }
      );
    }
    const { data, error } = await supabase
      .from('trainers')
      .insert([{ name, bio, specialty, image_url }])
      .select();
    if (error) throw new Error(error.message);
    return NextResponse.json({ data, error: null }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ data: null, error: err.message }, { status: 500 });
  }
}
module.exports = {
  GET,
  POST,
};