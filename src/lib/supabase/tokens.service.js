import { supabase, supabaseAdmin } from './client';

/**
 * Generar un token único de 8 caracteres
 */
function generarToken() {
  return Math.random().toString(36).substring(2, 10).toUpperCase();
}

/**
 * Crear un token de acceso para un usuario
 * @param {string} usuarioId - ID del usuario
 * @returns {Promise<Object>} Token creado
 */
export async function crearToken(usuarioId) {
  try {
    const token = generarToken();
    
    // El token expira en 30 días
    const fechaExpiracion = new Date();
    fechaExpiracion.setDate(fechaExpiracion.getDate() + 30);

    const { data, error } = await supabaseAdmin
      .from('tokens_acceso')
      .insert({
        usuario_id: usuarioId,
        token: token,
        usado: false,
        fecha_expiracion: fechaExpiracion.toISOString(),
      })
      .select()
      .single();

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error al crear token:', error);
    throw error;
  }
}

/**
 * Validar un token
 * @param {string} token - Token a validar
 * @returns {Promise<Object|null>} Datos del token si es válido, null si no
 */
export async function validarToken(token) {
  try {
    const { data, error } = await supabase
      .from('tokens_acceso')
      .select(`
        *,
        usuario:usuarios(*)
      `)
      .eq('token', token)
      .single();

    if (error || !data) {
      return null;
    }

    // Verificar que no esté usado
    if (data.usado) {
      return { valido: false, mensaje: 'Este token ya fue utilizado' };
    }

    // Verificar que no esté expirado
    if (new Date(data.fecha_expiracion) < new Date()) {
      return { valido: false, mensaje: 'Este token ha expirado' };
    }

    return { valido: true, data };
  } catch (error) {
    console.error('Error al validar token:', error);
    return null;
  }
}

/**
 * Marcar un token como usado
 * @param {string} token - Token a marcar
 */
export async function marcarTokenComoUsado(token) {
  try {
    const { error } = await supabaseAdmin
      .from('tokens_acceso')
      .update({ usado: true })
      .eq('token', token);

    if (error) throw error;
  } catch (error) {
    console.error('Error al marcar token como usado:', error);
    throw error;
  }
}

/**
 * Obtener token de un usuario (si existe y no está usado)
 * @param {string} usuarioId - ID del usuario
 * @returns {Promise<Object|null>} Token activo o null
 */
export async function obtenerTokenActivo(usuarioId) {
  try {
    const { data, error } = await supabase
      .from('tokens_acceso')
      .select('*')
      .eq('usuario_id', usuarioId)
      .eq('usado', false)
      .gt('fecha_expiracion', new Date().toISOString())
      .order('created_at', { ascending: false })
      .limit(1)
      .single();

    if (error) return null;
    return data;
  } catch (error) {
    console.error('Error al obtener token activo:', error);
    return null;
  }
}