```javascript
// app/api/trainings.js
export async function GET(request: Request) {
  try {
    const { supabase } = require('../../../utils/supabaseConfig');
    const { data, error } = await supabase
      .from('trainings')
      .select('id, name, description');
    if (error) throw new Error(error.message);
    return NextResponse.json({ data: data }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ data: null, error: 'Failed to retrieve trainings' }, { status: 500 });
  }
}
export async function POST(request: Request) {
  try {
    const { supabase } = require('../../../utils/supabaseConfig');
    const { name, description } = await request.json();
    const { data, error } = await supabase
      .from('trainings')
      .insert({ name, description });
    if (error) throw new Error(error.message);
    return NextResponse.json({ data: data }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ data: null, error: 'Failed to create training' }, { status: 500 });
  }
}
// app/api/classes.js
export async function GET(request: Request) {
  try {
    const { supabase } = require('../../../utils/supabaseConfig');
    const { query } = request;
    const { training_id } = query;
    let queryBuilder = supabase
      .from('classes')
      .select('id, name, description, training_id');
    if (training_id) {
      queryBuilder = queryBuilder.eq('training_id', training_id);
    }
    const { data, error } = await queryBuilder;
    if (error) throw new Error(error.message);
    return NextResponse.json({ data: data }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ data: null, error: 'Failed to retrieve classes' }, { status: 500 });
  }
}
export async function POST(request: Request) {
  try {
    const { supabase } = require('../../../utils/supabaseConfig');
    const { name, description, training_id } = await request.json();
    const { data, error } = await supabase
      .from('classes')
      .insert({ name, description, training_id });
    if (error) throw new Error(error.message);
    return NextResponse.json({ data: data }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ data: null, error: 'Failed to create class' }, { status: 500 });
  }
}
// app/api/training-plans.js
export async function GET(request: Request) {
  try {
    const { supabase } = require('../../../utils/supabaseConfig');
    const { user_id } = await request.cookies.get('user_id');
    const { data, error } = await supabase
      .from('training_plans')
      .select('id, user_id, training_id, start_date, end_date')
      .eq('user_id', user_id);
    if (error) throw new Error(error.message);
    return NextResponse.json({ data: data }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ data: null, error: 'Failed to retrieve training plans' }, { status: 500 });
  }
}
export async function POST(request: Request) {
  try {
    const { supabase } = require('../../../utils/supabaseConfig');
    const { user_id, training_id, start_date, end_date } = await request.json();
    const { data, error } = await supabase
      .from('training_plans')
      .insert({ user_id, training_id, start_date, end_date });
    if (error) throw new Error(error.message);
    return NextResponse.json({ data: data }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ data: null, error: 'Failed to create training plan' }, { status: 500 });
  }
}
// app/api/booking.js
export async function GET(request: Request) {
  try {
    const { supabase } = require('../../../utils/supabaseConfig');
    const { user_id } = await request.cookies.get('user_id');
    const { data, error } = await supabase
      .from('bookings')
      .select('id, user_id, class_id, start_time, end_time')
      .eq('user_id', user_id);
    if (error) throw new Error(error.message);
    return NextResponse.json({ data: data }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ data: null, error: 'Failed to retrieve bookings' }, { status: