const { createClient } = require('@supabase/supabase-js');
const { NextResponse } = require('next/server');
const supabase = createClient(
  process.env.SUPABASE_URL || 'https://dummy.supabase.co',
  process.env.SUPABASE_ANON_KEY || 'dummy'
);
async function GET() {
  try {
    const { data, error } = await supabase
      .from('memberships')
      .select('id, tier_name, price, features_json');
    if (error) throw new Error(error.message);
    return NextResponse.json({ data, error: null }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ data: null, error: error.message }, { status: 500 });
  }
}
async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, membershipId } = body;
    if (!name || !email || !membershipId) {
      return NextResponse.json({ data: null, error: 'Missing required fields: name, email, and membershipId are required' }, { status: 400 });
    }
    const { data: membership, error: memError } = await supabase
      .from('memberships')
      .select('id, tier_name')
      .eq('id', membershipId)
      .single();
    if (memError || !membership) {
      return NextResponse.json({ data: null, error: 'Invalid membership tier selected' }, { status: 404 });
    }
    const { data: lead, error: leadError } = await supabase
      .from('leads')
      .insert([
        { 
          name, 
          email, 
          phone, 
          interest_level: 'high' 
        }
      ])
      .select()
      .single();
    if (leadError) throw new Error(leadError.message);
    return NextResponse.json({ 
      data: { 
        lead, 
        membership 
      }, 
      error: null 
    }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ data: null, error: error.message }, { status: 500 });
  }
}
module.exports = { GET, POST };