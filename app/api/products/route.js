import { supabase } from '../../../utils/supabaseConfig';

export async function GET() {
  try {
    const { data, error } = await supabase.from('products').select('*');
    if (error) {
      throw error;
    }
    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ message: 'Failed to fetch products' }), { status: 500 });
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { data, error } = await supabase.from('products').insert(body);
    if (error) {
      throw error;
    }
    return new Response(JSON.stringify(data), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify({ message: 'Failed to add product' }), { status: 500 });
  }
}