const { createClient } = require('@supabase/supabase-js');
const { NextResponse } = require('next/server');

const supabase = createClient(process.env.SUPABASE_URL || 'https://dummy.supabase.co', process.env.SUPABASE_ANON_KEY || 'dummy');

export async function GET(request) {
  const url = new URL(request.url);
  if (url.pathname === '/app/api/get-testimonials') {
    try {
      const { data, error } = await supabase.from('testimonials').select('*');
      if (error) throw new Error(error.message);
      return NextResponse.json({ data, error: null }, { status: 200 });
    } catch (error) {
      return NextResponse.json({ data: null, error: error.message }, { status: 500 });
    }
  } else if (url.pathname === '/app/api/get-pricing-plans') {
    try {
      const { data, error } = await supabase.from('pricing_plans').select('*');
      if (error) throw new Error(error.message);
      return NextResponse.json({ data, error: null }, { status: 200 });
    } catch (error) {
      return NextResponse.json({ data: null, error: error.message }, { status: 500 });
    }
  } else {
    return NextResponse.json({ data: null, error: 'Invalid route' }, { status: 404 });
  }
}

export async function POST(request) {
  const url = new URL(request.url);
  if (url.pathname === '/app/api/send-contact-form') {
    try {
      const formData = await request.json();
      const { data, error } = await supabase.from('contact_form_submissions').insert([formData]);
      if (error) throw new Error(error.message);
      return NextResponse.json({ data, error: null }, { status: 201 });
    } catch (error) {
      return NextResponse.json({ data: null, error: error.message }, { status: 500 });
    }
  } else {
    return NextResponse.json({ data: null, error: 'Invalid route' }, { status: 404 });
  }
}