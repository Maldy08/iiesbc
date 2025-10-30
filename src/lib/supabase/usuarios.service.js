import { supabase, supabaseAdmin } from './client';

/**
 * Crear o actualizar un usuario
 */
export async function crearOActualizarUsuario(usuarioData) {
  try {
    const { data, error } = await supabase
      .from('usuarios')
      .upsert({
        email: usuarioData.email,
        nombre_completo: usuarioData.nombre_completo,
        institucion: usuarioData.institucion,
        telefono: usuarioData.telefono,
        rol: usuarioData.rol || 'ponente',
      }, {
        onConflict: 'email',
      })
      .select()
      .single();

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error al crear/actualizar usuario:', error);
    throw error;
  }
}

/**
 * Obtener usuario por email
 */
export async function obtenerUsuarioPorEmail(email) {
  try {
    const { data, error } = await supabase
      .from('usuarios')
      .select('*')
      .eq('email', email)
      .single();

    if (error) {
      if (error.code === 'PGRST116') return null; // No encontrado
      throw error;
    }
    
    return data;
  } catch (error) {
    console.error('Error al obtener usuario:', error);
    throw error;
  }
}

/**
 * Verificar si un usuario es administrador o revisor
 */
export async function esAdministrador(email) {
  try {
    const { data, error } = await supabase
      .from('usuarios')
      .select('rol')
      .eq('email', email)
      .single();

    if (error) return false;
    
    return data?.rol === 'admin' || data?.rol === 'revisor';
  } catch (error) {
    console.error('Error al verificar admin:', error);
    return false;
  }
}

/**
 * Obtener todos los revisores (solo para admins)
 */
export async function obtenerRevisores() {
  try {
    const { data, error } = await supabaseAdmin
      .from('usuarios')
      .select('*')
      .in('rol', ['admin', 'revisor'])
      .order('nombre_completo');

    if (error) throw error;
    return data || [];
  } catch (error) {
    console.error('Error al obtener revisores:', error);
    throw error;
  }
}