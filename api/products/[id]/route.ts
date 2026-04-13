const { NextResponse } = require('next/server');
const { createClient } = require('@supabase/supabase-js');
const supabase = createClient(
  process.env.SUPABASE_URL || 'https://dummy.supabase.co',
  process.env.SUPABASE_ANON_KEY || 'dummy'
);
export async function GET(request, { params }) {
  try {
    const { id } = params;
    if (!id) {
      return NextResponse.json({ data: null, error: 'Product ID is required' }, { status: 400 });
    }
    const { data, error } = await supabase
      .from('products')
      .select('id, name, description, price, stock, size, color, image_url, category_id')
      .eq('id', id)
      .single();
    if (error) {
      throw new Error(error.message);
    }
    if (!data) {
      return NextResponse.json({ data: null, error: 'Product not found' }, { status: 404 });
    }
    return NextResponse.json({ data, error: null }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ data: null, error: error.message || 'Internal Server Error' }, { status: 500 });
  }
}
export async function POST(request, { params }) {
  try {
    const { id } = params;
    const body = await request.json();
    if (!id) {
      return NextResponse.json({ data: null, error: 'Product ID is required' }, { status: 400 });
    }
    const { name, description, price, stock, size, color, image_url, category_id } = body;
    const { data, error } = await supabase
      .from('products')
      .update({
        name,
        description,
        price,
        stock,
        size,
        color,
        image_url,
        category_id
      })
      .eq('id', id)
      .select();
    if (error) {
      throw new Error(error.message);
    }
    return NextResponse.json({ data: data[0], error: null }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ data: null, error: error.message || 'Internal Server Error' }, { status: 500 });
  }
}