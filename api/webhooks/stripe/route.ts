const { NextResponse } = require('next/server');
const { createClient } = require('@supabase/supabase-js');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const supabase = createClient(
  process.env.SUPABASE_URL || 'https://dummy.supabase.co',
  process.env.SUPABASE_ANON_KEY || 'dummy'
);
export async function POST(request) {
  const body = await request.text();
  const signature = request.headers.get('stripe-signature');
  let event;
  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    return NextResponse.json(
      { data: null, error: `Webhook signature verification failed: ${err.message}` },
      { status: 400 }
    );
  }
  try {
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object;
        const userId = session.metadata.user_id;
        const membershipId = session.metadata.membership_id;
        if (!userId || !membershipId) {
          throw new Error('Missing user_id or membership_id in session metadata');
        }
        const { error: subError } = await supabase
          .from('subscriptions')
          .upsert(
            {
              user_id: userId,
              membership_id: membershipId,
              active_status: true,
            },
            { onConflict: 'user_id' }
          );
        if (subError) throw new Error(subError.message);
        break;
      }
      case 'customer.subscription.deleted': {
        const subscription = event.data.object;
        const stripeSubscriptionId = subscription.id;
        const { data: subData, error: fetchError } = await supabase
          .from('subscriptions')
          .select('id')
          .eq('stripe_subscription_id', stripeSubscriptionId)
          .single();
        if (fetchError || !subData) {
          throw new Error('Subscription record not found');
        }
        const { error: updateError } = await supabase
          .from('subscriptions')
          .update({ active_status: false })
          .eq('id', subData.id);
        if (updateError) throw new Error(updateError.message);
        break;
      }
    }
    return NextResponse.json(
      { data: { message: 'Webhook processed successfully' }, error: null },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { data: null, error: error.message },
      { status: 500 }
    );
  }
}
export async function GET() {
  return NextResponse.json(
    { data: null, error: 'Method not allowed' },
    { status: 405 }
  );
}