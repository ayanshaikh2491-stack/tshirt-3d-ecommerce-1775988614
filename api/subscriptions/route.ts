import { NextResponse } from 'next/server';
const { createClient } = require('@supabase/supabase-js');
const supabase = createClient(
  process.env.SUPABASE_URL || 'https://dummy.supabase.co',
  process.env.SUPABASE_ANON_KEY || 'dummy'
);
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId');
    let query = supabase
      .from('subscriptions')
      .select(`
        id, 
        user_id, 
        membership_id, 
        active_status, 
        memberships (id, name, price, duration)
      `);
    if (userId) {
      query = query.eq('user_id', userId);
    }
    const { data, error } = await query;
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
    const { user_id, membership_id } = body;
    if (!user_id || !membership_id) {
      return NextResponse.json(
        { data: null, error: 'user_id and membership_id are required' },
        { status: 400 }
      );
    }
    const { data, error } = await supabase
      .from('subscriptions')
      .insert([
        { 
          user_id, 
          membership_id, 
          active_status: true 
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