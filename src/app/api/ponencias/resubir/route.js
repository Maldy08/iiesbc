import { NextResponse } from 'next/server';
import { subirArchivoPonencia } from '@/lib/supabase/storage.service';
import { resubirArchivoPonencia, obtenerPonenciaPorId } from '@/lib/supabase/ponencias.service';
import { obtenerUsuarioPorEmail } from '@/lib/supabase/usuarios.service';

export async function POST(request) {
  try {
    const formData = await request.formData();
    
    const ponenciaId = formData.get('ponencia_id');
    const email = formData.get('email');
    const archivo = formData.get('archivo'); // Nuevo PDF

    // Validaciones
    if (!ponenciaId || !email || !archivo) {
      return NextResponse.json(
        { error: 'Faltan datos requeridos' },
        { status: 400 }
      );
    }

    // 1. Verificar que la ponencia pertenece al usuario
    const ponencia = await obtenerPonenciaPorId(ponenciaId);
    const usuario = await obtenerUsuarioPorEmail(email);

    if (!usuario || ponencia.usuario_id !== usuario.id) {
      return NextResponse.json(
        { error: 'No tienes permiso para modificar esta ponencia' },
        { status: 403 }
      );
    }

    // 2. Verificar que el estado permite resubir
    const estadosPermitidos = ['Requiere Cambios', 'Pendiente de Revisión'];
    if (!estadosPermitidos.includes(ponencia.estado)) {
      return NextResponse.json(
        { error: `No se puede resubir en estado: ${ponencia.estado}` },
        { status: 400 }
      );
    }

    // 3. Subir nuevo archivo a Storage
    const archivoInfo = await subirArchivoPonencia(
      archivo,
      usuario.id,
      ponenciaId
    );

    // 4. Actualizar ponencia en la BD
    const ponenciaActualizada = await resubirArchivoPonencia(
      ponenciaId,
      archivoInfo.url,
      archivoInfo.name,
      archivoInfo.size
    );

    return NextResponse.json({
      success: true,
      message: 'Archivo actualizado exitosamente',
      ponencia: ponenciaActualizada,
    });

  } catch (error) {
    console.error('Error al resubir archivo:', error);
    return NextResponse.json(
      { error: 'Error al resubir archivo', details: error.message },
      { status: 500 }
    );
  }
}