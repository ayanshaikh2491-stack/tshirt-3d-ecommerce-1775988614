const { createClient } = require('@supabase/supabase-js');
const { NextResponse } = require('next/server');

const supabase = createClient(process.env.SUPABASE_URL || 'https://dummy.supabase.co', process.env.SUPABASE_ANON_KEY || 'dummy');

export async function GET(request) {
  const url = new URL(request.url);
  const path = url.pathname;

  try {
    if (path === '/app/api/getClasses') {
      const { data, error } = await supabase.from('classes').select('*');
      if (error) throw new Error(error.message);
      return NextResponse.json({ data, error: null }, { status: 200 });
    } else if (path === '/app/api/getTrainers') {
      const { data, error } = await supabase.from('trainers').select('*');
      if (error) throw new Error(error.message);
      return NextResponse.json({ data, error: null }, { status: 200 });
    } else if (path === '/app/api/getMembershipPlans') {
      const { data, error } = await supabase.from('membership_plans').select('*');
      if (error) throw new Error(error.message);
      return NextResponse.json({ data, error: null }, { status: 200 });
    } else if (path === '/app/api/getUserDetails') {
      const userId = url.searchParams.get('userId');
      const { data, error } = await supabase.from('users').select('*').eq('id', userId);
      if (error) throw new Error(error.message);
      return NextResponse.json({ data, error: null }, { status: 200 });
    } else {
      return NextResponse.json({ data: null, error: 'Invalid path' }, { status: 404 });
    }
  } catch (error) {
    return NextResponse.json({ data: null, error: error.message }, { status: 500 });
  }
}

export async function POST(request) {
  const url = new URL(request.url);
  const path = url.pathname;
  const body = await request.json();

  try {
    if (path === '/app/api/login') {
      const { data, error } = await supabase.auth.admin.authenticate({ email: body.email, password: body.password });
      if (error) throw new Error(error.message);
      return NextResponse.json({ data, error: null }, { status: 200 });
    } else if (path === '/app/api/signup') {
      const { data, error } = await supabase.from('users').insert([body]);
      if (error) throw new Error(error.message);
      return NextResponse.json({ data, error: null }, { status: 201 });
    } else {
      return NextResponse.json({ data: null, error: 'Invalid path' }, { status: 404 });
    }
  } catch (error) {
    return NextResponse.json({ data: null, error: error.message }, { status: 500 });
  }
}