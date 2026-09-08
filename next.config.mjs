/** @type {import('next').NextConfig} */
const nextConfig = {
  // El generador de constancias lee las fuentes y las imágenes del marco desde
  // disco en tiempo de ejecución. Sin esto, el trazado de dependencias de Next
  // no las incluye en la función serverless y el PDF truena en producción.
  outputFileTracingIncludes: {
    '/api/constancias/**': ['./src/lib/constancias/assets/**'],
  },
};

export default nextConfig;
