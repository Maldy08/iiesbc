import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase/client'; // ← Cambio aquí

export async function GET() {
  try {
    // Listar buckets disponibles
    const { data, error } = await supabaseAdmin.storage.listBuckets(); // ← Y aquí

    if (error) {
      return NextResponse.json(
        { 
          error: 'Error al verificar storage', 
          details: error,
          message: error.message 
        },
        { status: 500 }
      );
    }

    console.log('Buckets encontrados:', data); // Para debug

    // Verificar si existe el bucket 'ponencias'
    const ponenciasBucket = data.find(bucket => bucket.name === 'ponencias');

    if (!ponenciasBucket) {
      return NextResponse.json({
        success: false,
        message: '❌ El bucket "ponencias" no existe.',
        availableBuckets: data.map(b => b.name),
        totalBuckets: data.length
      });
    }

    return NextResponse.json({
      success: true,
      message: '✅ Storage configurado correctamente',
      bucket: ponenciasBucket
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Error inesperado', details: error.message },
      { status: 500 }
    );
  }
}