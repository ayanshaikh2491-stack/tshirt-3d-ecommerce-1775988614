const { createClient } = require('@supabase/supabase-js');
const { NextResponse } = require('next/server');

const supabase = createClient(process.env.SUPABASE_URL || 'https://dummy.supabase.co', process.env.SUPABASE_ANON_KEY || 'dummy');

export async function GET(request) {
  try {
    const { table } = request.nextUrl.searchParams;
    if (!table) return NextResponse.json({ data: null, error: 'Table not specified' }, { status: 400 });

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
    if (!table) return NextResponse.json({ data: null, error: 'Table not specified' }, { status: 400 });

    const { data: requestData } = await request.json();
    const { data, error } = await supabase.from(table).insert([requestData]);
    if (error) throw new Error(error.message);

    return NextResponse.json({ data, error: null }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ data: null, error: error.message }, { status: 500 });
  }
}