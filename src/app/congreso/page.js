// src/app/registro-congreso/page.js

import RegistroCongresoForm from '../components/RegistroCongresoForm';
import Image from 'next/image';

export const metadata = {
  title: 'Registro al Congreso - IIESBC',
  description: 'Regístrate al Congreso Académico del IIESBC 2025',
};

export default function RegistroCongresoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Header de la página */}
      <div className="relative bg-gradient-to-r from-green-900 via-green-800 to-orange-900 text-white py-20 overflow-hidden">
        {/* Background image */}
        <Image
          src="/images/registro.jpg"
          alt="Registro al Congreso - IIESBC"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/85 via-green-800/75 to-orange-900/85" />
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-semibold backdrop-blur-sm">
                Congreso Académico 2025
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Formulario de Registro
            </h1>
            <p className="text-xl text-green-100 max-w-2xl mx-auto">
              Completa el formulario para asegurar tu participación en nuestro evento académico
            </p>
          </div>
        </div>
      </div>

      {/* Formulario */}
      <div className="max-w-6xl mx-auto px-4 pb-20">
        <RegistroCongresoForm />
      </div>

      {/* Información adicional */}
      <div className="bg-gradient-to-r from-green-50 to-orange-50 py-16">
        <div className="max-w-6xl mx-auto px-4">

          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">
              ¿Tienes dudas? Contáctanos:
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="mailto:contacto@iiesbc.mx" className="flex items-center text-green-700 hover:text-green-800 font-semibold">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                contacto@iiesbc.mx
              </a>
              <a href="tel:+526861248070" className="flex items-center text-orange-700 hover:text-orange-800 font-semibold">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                (686) 124-8070
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}