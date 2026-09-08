import { NextResponse } from 'next/server';

import { NOMBRE_COOKIE, leerSesion } from '@/lib/constancias/sesion';

// Rutas del módulo que se sirven sin sesión.
const PUBLICAS = ['/constancias/login', '/api/constancias/sesion'];

export async function middleware(request) {
  const { pathname } = request.nextUrl;

  if (PUBLICAS.some((ruta) => pathname === ruta || pathname.startsWith(`${ruta}/`))) {
    return NextResponse.next();
  }

  const sesion = await leerSesion(request.cookies.get(NOMBRE_COOKIE)?.value);
  if (sesion) return NextResponse.next();

  if (pathname.startsWith('/api/')) {
    return NextResponse.json({ error: 'Sesión no válida o expirada.' }, { status: 401 });
  }

  const destino = new URL('/constancias/login', request.url);
  destino.searchParams.set('regresar', pathname);
  return NextResponse.redirect(destino);
}

export const config = {
  matcher: ['/constancias/:path*', '/api/constancias/:path*'],
};
