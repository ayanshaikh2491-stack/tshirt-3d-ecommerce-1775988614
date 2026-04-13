const { createClient } = require('@supabase/supabase-js');
const { NextResponse } = require('next/server');
const supabase = createClient(
  process.env.SUPABASE_URL || 'https://dummy.supabase.co',
  process.env.SUPABASE_ANON_KEY || 'dummy'
);
async function GET() {
  try {
    return NextResponse.json(
      { data: { status: 'Auth API is operational' }, error: null },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { data: null, error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
async function POST(request) {
  try {
    const body = await request.json();
    const { userId } = body;
    if (!userId) {
      return NextResponse.json(
        { data: null, error: 'User ID is required' },
        { status: 400 }
      );
    }
    const { data, error: supabaseError } = await supabase
      .from('profiles')
      .select('id, user_id, full_name, membership_status, goal')
      .eq('user_id', userId)
      .single();
    if (supabaseError) {
      throw new Error(supabaseError.message);
    }
    if (!data) {
      return NextResponse.json(
        { data: null, error: 'User profile not found' },
        { status: 404 }
      );
    }
    return NextResponse.json(
      { data, error: null },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { data: null, error: error.message || 'Internal Server Error' },
      { status: 500 }
    );
  }
}
module.exports = {
  GET,
  POST,
};