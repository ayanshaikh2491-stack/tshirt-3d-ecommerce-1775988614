const { createClient } = require('@supabase/supabase-js');
const { NextResponse } = require('next/server');
const supabase = createClient(
  process.env.SUPABASE_URL || 'https://dummy.supabase.co',
  process.env.SUPABASE_ANON_KEY || 'dummy'
);
export async function GET(request) {
  try {
    const { data, error } = await supabase
      .from('memberships')
      .select('id, plan_name, price, duration, features');
    if (error) throw new Error(error.message);
    return NextResponse.json({ data, error: null }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ data: null, error: error.message }, { status: 500 });
  }
}
export async function POST(request) {
  try {
    const body = await request.json();
    const { plan_name, price, duration, features } = body;
    if (!plan_name || price === undefined) {
      return NextResponse.json(
        { data: null, error: 'Missing required fields: plan_name and price' },
        { status: 400 }
      );
    }
    const { data, error } = await supabase
      .from('memberships')
      .insert([{ plan_name, price, duration, features }])
      .select();
    if (error) throw new Error(error.message);
    return NextResponse.json({ data, error: null }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ data: null, error: error.message }, { status: 500 });
  }
}