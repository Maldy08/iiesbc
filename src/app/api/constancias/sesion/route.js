import { NextResponse } from 'next/server';

import { autenticar, sesionActual } from '@/lib/constancias/auth';
import { NOMBRE_COOKIE, firmarSesion, opcionesCookie } from '@/lib/constancias/sesion';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET() {
  const sesion = await sesionActual();
  if (!sesion) return NextResponse.json({ sesion: null }, { status: 401 });
  return NextResponse.json({ sesion });
}

export async function POST(request) {
  try {
    const { usuario, contrasena } = await request.json();
    const encontrado = await autenticar(usuario, contrasena);

    if (!encontrado) {
      return NextResponse.json({ error: 'Usuario o contraseña incorrectos.' }, { status: 401 });
    }

    const token = await firmarSesion(encontrado);
    const respuesta = NextResponse.json({ sesion: encontrado });
    respuesta.cookies.set(NOMBRE_COOKIE, token, opcionesCookie());
    return respuesta;
  } catch (error) {
    console.error('Error al iniciar sesión:', error);
    return NextResponse.json({ error: 'No se pudo iniciar sesión.' }, { status: 500 });
  }
}

export async function DELETE() {
  const respuesta = NextResponse.json({ ok: true });
  respuesta.cookies.set(NOMBRE_COOKIE, '', { ...opcionesCookie(), maxAge: 0 });
  return respuesta;
}
