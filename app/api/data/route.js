// pages/api/classes.js
export async function GET(request: Request) {
  try {
    const { supabase } = require('../../../utils/supabaseConfig');
    const { data, error } = await supabase
      .from('classes')
      .select('id, name, description');
    if (error) throw new Error(error.message);
    return NextResponse.json({ data: data }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ data: null, error: error.message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const { supabase } = require('../../../utils/supabaseConfig');
    const { data, error } = await supabase.from('classes').insert(request.body);
    if (error) throw new Error(error.message);
    return NextResponse.json({ data: data }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ data: null, error: error.message }, { status: 500 });
  }
}
// pages/api/classes/[classId].js
export async function GET(request: Request) {
  try {
    const { supabase } = require('../../../utils/supabaseConfig');
    const classId = request.params.classId;
    const { data, error } = await supabase
      .from('classes')
      .select('id, name, description')
      .eq('id', classId);
    if (error) throw new Error(error.message);
    if (data.length === 0) {
      return NextResponse.json({ data: null, error: 'Class not found' }, { status: 404 });
    }
    return NextResponse.json({ data: data[0] }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ data: null, error: error.message }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const { supabase } = require('../../../utils/supabaseConfig');
    const classId = request.params.classId;
    const { data, error } = await supabase
      .from('classes')
      .update(request.body)
      .eq('id', classId);
    if (error) throw new Error(error.message);
    return NextResponse.json({ data: data }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ data: null, error: error.message }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { supabase } = require('../../../utils/supabaseConfig');
    const classId = request.params.classId;
    const { error } = await supabase.from('classes').delete().eq('id', classId);
    if (error) throw new Error(error.message);
    return NextResponse.json({ data: null, error: 'Class deleted' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ data: null, error: error.message }, { status: 500 });
  }
}
// pages/api/training-plans.js
export async function GET(request: Request) {
  try {
    const { supabase } = require('../../../utils/supabaseConfig');
    const { data, error } = await supabase
      .from('training_plans')
      .select('id, name, description');
    if (error) throw new Error(error.message);
    return NextResponse.json({ data: data }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ data: null, error: error.message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const { supabase } = require('../../../utils/supabaseConfig');
    const { data, error } = await supabase.from('training_plans').insert(request.body);
    if (error) throw new Error(error.message);
    return NextResponse.json({ data: data }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ data: null, error: error.message }, { status: 500 });
  }
}