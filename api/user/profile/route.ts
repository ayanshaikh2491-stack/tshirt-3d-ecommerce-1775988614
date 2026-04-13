const { createClient } = require('@supabase/supabase-js');
const { NextResponse } = require('next/server');
const supabase = createClient(
  process.env.SUPABASE_URL || 'https://dummy.supabase.co',
  process.env.SUPABASE_ANON_KEY || 'dummy'
);
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId');
    if (!userId) {
      return NextResponse.json({ data: null, error: 'User ID is required' }, { status: 400 });
    }
    const { data, error } = await supabase
      .from('profiles')
      .select(`
        id, 
        username, 
        role, 
        memberships (
          id, 
          name, 
          price, 
          features
        )
      `)
      .eq('id', userId)
      .single();
    if (error) throw new Error(error.message);
    return NextResponse.json({ data, error: null }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ data: null, error: err.message }, { status: 500 });
  }
}
export async function POST(request) {
  try {
    const body = await request.json();
    const { userId, username, role } = body;
    if (!userId) {
      return NextResponse.json({ data: null, error: 'User ID is required' }, { status: 400 });
    }
    if (!username || !role) {
      return NextResponse.json({ data: null, error: 'Username and role are required' }, { status: 400 });
    }
    const { data, error } = await supabase
      .from('profiles')
      .update({ 
        username, 
        role 
      })
      .eq('id', userId)
      .select();
    if (error) throw new Error(error.message);
    return NextResponse.json({ data, error: null }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ data: null, error: err.message }, { status: 500 });
  }
}