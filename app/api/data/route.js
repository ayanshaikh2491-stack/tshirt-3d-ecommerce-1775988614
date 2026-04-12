// app/api/training-plan/[id].js
export async function GET(request: Request) {
  try {
    const { id } = request.params;
    const { data, error } = await supabase.from('training_plans').select('title, description').eq('id', id);
    if (error) throw new Error(error.message);
    return NextResponse.json({ data, error: null }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ data: null, error: error.message }, { status: 500 });
  }
}

export async function GETAll(request: Request) {
  try {
    const { data, error } = await supabase.from('training_plans').select('title, description, id');
    if (error) throw new Error(error.message);
    return NextResponse.json({ data, error: null }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ data: null, error: error.message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const { data, error } = await supabase.from('training_plans').insert(request.body);
    if (error) throw new Error(error.message);
    return NextResponse.json({ data, error: null }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ data: null, error: error.message }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { id } = request.params;
    const { data, error } = await supabase.from('training_plans').delete().eq('id', id);
    if (error) throw new Error(error.message);
    return NextResponse.json({ data, error: null }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ data: null, error: error.message }, { status: 500 });
  }
}

export async function PATCH(request: Request) {
  try {
    const { id } = request.params;
    const { data, error } = await supabase.from('training_plans').update({ ...request.body }).eq('id', id);
    if (error) throw new Error(error.message);
    return NextResponse.json({ data, error: null }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ data: null, error: error.message }, { status: 500 });
  }
}
// app/api/user-data.js
export async function GET(request: Request) {
  try {
    const { user } = request.session;
    if (!user) return NextResponse.json({ data: null, error: 'Unauthorized' }, { status: 401 });
    const { data, error } = await supabase
      .from('users')
      .select('username, email')
      .eq('id', user.id);
    if (error) throw new Error(error.message);
    return NextResponse.json({ data, error: null }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ data: null, error: error.message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const { user } = request.session;
    if (!user) return NextResponse.json({ data: null, error: 'Unauthorized' }, { status: 401 });
    const { data, error } = await supabase
      .from('users')
      .update({ ...request.body })
      .eq('id', user.id);
    if (error) throw new Error(error.message);
    return NextResponse.json({ data, error: null }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ data: null, error: error.message }, { status: 500 });
  }
}