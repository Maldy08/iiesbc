export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/private/'], // Exclude API or private routes from crawler indexing
    },
    sitemap: 'https://www.iiesbc.mx/sitemap.xml',
  };
}
