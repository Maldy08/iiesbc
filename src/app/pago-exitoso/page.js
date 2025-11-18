// src/app/pago-exitoso/page.js
import Link from 'next/link';

export default function PagoExitosoPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 flex items-center justify-center">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl p-12 text-center">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="text-3xl font-bold text-gray-800 mb-4">¡Pago Exitoso!</h1>
        <p className="text-gray-600 mb-8">
          Tu inscripción ha sido procesada correctamente. Recibirás un correo de confirmación con los detalles.
        </p>
        <Link
          href="/"
          className="inline-block bg-green-700 text-white px-8 py-3 rounded-xl font-semibold hover:bg-green-800 transition-all duration-300"
        >
          Volver al Inicio
        </Link>
      </div>
    </div>
  );
}