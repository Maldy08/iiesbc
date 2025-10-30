import { NextResponse } from 'next/server';
import { obtenerMisPonencias } from '@/lib/supabase/ponencias.service';

export async function GET() {
  try {
    const ponencias = await obtenerMisPonencias('ponente@test.com');

    return NextResponse.json({
      success: true,
      total: ponencias.length,
      ponencias,
    });

  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}

