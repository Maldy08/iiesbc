// URL pública del sitio, usada por el QR y por los enlaces de validación.
export function urlBase() {
  const configurada = process.env.NEXT_PUBLIC_SITE_URL || process.env.NEXT_PUBLIC_URL;
  return (configurada || 'https://www.iiesbc.mx').replace(/\/+$/, '');
}

export function urlValidacion(folio) {
  return `${urlBase()}/validar/${encodeURIComponent(folio)}`;
}
