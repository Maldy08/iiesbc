// Sesión del módulo de constancias: JWT firmado guardado en cookie httpOnly.
// Solo depende de `jose`, así que también corre en el runtime edge del middleware.

import { SignJWT, jwtVerify } from 'jose';

export const NOMBRE_COOKIE = 'iiesbc_constancias';
export const DURACION_HORAS = 8;

function llave() {
  const secreto = process.env.CONSTANCIAS_SESSION_SECRET;
  if (!secreto || secreto.length < 32) {
    throw new Error(
      'Falta CONSTANCIAS_SESSION_SECRET (mínimo 32 caracteres). Genera uno con: openssl rand -base64 48'
    );
  }
  return new TextEncoder().encode(secreto);
}

export async function firmarSesion({ id, usuario, nombre, rol }) {
  return new SignJWT({ usuario, nombre, rol })
    .setProtectedHeader({ alg: 'HS256' })
    .setSubject(id)
    .setIssuedAt()
    .setExpirationTime(`${DURACION_HORAS}h`)
    .sign(llave());
}

export async function leerSesion(token) {
  if (!token) return null;
  try {
    const { payload } = await jwtVerify(token, llave());
    return { id: payload.sub, usuario: payload.usuario, nombre: payload.nombre, rol: payload.rol };
  } catch {
    return null;
  }
}

export function opcionesCookie() {
  return {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: DURACION_HORAS * 60 * 60,
  };
}
