// src/app/subir-ponencia/page.js
'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

function SubirPonenciaContent() {
  const searchParams = useSearchParams();
  const token = searchParams.get('token');

  const [validando, setValidando] = useState(true);
  const [participante, setParticipante] = useState(null);
  const [error, setError] = useState('');
  const [enviando, setEnviando] = useState(false);
  const [exito, setExito] = useState(false);

  const [formData, setFormData] = useState({
    titulo: '',
    resumen: '',
    palabrasClave: '',
    ejeTematico: '',
    coautores: ''
  });

  const [archivo, setArchivo] = useState(null);

  // Validar token al cargar la página
  useEffect(() => {
    if (!token) {
      setError('No se proporcionó un token válido. Por favor usa el link que recibiste en tu email.');
      setValidando(false);
      return;
    }

    validarToken();
  }, [token]);

  const validarToken = async () => {
    try {
      const response = await fetch(`/api/validar-token?token=${token}`);
      const data = await response.json();

      if (!response.ok) {
        setError(data.error || 'Token inválido');
        setValidando(false);
        return;
      }

      setParticipante(data.participante);
      setValidando(false);
    } catch (err) {
      setError('Error al validar el token. Por favor intenta más tarde.');
      setValidando(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    
    if (!file) return;

    // Validar tipo de archivo
    const tiposPermitidos = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    if (!tiposPermitidos.includes(file.type)) {
      alert('Solo se permiten archivos PDF o Word (.doc, .docx)');
      e.target.value = '';
      return;
    }

    // Validar tamaño (máximo 10MB)
    const maxSize = 10 * 1024 * 1024;
    if (file.size > maxSize) {
      alert('El archivo es demasiado grande. Máximo 10MB');
      e.target.value = '';
      return;
    }

    setArchivo(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validaciones
    if (!formData.titulo.trim()) {
      alert('Por favor ingresa el título de la ponencia');
      return;
    }

    if (!formData.resumen.trim()) {
      alert('Por favor ingresa el resumen');
      return;
    }

    if (!formData.palabrasClave.trim()) {
      alert('Por favor ingresa las palabras clave');
      return;
    }

    if (!formData.ejeTematico) {
      alert('Por favor selecciona el eje temático');
      return;
    }

    if (!archivo) {
      alert('Por favor selecciona el archivo de tu ponencia');
      return;
    }

    setEnviando(true);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('token', token);
      formDataToSend.append('email', participante.correoElectronico);
      formDataToSend.append('nombre', participante.nombreCompleto);
      formDataToSend.append('titulo', formData.titulo);
      formDataToSend.append('resumen', formData.resumen);
      formDataToSend.append('palabrasClave', formData.palabrasClave);
      formDataToSend.append('ejeTematico', formData.ejeTematico);
      formDataToSend.append('coautores', formData.coautores);
      formDataToSend.append('archivoPonencia', archivo);

      const response = await fetch('/api/subir-ponencia', {
        method: 'POST',
        body: formDataToSend
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Error al subir la ponencia');
      }

      setExito(true);
    } catch (err) {
      alert(err.message || 'Error al subir la ponencia. Por favor intenta nuevamente.');
    } finally {
      setEnviando(false);
    }
  };

  // Pantalla de carga
  if (validando) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-red-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-900 mx-auto mb-4"></div>
          <p className="text-gray-600">Validando tu acceso...</p>
        </div>
      </div>
    );
  }

  // Pantalla de error
  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-red-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full">
          <div className="text-center mb-6">
            <div className="text-red-500 text-6xl mb-4">❌</div>
            <h1 className="text-2xl font-bold text-gray-800 mb-2">Acceso Denegado</h1>
            <p className="text-gray-600">{error}</p>
          </div>
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
            <p className="text-sm text-yellow-700">
              <strong>¿Necesitas ayuda?</strong><br />
              Contacta a los organizadores del congreso.
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Pantalla de éxito
  if (exito) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-red-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full">
          <div className="text-center">
            <div className="text-green-500 text-6xl mb-4">✅</div>
            <h1 className="text-2xl font-bold text-gray-800 mb-2">¡Ponencia Enviada!</h1>
            <p className="text-gray-600 mb-6">
              Tu ponencia ha sido enviada exitosamente. Recibirás un correo de confirmación.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
              <p className="text-sm text-blue-700">
                <strong>Próximos pasos:</strong><br />
                Nuestro equipo revisará tu ponencia y te contactaremos pronto con más información.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Formulario principal
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-red-50 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-900 to-red-600 rounded-t-lg p-8 text-white">
          <h1 className="text-3xl font-bold mb-2">Subir Ponencia</h1>
          <p className="text-blue-100">Congreso IIESBC</p>
        </div>

        {/* Info del participante */}
        <div className="bg-white p-6 border-b">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">✅ Bienvenido/a</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <span className="font-semibold text-gray-600">Nombre:</span>
              <p className="text-gray-800">{participante.nombreCompleto}</p>
            </div>
            <div>
              <span className="font-semibold text-gray-600">Email:</span>
              <p className="text-gray-800">{participante.correoElectronico}</p>
            </div>
            <div>
              <span className="font-semibold text-gray-600">Institución:</span>
              <p className="text-gray-800">{participante.institucion}</p>
            </div>
            <div>
              <span className="font-semibold text-gray-600">Nivel:</span>
              <p className="text-gray-800">{participante.nivelAcademico}</p>
            </div>
          </div>
        </div>

        {/* Formulario */}
        <form onSubmit={handleSubmit} className="bg-white rounded-b-lg shadow-xl p-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">📄 Información de tu Ponencia</h2>

          {/* Título */}
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">
              Título de la Ponencia <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="titulo"
              value={formData.titulo}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black placeholder:text-gray-500"
              placeholder="Ej: La inteligencia artificial en la educación superior"
              required
            />
          </div>

          {/* Resumen */}
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">
              Resumen/Abstract <span className="text-red-500">*</span>
              <span className="text-sm font-normal text-gray-500 ml-2">(Máximo 500 palabras)</span>
            </label>
            <textarea
              name="resumen"
              value={formData.resumen}
              onChange={handleChange}
              rows="6"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black placeholder:text-gray-500"
              placeholder="Escribe el resumen de tu ponencia..."
              required
            />
            <p className="text-sm text-gray-500 mt-1">
              Palabras: {formData.resumen.split(' ').filter(word => word.length > 0).length}
            </p>
          </div>

          {/* Palabras Clave */}
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">
              Palabras Clave <span className="text-red-500">*</span>
              <span className="text-sm font-normal text-gray-500 ml-2">(3-5 palabras, separadas por comas)</span>
            </label>
            <input
              type="text"
              name="palabrasClave"
              value={formData.palabrasClave}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black placeholder:text-gray-500"
              placeholder="Ej: inteligencia artificial, educación, innovación"
              required
            />
          </div>

          {/* Eje Temático */}
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">
              Eje Temático <span className="text-red-500">*</span>
            </label>
            <select
              name="ejeTematico"
              value={formData.ejeTematico}
              onChange={handleChange}
              className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${!formData.ejeTematico ? 'text-gray-500' : 'text-black'}`}
              required
            >
              <option value="" className="text-gray-500">Selecciona un eje temático</option>
              <option value="Tecnología Educativa">Tecnología Educativa</option>
              <option value="Innovación Pedagógica">Innovación Pedagógica</option>
              <option value="Gestión Educativa">Gestión Educativa</option>
              <option value="Investigación Educativa">Investigación Educativa</option>
              <option value="Políticas Educativas">Políticas Educativas</option>
              <option value="Educación Inclusiva">Educación Inclusiva</option>
            </select>
          </div>

          {/* Co-autores */}
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">
              Co-autores <span className="text-sm font-normal text-gray-500">(Opcional)</span>
            </label>
            <input
              type="text"
              name="coautores"
              value={formData.coautores}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black placeholder:text-gray-500"
              placeholder="Ej: Dr. Juan Pérez, Dra. María López"
            />
          </div>

          {/* Archivo */}
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">
              Archivo de la Ponencia <span className="text-red-500">*</span>
              <span className="text-sm font-normal text-gray-500 ml-2">(PDF o Word, máximo 10MB)</span>
            </label>
            <input
              type="file"
              onChange={handleFileChange}
              accept=".pdf,.doc,.docx"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
            {archivo && (
              <p className="text-sm text-green-600 mt-2">
                ✓ Archivo seleccionado: {archivo.name}
              </p>
            )}
          </div>

          {/* Botón */}
          <button
            type="submit"
            disabled={enviando}
            className="w-full bg-gradient-to-r from-blue-900 to-red-600 text-white font-bold py-4 px-6 rounded-lg hover:from-blue-800 hover:to-red-500 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {enviando ? 'Enviando...' : 'Subir Ponencia'}
          </button>
        </form>
      </div>
    </div>
  );
}

// Componente principal con Suspense
export default function SubirPonenciaPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-red-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-900 mx-auto mb-4"></div>
          <p className="text-gray-600">Cargando...</p>
        </div>
      </div>
    }>
      <SubirPonenciaContent />
    </Suspense>
  );
}