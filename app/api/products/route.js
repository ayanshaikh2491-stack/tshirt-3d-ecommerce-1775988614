import { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '../../../utils/supabaseConfig';
import { Product } from '../../../types/product';

export async function GET() {
  try {
    const { data, error } = await supabase
      .from('products')
      .select('*');

    if (error) {
      throw error;
    }

    return new Response(JSON.stringify(data), {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error(error);
    return new Response(null, {
      status: 500,
    });
  }
}

export async function POST(request: NextApiRequest) {
  try {
    const { name, description, price } = await request.json();
    const { data, error } = await supabase
      .from('products')
      .insert({ name, description, price });

    if (error) {
      throw error;
    }

    return new Response(JSON.stringify(data), {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error(error);
    return new Response(null, {
      status: 500,
    });
  }
}