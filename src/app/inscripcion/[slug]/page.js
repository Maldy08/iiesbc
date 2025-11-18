// src/app/inscripcion/[slug]/page.js
'use client';

import { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { supabase } from '@/lib/supabase/client';
import CheckoutForm from '../CheckoutForm'; // Crearemos este archivo a continuación

// Carga Stripe con tu llave PUBLICA (la que empieza con 'pk_test_')
// Asegúrate de que esté en .env.local
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

export default function InscripcionPage({ params }) {
  const { slug } = params;
  const [programa, setPrograma] = useState(null);
  const [clientSecret, setClientSecret] = useState('');
  
  // Datos del formulario
  const [email, setEmail] = useState('');
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [loadingForm, setLoadingForm] = useState(false);

  // 1. Cargar datos del programa desde Supabase
  useEffect(() => {
    async function getPrograma() {
      if (!slug) return;
      
      setLoading(true);
      const { data, error } = await supabase
        .from('programas')
        .select('id, nombre, monto_inscripcion, moneda')
        .eq('slug', slug)
        .single();

      if (error || !data) {
        setError('Error: No se pudo encontrar el programa seleccionado.');
        console.error(error);
      } else {
        setPrograma(data);
      }
      setLoading(false);
    }
    getPrograma();
  }, [slug]);

  // 2. Manejador para crear el Intento de Pago
  const handleSubmitDatos = async (e) => {
    e.preventDefault();
    if (!programa) return;

    setLoadingForm(true);
    setError('');

    try {
      // Llama a la API que creamos en el backend
      const res = await fetch('/api/inscripcion/crear-intento', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: email,
          nombre: nombre,
          telefono: telefono,
          programa_id: programa.id,
        }),
      });

      const data = await res.json();

      if (res.status !== 200) {
        throw new Error(data.error || 'Error al preparar el pago');
      }

      setClientSecret(data.clientSecret); // ¡Éxito! Tenemos el secret
    } catch (err) {
      setError(err.message);
    } finally {
      setLoadingForm(false);
    }
  };

  // Opciones para el <Elements /> de Stripe
  const appearance = { theme: 'stripe' };
  const options = { clientSecret, appearance };

  if (loading) {
    return <div className="text-center p-12">Cargando programa...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-xl mx-auto">
        <div className="bg-white rounded-lg shadow-xl p-8">
          
          {/* Encabezado con detalles del programa */}
          <div className="text-center border-b pb-6 mb-6">
            <h1 className="text-2xl font-bold text-gray-900">
              {programa ? programa.nombre : 'Cargando...'}
            </h1>
            <p className="text-lg text-gray-700 mt-2">
              Monto de Inscripción:
              <span className="font-bold text-green-700 ml-2">
                ${new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(programa?.monto_inscripcion || 0)}
              </span>
            </p>
          </div>

          {/* Paso 1: Formulario de Datos (si NO hay clientSecret) */}
          {!clientSecret && (
            <form onSubmit={handleSubmitDatos}>
              <h2 className="text-xl font-semibold mb-4">Tus Datos</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Nombre Completo</label>
                  <input
                    type="text"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    required
                    className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Correo Electrónico</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Teléfono (Opcional)</label>
                  <input
                    type="tel"
                    value={telefono}
                    onChange={(e) => setTelefono(e.target.value)}
                    className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                  />
                </div>
              </div>
              
              {error && <div className="text-red-600 text-sm mt-4">{error}</div>}

              <button
                type="submit"
                disabled={loadingForm || !programa}
                className="w-full mt-6 bg-green-700 text-white py-3 rounded-md font-semibold hover:bg-green-800 disabled:bg-gray-400"
              >
                {loadingForm ? 'Procesando...' : 'Continuar al Pago'}
              </button>
            </form>
          )}

          {/* Paso 2: Formulario de Pago (si SÍ hay clientSecret) */}
          {clientSecret && (
            <Elements options={options} stripe={stripePromise}>
              <CheckoutForm />
            </Elements>
          )}

        </div>
      </div>
    </div>
  );
}