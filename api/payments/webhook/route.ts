import { NextResponse } from 'next/server';
const { createClient } = require('@supabase/supabase-js');
const supabase = createClient(
  process.env.SUPABASE_URL || 'https://dummy.supabase.co',
  process.env.SUPABASE_ANON_KEY || 'dummy'
);
export async function POST(request) {
  try {
    const body = await request.json();
    if (!body) {
      return NextResponse.json(
        { data: null, error: 'Missing request body' },
        { status: 400 }
      );
    }
    const { paymentId, userId, amount, status } = body;
    if (!paymentId || !userId) {
      return NextResponse.json(
        { data: null, error: 'Missing required payment details' },
        { status: 400 }
      );
    }
    const { data: paymentData, error: paymentError } = await supabase
      .from('payments')
      .update({ 
        status: status || 'completed',
        amount: amount 
      })
      .eq('id', paymentId)
      .select('id, status')
      .single();
    if (paymentError) {
      throw new Error(paymentError.message);
    }
    if (!paymentData) {
      return NextResponse.json(
        { data: null, error: 'Payment record not found' },
        { status: 404 }
      );
    }
    return NextResponse.json(
      { data: paymentData, error: null },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { data: null, error: error.message || 'Internal Server Error' },
      { status: 500 }
    );
  }
}