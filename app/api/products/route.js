// routes/products.js

const { supabase } = require('../../../utils/supabaseConfig');

export async function GET() {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .order('id', { ascending: true });

  if (error) {
    throw error;
  }

  return new Response(JSON.stringify(data), {
    headers: { 'Content-Type': 'application/json' },
  });
}

export async function POST(request) {
  const { data, error } = await request.json();

  if (error) {
    throw new Error('Invalid JSON');
  }

  const { id } = await supabase.from('products').insert(data);

  return new Response(JSON.stringify({ id }), {
    headers: { 'Content-Type': 'application/json' },
  });
}