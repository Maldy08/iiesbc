// src/app/registro-congreso/page.js

import RegistroCongresoForm from '../components/RegistroCongresoForm';

export const metadata = {
  title: 'Registro al Congreso - IIESBC',
  description: 'Regístrate al Congreso Académico del IIESBC 2025',
};

export default function RegistroCongresoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Header de la página */}
      <div className="bg-gradient-to-r from-green-900 via-green-800 to-orange-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
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

      {/* Información importante */}
      <div className="max-w-6xl mx-auto px-4 -mt-10 mb-12">
        <div className="grid md:grid-cols-3 gap-6">
          {/* Fecha */}
          <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">Fecha del Evento</h3>
            <p className="text-gray-600">15-16 de Noviembre, 2025</p>
          </div>

          {/* Lugar */}
          <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">Lugar</h3>
            <p className="text-gray-600">Campus IIESBC, Mexicali</p>
          </div>

          {/* Costo */}
          <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-orange-600 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">Inversión</h3>
            <p className="text-gray-600">$500 MXN (Incluye materiales)</p>
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
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">
            Información Importante
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h4 className="font-bold text-lg text-gray-800 mb-3 flex items-center">
                <svg className="w-5 h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                Datos Bancarios
              </h4>
              <p className="text-gray-600 text-sm mb-2">
                <strong>Banco:</strong> Bancomer<br />
                <strong>Cuenta:</strong> 1234567890<br />
                <strong>CLABE:</strong> 012345678901234567<br />
                <strong>Beneficiario:</strong> IIESBC
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h4 className="font-bold text-lg text-gray-800 mb-3 flex items-center">
                <svg className="w-5 h-5 text-orange-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                Instrucciones
              </h4>
              <ul className="text-gray-600 text-sm space-y-2">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  Realiza tu pago y guarda el comprobante
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  Completa el formulario adjuntando tu recibo
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  Recibirás confirmación por correo en 24-48hrs
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">
              ¿Tienes dudas? Contáctanos:
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="mailto:congreso@iiesbc.edu.mx" className="flex items-center text-green-700 hover:text-green-800 font-semibold">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                congreso@iiesbc.edu.mx
              </a>
              <a href="tel:+526861234567" className="flex items-center text-orange-700 hover:text-orange-800 font-semibold">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                (686) 123-4567
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}