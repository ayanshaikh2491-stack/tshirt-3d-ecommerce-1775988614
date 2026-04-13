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
      return NextResponse.json({ data: null, error: 'userId is required' }, { status: 400 });
    }
    const { data, error } = await supabase
      .from('cart_items')
      .select(`
        id,
        quantity,
        products (
          id,
          name,
          price,
          image_url
        )
      `)
      .eq('user_id', userId);
    if (error) throw new Error(error.message);
    return NextResponse.json({ data, error: null }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ data: null, error: error.message }, { status: 500 });
  }
}
export async function POST(request) {
  try {
    const body = await request.json();
    const { userId, productId, quantity } = body;
    if (!userId || !productId || quantity === undefined) {
      return NextResponse.json({ data: null, error: 'userId, productId, and quantity are required' }, { status: 400 });
    }
    // Validate product existence and stock
    const { data: product, error: productError } = await supabase
      .from('products')
      .select('id, stock')
      .eq('id', productId)
      .single();
    if (productError || !product) {
      return NextResponse.json({ data: null, error: 'Product not found' }, { status: 404 });
    }
    if (product.stock < quantity) {
      return NextResponse.json({ data: null, error: 'Insufficient stock' }, { status: 400 });
    }
    const { data, error } = await supabase
      .from('cart_items')
      .upsert(
        { user_id: userId, product_id: productId, quantity: quantity },
        { onConflict: 'user_id,product_id' }
      )
      .select();
    if (error) throw new Error(error.message);
    return NextResponse.json({ data, error: null }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ data: null, error: error.message }, { status: 500 });
  }
}