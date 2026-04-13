import { NextResponse } from 'next/server';
const { createClient } = require('@supabase/supabase-js');
const supabase = createClient(
  process.env.SUPABASE_URL || 'https://dummy.supabase.co',
  process.env.SUPABASE_ANON_KEY || 'dummy'
);
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('user_id');
    let query = supabase
      .from('orders')
      .select(`
        *,
        order_items (
          id,
          product_id,
          quantity,
          price,
          products (
            id,
            name,
            price
          )
        )
      `);
    if (userId) {
      query = query.eq('user_id', userId);
    }
    const { data, error } = await query;
    if (error) throw new Error(error.message);
    return NextResponse.json({ data, error: null }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ data: null, error: error.message }, { status: 500 });
  }
}
export async function POST(request) {
  try {
    const body = await request.json();
    const { user_id, total_amount, shipping_address, items } = body;
    if (!user_id || !total_amount || !shipping_address || !items || !Array.isArray(items)) {
      return NextResponse.json({ data: null, error: 'Missing required order fields' }, { status: 400 });
    }
    if (items.length === 0) {
      return NextResponse.json({ data: null, error: 'Order must contain at least one item' }, { status: 400 });
    }
    const { data: order, error: orderError } = await supabase
      .from('orders')
      .insert([
        {
          user_id,
          total_amount,
          shipping_address,
          status: 'pending',
        },
      ])
      .select()
      .single();
    if (orderError) throw new Error(orderError.message);
    const orderItemsData = items.map((item) => ({
      order_id: order.id,
      product_id: item.product_id,
      quantity: item.quantity,
      price: item.price,
    }));
    const { error: itemsError } = await supabase
      .from('order_items')
      .insert(orderItemsData);
    if (itemsError) throw new Error(itemsError.message);
    return NextResponse.json({ data: order, error: null }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ data: null, error: error.message }, { status: 500 });
  }
}