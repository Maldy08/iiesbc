import { NextResponse } from 'next/server';
import { subirArchivoPonencia } from '@/lib/supabase/storage.service';
import { crearPonencia } from '@/lib/supabase/ponencias.service';
import { crearOActualizarUsuario, obtenerUsuarioPorEmail } from '@/lib/supabase/usuarios.service';
import { validarToken, marcarTokenComoUsado } from '@/lib/supabase/tokens.service';

export async function POST(request) {
  try {
    const formData = await request.formData();
    
    // Datos del formulario
    const email = formData.get('email');
    const nombre_completo = formData.get('nombre_completo');
    const institucion = formData.get('institucion');
    const telefono = formData.get('telefono');
    const titulo = formData.get('titulo');
    const resumen = formData.get('resumen');
    const area_tematica = formData.get('area_tematica');
    const tipo_participacion = formData.get('tipo_participacion');
    const archivo = formData.get('archivo'); // PDF
    const token = formData.get('token'); // Token de acceso

    // Validaciones
    if (!email || !nombre_completo || !titulo || !resumen || !archivo || !token) {
      return NextResponse.json(
        { error: 'Faltan campos obligatorios' },
        { status: 400 }
      );
    }

    // 1. Validar token
    const tokenValido = await validarToken(token);
    if (!tokenValido || !tokenValido.valido) {
      return NextResponse.json(
        { error: tokenValido?.mensaje || 'Token inválido o expirado' },
        { status: 403 }
      );
    }

    // 2. Verificar que el email del token coincida con el del formulario
    if (tokenValido.data.usuario.email !== email) {
      return NextResponse.json(
        { error: 'El token no corresponde a este usuario' },
        { status: 403 }
      );
    }

    // 3. Obtener o crear usuario
    let usuario = await obtenerUsuarioPorEmail(email);
    
    if (!usuario) {
      usuario = await crearOActualizarUsuario({
        email,
        nombre_completo,
        institucion,
        telefono,
        rol: 'ponente',
      });
    }

    // 4. Generar ID temporal para la ponencia (para el nombre del archivo)
    const ponenciaIdTemp = crypto.randomUUID();

    // 5. Subir archivo a Storage
    const archivoInfo = await subirArchivoPonencia(
      archivo,
      usuario.id,
      ponenciaIdTemp
    );

    // 6. Crear registro de ponencia en la BD
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

    // 7. Marcar token como usado
    await marcarTokenComoUsado(token);

    // 8. Enviar email de confirmación (opcional)
    // await enviarEmailConfirmacion(email, ponencia);

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
