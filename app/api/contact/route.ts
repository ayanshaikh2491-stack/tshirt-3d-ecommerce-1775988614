import { NextResponse } from 'next/server';
const { createClient } = require('@supabase/supabase-js');
const supabase = createClient(
  process.env.SUPABASE_URL || 'https://dummy.supabase.co',
  process.env.SUPABASE_ANON_KEY || 'dummy'
);
export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;
    if (!name || !email || !message) {
      return NextResponse.json(
        { data: null, error: 'Missing required fields: name, email, and message are all required.' },
        { status: 400 }
      );
    }
    if (!email.includes('@')) {
      return NextResponse.json(
        { data: null, error: 'Invalid email address provided.' },
        { status: 400 }
      );
    }
    const { data, error } = await supabase
      .from('contact_messages')
      .insert([
        { 
          name: name.trim(), 
          email: email.trim().toLowerCase(), 
          message: message.trim() 
        },
      ])
      .select('id')
      .single();
    if (error) {
      throw new Error(error.message);
    }
    return NextResponse.json(
      { data: { id: data.id }, error: null },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { data: null, error: error.message || 'An unexpected error occurred while processing your request.' },
      { status: 500 }
    );
  }
}
export async function GET() {
  try {
    return NextResponse.json(
      { data: null, error: 'GET method not allowed on this endpoint.' },
      { status: 405 }
    );
  } catch (error) {
    return NextResponse.json(
      { data: null, error: 'Internal server error' },
      { status: 500 }
    );
  }
}