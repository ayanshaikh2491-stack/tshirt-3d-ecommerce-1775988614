import { NextResponse } from 'next/server';
const { createClient } = require('@supabase/supabase-js');
const supabase = createClient(
  process.env.SUPABASE_URL || 'https://dummy.supabase.co',
  process.env.SUPABASE_ANON_KEY || 'dummy'
);
export async function GET(request) {
  try {
    const { data, error } = await supabase
      .from('memberships')
      .select('id, name, price, features');
    if (error) throw new Error(error.message);
    return NextResponse.json({ data, error: null }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ data: null, error: error.message }, { status: 500 });
  }
}
export async function POST(request) {
  try {
    const body = await request.json();
    const { name, price, features } = body;
    if (!name || price === undefined) {
      return NextResponse.json({ data: null, error: 'Missing required fields: name and price' }, { status: 400 });
    }
    const { data, error } = await supabase
      .from('memberships')
      .insert([{ name, price, features }])
      .select()
      .single();
    if (error) throw new Error(error.message);
    return NextResponse.json({ data, error: null }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ data: null, error: error.message }, { status: 500 });
  }
}