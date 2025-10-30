import { NextResponse } from 'next/server';
import { crearOActualizarUsuario } from '@/lib/supabase/usuarios.service';
import { crearPonencia } from '@/lib/supabase/ponencias.service';

export async function GET() {
  try {
    // 1. Crear/obtener usuario
    const usuario = await crearOActualizarUsuario({
      email: 'ponente@test.com',
      nombre_completo: 'Juan Pérez',
      institucion: 'UABC',
      telefono: '6641234567',
      rol: 'ponente',
    });

    // 2. Crear ponencia de prueba
    const ponencia = await crearPonencia({
      usuario_id: usuario.id,
      titulo: 'Inteligencia Artificial en la Educación',
      resumen: 'Este trabajo explora el uso de IA en ambientes educativos...',
      area_tematica: 'Tecnología Educativa',
      tipo_participacion: 'ponencia',
      archivo_url: 'https://ejemplo.com/archivo.pdf', // URL temporal
      archivo_nombre: 'ponencia_ia.pdf',
      archivo_size: 1024000,
    });

    return NextResponse.json({
      success: true,
      message: '✅ Ponencia de prueba creada',
      usuario,
      ponencia,
    });

  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}



