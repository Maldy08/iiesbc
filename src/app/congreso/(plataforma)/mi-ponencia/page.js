'use client';

import { useState } from 'react';

export default function MiPonenciaPage() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [ponencias, setPonencias] = useState(null);
  const [error, setError] = useState('');

  // Estados para resubir archivo
  const [mostrarModal, setMostrarModal] = useState(false);
  const [ponenciaSeleccionada, setPonenciaSeleccionada] = useState(null);
  const [archivoNuevo, setArchivoNuevo] = useState(null);
  const [subiendoArchivo, setSubiendoArchivo] = useState(false);
  const [errorSubida, setErrorSubida] = useState('');

  // Función para buscar ponencias por email
  const buscarPonencias = async () => {
    if (!email) {
      setError('Por favor ingresa tu email');
      return;
    }

    setLoading(true);
    setError('');
    setPonencias(null);

    try {
      const response = await fetch('/api/ponencias/mis-ponencias', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Error al buscar ponencias');
      }

      if (data.ponencias.length === 0) {
        setError('No se encontraron ponencias con este email');
      } else {
        setPonencias(data.ponencias);
      }

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Abrir modal para resubir
  const abrirModalResubir = (ponencia) => {
    setPonenciaSeleccionada(ponencia);
    setMostrarModal(true);
    setArchivoNuevo(null);
    setErrorSubida('');
  };

  // Cerrar modal
  const cerrarModal = () => {
    setMostrarModal(false);
    setPonenciaSeleccionada(null);
    setArchivoNuevo(null);
    setErrorSubida('');
  };

  // Manejar selección de archivo
  const manejarSeleccionArchivo = (e) => {
    const file = e.target.files[0];
    
    if (!file) return;

    // Validar que sea PDF
    if (file.type !== 'application/pdf') {
      setErrorSubida('Solo se permiten archivos PDF');
      setArchivoNuevo(null);
      return;
    }

    // Validar tamaño (máximo 10MB)
    const maxSize = 10 * 1024 * 1024;
    if (file.size > maxSize) {
      setErrorSubida('El archivo no debe superar los 10MB');
      setArchivoNuevo(null);
      return;
    }

    setArchivoNuevo(file);
    setErrorSubida('');
  };

  // Resubir archivo
  const resubirArchivo = async () => {
    if (!archivoNuevo) {
      setErrorSubida('Por favor selecciona un archivo');
      return;
    }

    setSubiendoArchivo(true);
    setErrorSubida('');

    try {
      const formData = new FormData();
      formData.append('ponencia_id', ponenciaSeleccionada.id);
      formData.append('email', email);
      formData.append('archivo', archivoNuevo);

      const response = await fetch('/api/ponencias/resubir', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Error al resubir archivo');
      }

      // Éxito: actualizar la lista de ponencias
      alert('✅ Archivo actualizado exitosamente');
      cerrarModal();
      buscarPonencias(); // Recargar ponencias

    } catch (err) {
      setErrorSubida(err.message);
    } finally {
      setSubiendoArchivo(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">
          Consultar Estado de mi Ponencia
        </h1>

        {/* Formulario para ingresar email */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Ingresa tu correo electrónico
          </label>
          <div className="flex gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu-email@ejemplo.com"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              onKeyDown={(e) => {
                if (e.key === 'Enter') buscarPonencias();
              }}
            />
            <button
              onClick={buscarPonencias}
              disabled={loading || !email}
              className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {loading ? 'Buscando...' : 'Buscar'}
            </button>
          </div>
          {error && (
            <p className="mt-2 text-sm text-red-600">{error}</p>
          )}
        </div>

        {/* Mostrar ponencias encontradas */}
        {ponencias && ponencias.length > 0 && (
          <div className="space-y-4">
            {ponencias.map((ponencia) => (
              <div key={ponencia.id} className="bg-white rounded-lg shadow-md p-6">
                {/* Header: Título y Estado */}
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <h2 className="text-xl font-semibold text-gray-900 mb-2">
                      {ponencia.titulo}
                    </h2>
                    <p className="text-sm text-gray-600">
                      Versión: {ponencia.version}
                    </p>
                  </div>
                  
                  {/* Badge de Estado */}
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    ponencia.estado === 'Aprobada' ? 'bg-green-100 text-green-800' :
                    ponencia.estado === 'Rechazada' ? 'bg-red-100 text-red-800' :
                    ponencia.estado === 'En Revisión' ? 'bg-blue-100 text-blue-800' :
                    ponencia.estado === 'Requiere Cambios' ? 'bg-orange-100 text-orange-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {ponencia.estado}
                  </span>
                </div>

                {/* Información adicional */}
                <div className="border-t border-gray-200 pt-4 mb-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-500">Área temática:</span>
                      <p className="font-medium">{ponencia.area_tematica || 'No especificada'}</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Tipo:</span>
                      <p className="font-medium capitalize">{ponencia.tipo_participacion || 'No especificado'}</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Archivo:</span>
                      <p className="font-medium text-blue-600">
                        {ponencia.archivo_nombre || 'Sin archivo'}
                      </p>
                    </div>
                    <div>
                      <span className="text-gray-500">Fecha de registro:</span>
                      <p className="font-medium">
                        {new Date(ponencia.created_at).toLocaleDateString('es-MX')}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Resumen */}
                <div className="mb-4">
                  <span className="text-sm text-gray-500">Resumen:</span>
                  <p className="text-sm text-gray-700 mt-1">
                    {ponencia.resumen}
                  </p>
                </div>

                {/* Comentarios del revisor */}
                {ponencia.comentarios_revisor && (
                  <div className="bg-blue-50 border border-blue-200 rounded-md p-4 mb-4">
                    <p className="text-sm font-medium text-blue-900 mb-1">
                      💬 Comentarios del revisor:
                    </p>
                    <p className="text-sm text-blue-800">
                      {ponencia.comentarios_revisor}
                    </p>
                  </div>
                )}

                {/* Botones de acción */}
                <div className="flex gap-3">
                  {/* Botón ver archivo */}
                  {ponencia.archivo_url && (
                    <a
                      href={ponencia.archivo_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 text-sm font-medium"
                    >
                      📄 Ver Archivo
                    </a>
                  )}

                  {/* Botón resubir (solo si el estado lo permite) */}
                  {(ponencia.estado === 'Requiere Cambios' || ponencia.estado === 'Pendiente de Revisión') && (
                    <button
                      onClick={() => abrirModalResubir(ponencia)}
                      className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm font-medium"
                    >
                      🔄 Resubir Archivo
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Modal para resubir archivo */}
        {mostrarModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
              <h3 className="text-lg font-semibold mb-4">
                Resubir Archivo - Versión {ponenciaSeleccionada?.version ? ponenciaSeleccionada.version + 1 : 1}
              </h3>
              
              <p className="text-sm text-gray-600 mb-4">
                Ponencia: <span className="font-medium">{ponenciaSeleccionada?.titulo}</span>
              </p>

              {/* Input de archivo */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Selecciona el nuevo archivo PDF
                </label>
                <input
                  type="file"
                  accept=".pdf"
                  onChange={manejarSeleccionArchivo}
                  className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                />
                {archivoNuevo && (
                  <p className="mt-2 text-sm text-green-600">
                    ✓ Archivo seleccionado: {archivoNuevo.name}
                  </p>
                )}
              </div>

              {errorSubida && (
                <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-md">
                  <p className="text-sm text-red-600">{errorSubida}</p>
                </div>
              )}

              {/* Botones */}
              <div className="flex gap-3">
                <button
                  onClick={cerrarModal}
                  disabled={subiendoArchivo}
                  className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 disabled:opacity-50"
                >
                  Cancelar
                </button>
                <button
                  onClick={resubirArchivo}
                  disabled={!archivoNuevo || subiendoArchivo}
                  className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  {subiendoArchivo ? 'Subiendo...' : 'Subir Archivo'}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}