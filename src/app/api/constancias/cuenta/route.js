import { NextResponse } from 'next/server';

import { cambiarContrasena, exigirSesion } from '@/lib/constancias/auth';
import { NOMBRE_COOKIE, firmarSesion, opcionesCookie } from '@/lib/constancias/sesion';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(request) {
  try {
    const sesion = await exigirSesion();
    const { actual, nueva } = await request.json();

    await cambiarContrasena(sesion.id, actual, nueva);

    // Se renueva la cookie para que quien cambió su contraseña siga trabajando
    // sin tener que volver a entrar.
    const respuesta = NextResponse.json({ ok: true });
    respuesta.cookies.set(NOMBRE_COOKIE, await firmarSesion(sesion), opcionesCookie());
    return respuesta;
  } catch (error) {
    console.error('Error al cambiar la contraseña:', error);
    return NextResponse.json({ error: error.message }, { status: error.status || 500 });
  }
}
