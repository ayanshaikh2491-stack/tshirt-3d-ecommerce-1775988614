import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';
const supabase = createClient(
  process.env.SUPABASE_URL || 'https://dummy.supabase.co',
  process.env.SUPABASE_ANON_KEY || 'dummy'
);
export async function GET() {
  try {
    const { data, error } = await supabase
      .from('classes')
      .select(`
        id, 
        name, 
        description, 
        schedule_time, 
        capacity, 
        trainers (
          id, 
          name, 
          specialty
        )
      `);
    if (error) throw new Error(error.message);
    return NextResponse.json({ data, error: null }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ data: null, error: error.message || 'Internal Server Error' }, { status: 500 });
  }
}
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, description, trainer_id, schedule_time, capacity } = body;
    if (!name || !trainer_id || !schedule_time || capacity === undefined) {
      return NextResponse.json({ data: null, error: 'Missing required fields: name, trainer_id, schedule_time, and capacity are required' }, { status: 400 });
    }
    const { data, error } = await supabase
      .from('classes')
      .insert([
        { 
          name, 
          description, 
          trainer_id, 
          schedule_time, 
          capacity 
        }
      ])
      .select();
    if (error) throw new Error(error.message);
    return NextResponse.json({ data, error: null }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ data: null, error: error.message || 'Internal Server Error' }, { status: 500 });
  }
}