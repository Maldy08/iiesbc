import { NextResponse } from 'next/server';
import { subirArchivoPonencia } from '@/lib/supabase/storage.service';
import { crearPonencia } from '@/lib/supabase/ponencias.service';
import { crearOActualizarUsuario } from '@/lib/supabase/usuarios.service';

export async function POST(request) {
  try {
    const formData = await request.formData();
    
    // Extraer datos del formulario
    const email = formData.get('email');
    const nombre_completo = formData.get('nombre_completo');
    const institucion = formData.get('institucion');
    const telefono = formData.get('telefono');
    const titulo = formData.get('titulo');
    const resumen = formData.get('resumen');
    const area_tematica = formData.get('area_tematica');
    const tipo_participacion = formData.get('tipo_participacion');
    const archivo = formData.get('archivo'); // PDF

    // Validaciones básicas
    if (!email || !nombre_completo || !titulo || !resumen || !archivo) {
      return NextResponse.json(
        { error: 'Faltan campos obligatorios' },
        { status: 400 }
      );
    }

    // 1. Crear o actualizar usuario
    const usuario = await crearOActualizarUsuario({
      email,
      nombre_completo,
      institucion,
      telefono,
      rol: 'ponente',
    });

    // 2. Generar ID temporal para la ponencia
    const ponenciaIdTemp = crypto.randomUUID();

    // 3. Subir archivo a Storage
    const archivoInfo = await subirArchivoPonencia(
      archivo,
      usuario.id,
      ponenciaIdTemp
    );

    // 4. Crear registro de ponencia en la BD
    const ponencia = await crearPonencia({
      usuario_id: usuario.id,
      titulo,
      resumen,
      area_tematica,
      tipo_participacion,
      archivo_url: archivoInfo.url,
      archivo_nombre: archivoInfo.name,
      archivo_size: archivoInfo.size,
    });

    return NextResponse.json({
      success: true,
      message: 'Ponencia creada exitosamente',
      ponencia,
    });

  } catch (error) {
    console.error('Error al crear ponencia:', error);
    return NextResponse.json(
      { error: 'Error al crear ponencia', details: error.message },
      { status: 500 }
    );
  }
}