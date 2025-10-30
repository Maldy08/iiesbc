'use client';

import { useState } from 'react';

export default function RegistroCongresoForm() {
  const [formData, setFormData] = useState({
    nombreCompleto: '',
    correoElectronico: '',
    institucion: '',
    telefono: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [tokenGenerado, setTokenGenerado] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.nombreCompleto.trim()) {
      newErrors.nombreCompleto = 'El nombre completo es requerido';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.correoElectronico.trim()) {
      newErrors.correoElectronico = 'El correo electrónico es requerido';
    } else if (!emailRegex.test(formData.correoElectronico)) {
      newErrors.correoElectronico = 'Correo electrónico inválido';
    }

    if (!formData.institucion.trim()) {
      newErrors.institucion = 'La institución es requerida';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      const firstError = document.querySelector('.error-message');
      if (firstError) {
        firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/registro', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.correoElectronico,
          nombre_completo: formData.nombreCompleto,
          institucion: formData.institucion,
          telefono: formData.telefono,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Error al enviar el formulario');
      }

      setSubmitSuccess(true);
      setTokenGenerado(data.token);
      
      // Limpiar formulario
      setFormData({
        nombreCompleto: '',
        correoElectronico: '',
        institucion: '',
        telefono: '',
      });

    } catch (error) {
      console.error('Error:', error);
      setErrors({ submit: error.message || 'Hubo un error al enviar el formulario. Por favor intenta nuevamente.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-2xl p-12">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-3xl font-bold text-gray-800 mb-4">¡Registro Exitoso!</h2>
        
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-6">
          <p className="text-sm text-gray-600 mb-3">
            Hemos enviado un correo a <strong className="text-gray-900">{formData.correoElectronico}</strong> con tu token de acceso.
          </p>
          
          <div className="bg-white rounded-lg p-4 border-2 border-blue-300">
            <p className="text-xs text-gray-600 mb-2 text-center">Tu token de acceso es:</p>
            <p className="text-3xl font-bold text-gray-900 tracking-widest text-center">
              {tokenGenerado}
            </p>
          </div>
          
          <p className="text-sm text-gray-600 mt-4">
            📋 <strong>Guarda este token</strong>, lo necesitarás para subir tu ponencia.
          </p>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mb-6">
          <p className="text-sm text-yellow-800">
            <strong>Siguiente paso:</strong> Usa tu token para subir tu ponencia en la siguiente página.
          </p>
        </div>

        <div className="flex gap-3">
          <button
            onClick={() => {
              setSubmitSuccess(false);
              setTokenGenerado('');
            }}
            className="flex-1 bg-gray-100 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-all duration-300"
          >
            Realizar otro registro
          </button>
          
          <a
            href="/subir-ponencia"
            className="flex-1 bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-3 rounded-xl font-semibold hover:from-green-700 hover:to-green-800 transition-all duration-300 shadow-lg hover:shadow-xl text-center"
          >
            Subir mi ponencia →
          </a>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl p-8 md:p-12">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Registro de Ponentes
        </h1>
        <p className="text-gray-600">
          Completa el formulario para obtener tu token de acceso
        </p>
      </div>

      {errors.submit && (
        <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 rounded-lg">
          {errors.submit}
        </div>
      )}

      <div className="space-y-6">
        {/* Nombre Completo */}
        <div>
          <label htmlFor="nombreCompleto" className="block text-sm font-semibold text-gray-700 mb-2">
            Nombre Completo <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="nombreCompleto"
            name="nombreCompleto"
            value={formData.nombreCompleto}
            onChange={handleChange}
            className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 transition-all placeholder:text-gray-500 text-black ${
              errors.nombreCompleto ? 'border-red-500' : 'border-gray-200'
            }`}
            placeholder="Ingresa tu nombre completo"
          />
          {errors.nombreCompleto && (
            <p className="error-message mt-2 text-sm text-red-600 flex items-center">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              {errors.nombreCompleto}
            </p>
          )}
        </div>

        {/* Correo Electrónico */}
        <div>
          <label htmlFor="correoElectronico" className="block text-sm font-semibold text-gray-700 mb-2">
            Correo Electrónico <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="correoElectronico"
            name="correoElectronico"
            value={formData.correoElectronico}
            onChange={handleChange}
            className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 transition-all placeholder:text-gray-500 text-black ${
              errors.correoElectronico ? 'border-red-500' : 'border-gray-200'
            }`}
            placeholder="ejemplo@correo.com"
          />
          {errors.correoElectronico && (
            <p className="error-message mt-2 text-sm text-red-600 flex items-center">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              {errors.correoElectronico}
            </p>
          )}
        </div>

        {/* Institución */}
        <div>
          <label htmlFor="institucion" className="block text-sm font-semibold text-gray-700 mb-2">
            Institución <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="institucion"
            name="institucion"
            value={formData.institucion}
            onChange={handleChange}
            className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 transition-all placeholder:text-gray-500 text-black ${
              errors.institucion ? 'border-red-500' : 'border-gray-200'
            }`}
            placeholder="Nombre de tu institución"
          />
          {errors.institucion && (
            <p className="error-message mt-2 text-sm text-red-600 flex items-center">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              {errors.institucion}
            </p>
          )}
        </div>

        {/* Teléfono */}
        <div>
          <label htmlFor="telefono" className="block text-sm font-semibold text-gray-700 mb-2">
            Teléfono <span className="text-gray-500 text-sm font-normal">(Opcional)</span>
          </label>
          <input
            type="tel"
            id="telefono"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 transition-all placeholder:text-gray-500 text-black"
            placeholder="664-123-4567"
          />
        </div>
      </div>

      {/* Botón de envío */}
      <div className="mt-8 flex justify-center">
        <button
          type="submit"
          disabled={isSubmitting}
          className="relative px-12 py-4 bg-gradient-to-r from-green-600 to-orange-600 text-white rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
        >
          {isSubmitting ? (
            <span className="flex items-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Enviando...
            </span>
          ) : (
            'Registrarme'
          )}
        </button>
      </div>

      <p className="text-center text-sm text-gray-500 mt-6">
        Los campos marcados con <span className="text-red-500">*</span> son obligatorios
      </p>
    </form>
  );
}