const { createClient } = require('@supabase/supabase-js');
const { NextResponse } = require('next/server');

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);

export async function GET(request) {
  try {
    const { table } = request.nextUrl.searchParams;
    const { data, error } = await supabase.from(table).select('*');
    if (error) throw new Error(error.message);
    return NextResponse.json({ data, error: null }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ data: null, error: error.message }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const { table } = request.nextUrl.searchParams;
    const { data } = await request.json();
    const { data: result, error } = await supabase.from(table).insert([data]);
    if (error) throw new Error(error.message);
    return NextResponse.json({ data: result, error: null }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ data: null, error: error.message }, { status: 500 });
  }
}