const { createClient } = require('@supabase/supabase-js');

let supabase = null;

function getSupabase() {
  if (!supabase) {
    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseKey) {
      throw new Error('Supabase URL and key must be set');
    }

    supabase = createClient(supabaseUrl, supabaseKey);
  }
  return supabase;
}

// Example auth setup
async function signUp(email, password) {
  const client = getSupabase();
  const { data, error } = await client.auth.signUp({
    email,
    password,
  });
  if (error) throw error;
  return data;
}

async function signIn(email, password) {
  const client = getSupabase();
  const { data, error } = await client.auth.signInWithPassword({
    email,
    password,
  });
  if (error) throw error;
  return data;
}

// Example table: products
// Assuming you have a 'products' table with columns: id, name, price
async function getProducts() {
  const client = getSupabase();
  const { data, error } = await client
    .from('products')
    .select('*');
  if (error) throw error;
  return data;
}

async function addProduct(name, price) {
  const client = getSupabase();
  const { data, error } = await client
    .from('products')
    .insert([{ name, price }]);
  if (error) throw error;
  return data;
}

module.exports = { getSupabase, signUp, signIn, getProducts, addProduct };