const { createClient } = require('@supabase/supabase-js');
const { NextResponse } = require('next/server');
const supabase = createClient(
  process.env.SUPABASE_URL || 'https://dummy.supabase.co',
  process.env.SUPABASE_ANON_KEY || 'dummy'
);
export async function GET(request) {
  try {
    const { data, error } = await supabase
      .from('products')
      .select(`
        id, 
        name, 
        description, 
        price, 
        stock, 
        size, 
        color, 
        image_url, 
        category_id, 
        categories (name)
      `);
    if (error) throw error;
    return NextResponse.json({ data, error: null }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ data: null, error: error.message }, { status: 500 });
  }
}
export async function POST(request) {
  try {
    const body = await request.json();
    const { name, description, price, stock, size, color, image_url, category_id } = body;
    if (!name || price === undefined || !category_id) {
      return NextResponse.json(
        { data: null, error: 'Missing required fields: name, price, and category_id are mandatory' },
        { status: 400 }
      );
    }
    const { data, error } = await supabase
      .from('products')
      .insert([
        { 
          name, 
          description, 
          price, 
          stock, 
          size, 
          color, 
          image_url, 
          category_id 
        }
      ])
      .select();
    if (error) throw error;
    return NextResponse.json({ data, error: null }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ data: null, error: error.message }, { status: 500 });
  }
}