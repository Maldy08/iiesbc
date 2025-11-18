// src/app/inscripcion/CheckoutForm.js
'use client';

import { useState } from 'react';
import {
  PaymentElement,
  useStripe,
  useElements
} from '@stripe/react-stripe-js';

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js aún no ha cargado.
      return;
    }

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Esta es la URL a la que Stripe redirigirá al usuario
        // después de un pago exitoso.
        return_url: `${window.location.origin}/pago-exitoso`,
      },
    });

    // Este punto solo se alcanza si hay un error inmediato.
    // De lo contrario, el usuario es redirigido a `return_url`.
    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("Ocurrió un error inesperado.");
    }

    setIsLoading(false);
  };

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      <h2 className="text-xl font-semibold mb-4">Datos de Pago</h2>
      
      <PaymentElement id="payment-element" />
      
      <button 
        disabled={isLoading || !stripe || !elements} 
        id="submit"
        className="w-full mt-6 bg-green-700 text-white py-3 rounded-md font-semibold hover:bg-green-800 disabled:bg-gray-400"
      >
        <span id="button-text">
          {isLoading ? "Procesando..." : "Pagar Ahora"}
        </span>
      </button>

      {/* Muestra mensajes de error del pago */}
      {message && <div id="payment-message" className="text-red-600 text-sm mt-4">{message}</div>}
    </form>
  );
}