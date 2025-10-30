import { supabase, supabaseAdmin } from './client';

// ============================================
// FUNCIONES PARA USUARIOS/PONENTES
// ============================================

/**
 * Crear una nueva ponencia
 */
export async function crearPonencia(ponenciaData) {
  try {
    const { data, error } = await supabase
      .from('ponencias')
      .insert({
        usuario_id: ponenciaData.usuario_id,
        titulo: ponenciaData.titulo,
        resumen: ponenciaData.resumen,
        area_tematica: ponenciaData.area_tematica,
        tipo_participacion: ponenciaData.tipo_participacion,
        archivo_url: ponenciaData.archivo_url,
        archivo_nombre: ponenciaData.archivo_nombre,
        archivo_size: ponenciaData.archivo_size,
        estado: 'Pendiente de Revisión',
        version: 1,
      })
      .select()
      .single();

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error al crear ponencia:', error);
    throw error;
  }
}

/**
 * Obtener una ponencia específica por ID
 */
export async function obtenerPonenciaPorId(ponenciaId) {
  try {
    const { data, error } = await supabase
      .from('ponencias')
      .select(`
        *,
        usuario:usuarios!usuario_id(*),
        revisor:usuarios!revisor_asignado_id(*)
      `)
      .eq('id', ponenciaId)
      .single();

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error al obtener ponencia:', error);
    throw error;
  }
}

/**
 * Obtener las ponencias de un usuario por su email
 */
export async function obtenerMisPonencias(usuarioEmail) {
  try {
    // Primero obtenemos el ID del usuario
    const { data: usuario, error: errorUsuario } = await supabase
      .from('usuarios')
      .select('id')
      .eq('email', usuarioEmail)
      .single();

    if (errorUsuario) throw errorUsuario;

    // Luego obtenemos sus ponencias
    const { data, error } = await supabase
      .from('ponencias')
      .select(`
        *,
        usuario:usuarios!usuario_id(nombre_completo, email, institucion)
      `)
      .eq('usuario_id', usuario.id)
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data || [];
  } catch (error) {
    console.error('Error al obtener ponencias:', error);
    throw error;
  }
}

/**
 * Resubir archivo de ponencia (nueva versión)
 */
export async function resubirArchivoPonencia(ponenciaId, nuevaUrl, nombreArchivo, size) {
  try {
    // 1. Obtener ponencia actual
    const { data: ponenciaActual, error: errorGet } = await supabase
      .from('ponencias')
      .select('*')
      .eq('id', ponenciaId)
      .single();

    if (errorGet) throw errorGet;
    if (!ponenciaActual) throw new Error('Ponencia no encontrada');

    // 2. Guardar versión anterior en historial
    if (ponenciaActual.archivo_url) {
      const { error: errorHistorial } = await supabase
        .from('historial_versiones')
        .insert({
          ponencia_id: ponenciaId,
          version: ponenciaActual.version,
          archivo_url: ponenciaActual.archivo_url,
          archivo_nombre: ponenciaActual.archivo_nombre,
          comentario: 'Versión anterior guardada automáticamente',
        });

      if (errorHistorial) console.error('Error al guardar historial:', errorHistorial);
    }

    // 3. Actualizar ponencia con nuevo archivo
    const { data, error } = await supabase
      .from('ponencias')
      .update({
        archivo_url: nuevaUrl,
        archivo_nombre: nombreArchivo,
        archivo_size: size,
        version: ponenciaActual.version + 1,
        estado: 'Pendiente de Revisión',
        comentarios_revisor: null,
      })
      .eq('id', ponenciaId)
      .select()
      .single();

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error al resubir archivo:', error);
    throw error;
  }
}

// ============================================
// FUNCIONES PARA ADMINISTRADORES/REVISORES
// ============================================

/**
 * Obtener todas las ponencias (solo para admins)
 */
export async function obtenerTodasLasPonencias(filtros = {}) {
  try {
    let query = supabaseAdmin
      .from('ponencias')
      .select(`
        *,
        usuario:usuarios!usuario_id(nombre_completo, email, institucion),
        revisor:usuarios!revisor_asignado_id(nombre_completo, email)
      `)
      .order('created_at', { ascending: false });

    if (filtros.estado) {
      query = query.eq('estado', filtros.estado);
    }

    if (filtros.revisor) {
      query = query.eq('revisor_asignado_id', filtros.revisor);
    }

    const { data, error } = await query;

    if (error) throw error;
    return data || [];
  } catch (error) {
    console.error('Error al obtener todas las ponencias:', error);
    throw error;
  }
}

/**
 * Actualizar el estado de una ponencia (solo admins)
 */
export async function actualizarEstadoPonencia(ponenciaId, nuevoEstado, comentarios, revisorId) {
  try {
    const updateData = {
      estado: nuevoEstado,
      comentarios_revisor: comentarios,
      fecha_revision: new Date().toISOString(),
    };

    if (revisorId) {
      updateData.revisor_asignado_id = revisorId;
    }

    const { data, error } = await supabaseAdmin
      .from('ponencias')
      .update(updateData)
      .eq('id', ponenciaId)
      .select()
      .single();

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error al actualizar estado:', error);
    throw error;
  }
}

/**
 * Obtener el historial de versiones de una ponencia
 */
export async function obtenerHistorialPonencia(ponenciaId) {
  try {
    const { data, error } = await supabase
      .from('historial_versiones')
      .select('*')
      .eq('ponencia_id', ponenciaId)
      .order('version', { ascending: false });

    if (error) throw error;
    return data || [];
  } catch (error) {
    console.error('Error al obtener historial:', error);
    throw error;
  }
}
