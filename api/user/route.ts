const { createClient } = require('@supabase/supabase-js');
const { NextResponse } = require('next/server');
const supabase = createClient(
  process.env.SUPABASE_URL || 'https://dummy.supabase.co',
  process.env.SUPABASE_ANON_KEY || 'dummy'
);
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('id');
    if (!userId) {
      return NextResponse.json(
        { data: null, error: 'User ID is required' },
        { status: 400 }
      );
    }
    const { data, error } = await supabase
      .from('profiles')
      .select('id, user_id, full_name, phone')
      .eq('user_id', userId)
      .single();
    if (error) {
      throw new Error(error.message);
    }
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
    const { user_id, full_name, phone } = body;
    if (!user_id) {
      return NextResponse.json(
        { data: null, error: 'user_id is required' },
        { status: 400 }
      );
    }
    const { data, error } = await supabase
      .from('profiles')
      .upsert(
        { 
          user_id, 
          full_name, 
          phone 
        }, 
        { onConflict: 'user_id' }
      )
      .select()
      .single();
    if (error) {
      throw new Error(error.message);
    }
    return NextResponse.json({ data, error: null }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { data: null, error: error.message || 'Internal Server Error' },
      { status: 500 }
    );
  }
}