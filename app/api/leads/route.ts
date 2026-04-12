import { NextResponse } from 'next/server';
const { createClient } = require('@supabase/supabase-js');
const supabase = createClient(
  process.env.SUPABASE_URL || 'https://dummy.supabase.co',
  process.env.SUPABASE_ANON_KEY || 'dummy'
);
export async function GET(request) {
  try {
    const { data, error } = await supabase
      .from('leads')
      .select('id, name, email, phone, interest_level, created_at')
      .order('created_at', { ascending: false });
    if (error) throw new Error(error.message);
    return NextResponse.json({ data, error: null }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { data: null, error: error.message || 'Internal Server Error' },
      { status: 500 }
    );
  }
}
export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, interest_level } = body;
    if (!name || !email) {
      return NextResponse.json(
        { data: null, error: 'Name and email are required' },
        { status: 400 }
      );
    }
    const { data, error } = await supabase
      .from('leads')
      .insert([
        {
          name,
          email,
          phone,
          interest_level,
        },
      ])
      .select();
    if (error) throw new Error(error.message);
    return NextResponse.json({ data, error: null }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { data: null, error: error.message || 'Internal Server Error' },
      { status: 500 }
    );
  }
}