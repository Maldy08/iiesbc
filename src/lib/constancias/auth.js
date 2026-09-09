// Autenticación del módulo de constancias (solo servidor: usa bcrypt).
//
// Hoy hay un solo usuario, la encargada de emisión. La tabla ya trae columna
// `rol`, así que agregar más gente o separar permisos no requiere migrar nada:
// basta con insertar usuarios y revisar `sesion.rol` donde haga falta.

import bcrypt from 'bcryptjs';
import { cookies } from 'next/headers';

import { supabaseAdmin } from '@/lib/supabase/server';
import { NOMBRE_COOKIE, leerSesion } from './sesion';

const RONDAS_BCRYPT = 12;
export const LARGO_MINIMO_CONTRASENA = 10;

export async function hashearContrasena(contrasena) {
  return bcrypt.hash(contrasena, RONDAS_BCRYPT);
}

/**
 * Verifica usuario y contraseña. Devuelve el usuario o null.
 * El mensaje de error es siempre el mismo hacia afuera, para no revelar
 * si el que falló fue el usuario o la contraseña.
 */
export async function autenticar(usuario, contrasena) {
  if (!usuario || !contrasena) return null;

  const { data, error } = await supabaseAdmin
    .from('constancias_usuarios')
    .select('id, usuario, nombre, rol, password_hash, activo')
    .eq('usuario', String(usuario).trim().toLowerCase())
    .maybeSingle();

  if (error) throw new Error(`Error al consultar el usuario: ${error.message}`);
  if (!data || !data.activo) {
    // Se compara igual contra un hash cualquiera para que el tiempo de
    // respuesta no delate si el usuario existe.
    await bcrypt.compare(String(contrasena), '$2a$12$invalidinvalidinvalidinvalidinvalidinvalidinvalidinv');
    return null;
  }

  const coincide = await bcrypt.compare(String(contrasena), data.password_hash);
  if (!coincide) return null;

  await supabaseAdmin
    .from('constancias_usuarios')
    .update({ ultimo_acceso: new Date().toISOString() })
    .eq('id', data.id);

  return { id: data.id, usuario: data.usuario, nombre: data.nombre, rol: data.rol };
}

/** Sesión activa leída de la cookie, para route handlers y server components. */
export async function sesionActual() {
  const almacen = await cookies();
  return leerSesion(almacen.get(NOMBRE_COOKIE)?.value);
}

/** Igual que sesionActual pero truena con 401 si no hay sesión. */
export async function exigirSesion() {
  const sesion = await sesionActual();
  if (!sesion) {
    const error = new Error('Sesión no válida o expirada.');
    error.status = 401;
    throw error;
  }
  return sesion;
}

/**
 * Cambio de contraseña por parte del propio usuario.
 * Exige la contraseña vigente: así una sesión abierta y olvidada en un equipo
 * ajeno no alcanza para quedarse con la cuenta.
 */
export async function cambiarContrasena(id, actual, nueva) {
  const problema = (mensaje, status = 400) => {
    const error = new Error(mensaje);
    error.status = status;
    return error;
  };

  if (!actual || !nueva) throw problema('Faltan la contraseña actual y la nueva.');
  if (String(nueva).length < LARGO_MINIMO_CONTRASENA) {
    throw problema(`La nueva contraseña debe tener al menos ${LARGO_MINIMO_CONTRASENA} caracteres.`);
  }
  if (String(actual) === String(nueva)) {
    throw problema('La nueva contraseña debe ser distinta de la actual.');
  }

  const { data, error } = await supabaseAdmin
    .from('constancias_usuarios')
    .select('id, password_hash, activo')
    .eq('id', id)
    .maybeSingle();

  if (error) throw new Error(`Error al consultar el usuario: ${error.message}`);
  if (!data || !data.activo) throw problema('La cuenta ya no está activa.', 403);

  const coincide = await bcrypt.compare(String(actual), data.password_hash);
  if (!coincide) throw problema('La contraseña actual no es correcta.', 401);

  const { error: errorAlGuardar } = await supabaseAdmin
    .from('constancias_usuarios')
    .update({ password_hash: await hashearContrasena(nueva) })
    .eq('id', id);

  if (errorAlGuardar) throw new Error(`No se pudo guardar la contraseña: ${errorAlGuardar.message}`);
}
