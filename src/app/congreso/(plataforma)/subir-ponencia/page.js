'use client';

import { useState } from 'react';

export default function SubirPonenciaPage() {
  // Estados para el token
  const [token, setToken] = useState('');
  const [tokenValidado, setTokenValidado] = useState(false);
  const [validandoToken, setValidandoToken] = useState(false);
  const [errorToken, setErrorToken] = useState('');
  const [usuarioData, setUsuarioData] = useState(null);

  // Estados para el formulario de ponencia
  const [formData, setFormData] = useState({
    titulo: '',
    resumen: '',
    area_tematica: '',
    tipo_participacion: '',
  });
  const [archivo, setArchivo] = useState(null);
  const [nombreArchivo, setNombreArchivo] = useState('');
  const [enviando, setEnviando] = useState(false);
  const [errores, setErrores] = useState({});
  const [exitoso, setExitoso] = useState(false);

  // Validar token
  const validarTokenAcceso = async () => {
    if (!token.trim()) {
      setErrorToken('Por favor ingresa tu token');
      return;
    }

    setValidandoToken(true);
    setErrorToken('');

    try {
      const response = await fetch('/api/validar-token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token: token.trim().toUpperCase() }),
      });

      const data = await response.json();

      if (!response.ok || !data.valido) {
        throw new Error(data.mensaje || 'Token inválido');
      }

      setTokenValidado(true);
      setUsuarioData(data.usuario);

    } catch (error) {
      setErrorToken(error.message);
    } finally {
      setValidandoToken(false);
    }
  };

  // Manejar cambios en inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errores[name]) {
      setErrores(prev => ({ ...prev, [name]: '' }));
    }
  };

  // Manejar selección de archivo
  const handleArchivoChange = (e) => {
    const file = e.target.files[0];
    
    if (!file) return;

    if (file.type !== 'application/pdf') {
      setErrores(prev => ({ ...prev, archivo: 'Solo se permiten archivos PDF' }));
      return;
    }

    const maxSize = 10 * 1024 * 1024; // 10MB
    if (file.size > maxSize) {
      setErrores(prev => ({ ...prev, archivo: 'El archivo no debe superar los 10MB' }));
      return;
    }

    setArchivo(file);
    setNombreArchivo(file.name);
    setErrores(prev => ({ ...prev, archivo: '' }));
  };

  // Enviar ponencia
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validaciones
    const newErrores = {};
    if (!formData.titulo.trim()) newErrores.titulo = 'El título es requerido';
    if (!formData.resumen.trim()) newErrores.resumen = 'El resumen es requerido';
    if (!formData.area_tematica) newErrores.area_tematica = 'Selecciona un área temática';
    if (!formData.tipo_participacion) newErrores.tipo_participacion = 'Selecciona el tipo de participación';
    if (!archivo) newErrores.archivo = 'Debes subir un archivo PDF';

    if (Object.keys(newErrores).length > 0) {
      setErrores(newErrores);
      return;
    }

    setEnviando(true);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('email', usuarioData.email);
      formDataToSend.append('nombre_completo', usuarioData.nombre_completo);
      formDataToSend.append('institucion', usuarioData.institucion || '');
      formDataToSend.append('telefono', usuarioData.telefono || '');
      formDataToSend.append('titulo', formData.titulo);
      formDataToSend.append('resumen', formData.resumen);
      formDataToSend.append('area_tematica', formData.area_tematica);
      formDataToSend.append('tipo_participacion', formData.tipo_participacion);
      formDataToSend.append('archivo', archivo);
      formDataToSend.append('token', token);

      const response = await fetch('/api/ponencias/crear', {
        method: 'POST',
        body: formDataToSend,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Error al subir ponencia');
      }

      setExitoso(true);

    } catch (error) {
      setErrores({ submit: error.message });
    } finally {
      setEnviando(false);
    }
  };

  // Pantalla de éxito
  if (exitoso) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4 flex items-center justify-center">
        <div className="max-w-2xl w-full bg-white rounded-3xl shadow-2xl p-12 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">¡Ponencia Enviada!</h2>
          <p className="text-gray-600 mb-6">
            Tu ponencia ha sido enviada exitosamente y está <strong>Pendiente de Revisión</strong>.
          </p>
          <p className="text-sm text-gray-500 mb-8">
            Recibirás una notificación por correo cuando cambie el estado de tu ponencia.
          </p>
          <a
            href="/mi-ponencia"
            className="inline-block bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-3 rounded-xl font-semibold hover:from-green-700 hover:to-green-800 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Ver estado de mi ponencia
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Subir Ponencia
          </h1>
          <p className="text-gray-600">
            {tokenValidado ? 'Completa el formulario' : 'Ingresa tu token de acceso para continuar'}
          </p>
        </div>

        {!tokenValidado ? (
          // Pantalla de validación de token
          <div className="bg-white rounded-lg shadow-md p-8 max-w-md mx-auto">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Token de Acceso
            </label>
            <input
              type="text"
              value={token}
              onChange={(e) => setToken(e.target.value.toUpperCase())}
              placeholder="Ingresa tu token"
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-center text-2xl font-bold tracking-widest"
              maxLength={8}
              onKeyDown={(e) => {
                if (e.key === 'Enter') validarTokenAcceso();
              }}
            />
            
            {errorToken && (
              <p className="mt-2 text-sm text-red-600">{errorToken}</p>
            )}

            <button
              onClick={validarTokenAcceso}
              disabled={validandoToken || !token}
              className="w-full mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed font-medium"
            >
              {validandoToken ? 'Validando...' : 'Continuar'}
            </button>
          </div>
        ) : (
          // Formulario de ponencia
          <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-8">
            {/* Info del usuario */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <p className="text-sm text-gray-700">
                <strong>Registrado como:</strong> {usuarioData?.nombre_completo}
              </p>
              <p className="text-sm text-gray-600">{usuarioData?.email}</p>
            </div>

            <div className="space-y-6">
              {/* Título */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Título de la Ponencia <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="titulo"
                  value={formData.titulo}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 ${
                    errores.titulo ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Título de tu trabajo"
                />
                {errores.titulo && <p className="mt-1 text-sm text-red-600">{errores.titulo}</p>}
              </div>

              {/* Resumen */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Resumen <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="resumen"
                  value={formData.resumen}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 ${
                    errores.resumen ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Describe tu ponencia..."
                />
                {errores.resumen && <p className="mt-1 text-sm text-red-600">{errores.resumen}</p>}
              </div>

              {/* Área Temática */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Área Temática <span className="text-red-500">*</span>
                </label>
                <select
                  name="area_tematica"
                  value={formData.area_tematica}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 ${
                    errores.area_tematica ? 'border-red-500' : 'border-gray-300'
                  }`}
                >
                  <option value="">Selecciona un área</option>
                  <option value="Educación">Educación</option>
                  <option value="Tecnología">Tecnología</option>
                  <option value="Ciencias Sociales">Ciencias Sociales</option>
                  <option value="Salud">Salud</option>
                  <option value="Otro">Otro</option>
                </select>
                {errores.area_tematica && <p className="mt-1 text-sm text-red-600">{errores.area_tematica}</p>}
              </div>

              {/* Tipo de Participación */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tipo de Participación <span className="text-red-500">*</span>
                </label>
                <select
                  name="tipo_participacion"
                  value={formData.tipo_participacion}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 ${
                    errores.tipo_participacion ? 'border-red-500' : 'border-gray-300'
                  }`}
                >
                  <option value="">Selecciona el tipo</option>
                  <option value="ponencia">Ponencia</option>
                  <option value="poster">Póster</option>
                  <option value="taller">Taller</option>
                </select>
                {errores.tipo_participacion && <p className="mt-1 text-sm text-red-600">{errores.tipo_participacion}</p>}
              </div>

              {/* Archivo PDF */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Archivo PDF <span className="text-red-500">*</span>
                </label>
                <input
                  type="file"
                  accept=".pdf"
                  onChange={handleArchivoChange}
                  className="hidden"
                  id="archivo"
                />
                <label
                  htmlFor="archivo"
                  className={`flex items-center justify-center w-full px-4 py-8 border-2 border-dashed rounded-lg cursor-pointer transition-all hover:border-blue-500 hover:bg-blue-50 ${
                    errores.archivo ? 'border-red-500 bg-red-50' : 'border-gray-300'
                  }`}
                >
                  <div className="text-center">
                    <svg className="w-12 h-12 mx-auto mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                    {nombreArchivo ? (
                      <p className="text-sm text-green-600 font-medium">{nombreArchivo}</p>
                    ) : (
                      <>
                        <p className="text-sm text-gray-600">Haz clic para subir tu archivo PDF</p>
                        <p className="text-xs text-gray-500 mt-1">Máximo 10MB</p>
                      </>
                    )}
                  </div>
                </label>
                {errores.archivo && <p className="mt-1 text-sm text-red-600">{errores.archivo}</p>}
              </div>

              {errores.submit && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-sm text-red-600">{errores.submit}</p>
                </div>
              )}

              {/* Botón enviar */}
              <button
                type="submit"
                disabled={enviando}
                className="w-full px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg font-semibold hover:from-green-700 hover:to-green-800 disabled:bg-gray-400 disabled:cursor-not-allowed transition-all"
              >
                {enviando ? 'Enviando...' : 'Enviar Ponencia'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}