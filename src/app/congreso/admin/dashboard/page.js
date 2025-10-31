'use client';

import { useState, useEffect } from 'react';

export default function AdminDashboard() {
  const [emailAdmin, setEmailAdmin] = useState('');
  const [autenticado, setAutenticado] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Estados para las ponencias
  const [ponencias, setPonencias] = useState([]);
  const [cargandoPonencias, setCargandoPonencias] = useState(false);
  const [filtroEstado, setFiltroEstado] = useState('');

  // Estados para el modal de cambio de estado
  const [modalAbierto, setModalAbierto] = useState(false);
  const [ponenciaSeleccionada, setPonenciaSeleccionada] = useState(null);
  const [nuevoEstado, setNuevoEstado] = useState('');
  const [comentarios, setComentarios] = useState('');
  const [cambiandoEstado, setCambiandoEstado] = useState(false);

  // Verificar si es administrador
  const verificarAdmin = async () => {
    if (!emailAdmin) {
      setError('Por favor ingresa tu email');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/admin/verificar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: emailAdmin }),
      });

      const data = await response.json();

      if (!response.ok || !data.esAdmin) {
        throw new Error(data.error || 'No tienes permisos de administrador');
      }

      setAutenticado(true);
      cargarPonencias();

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Cargar ponencias
  const cargarPonencias = async () => {
    setCargandoPonencias(true);

    try {
      const response = await fetch('/api/admin/ponencias', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: emailAdmin,
          filtros: filtroEstado ? { estado: filtroEstado } : {},
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Error al cargar ponencias');
      }

      setPonencias(data.ponencias);

    } catch (err) {
      console.error('Error al cargar ponencias:', err);
    } finally {
      setCargandoPonencias(false);
    }
  };

  // Abrir modal para cambiar estado
  const abrirModalEstado = (ponencia) => {
    setPonenciaSeleccionada(ponencia);
    setNuevoEstado(ponencia.estado);
    setComentarios(ponencia.comentarios_revisor || '');
    setModalAbierto(true);
  };

  // Cerrar modal
  const cerrarModal = () => {
    setModalAbierto(false);
    setPonenciaSeleccionada(null);
    setNuevoEstado('');
    setComentarios('');
  };

  // Cambiar estado de ponencia
  const cambiarEstado = async () => {
    if (!nuevoEstado) {
      alert('Selecciona un estado');
      return;
    }

    setCambiandoEstado(true);

    try {
      const response = await fetch('/api/admin/ponencias/cambiar-estado', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: emailAdmin,
          ponencia_id: ponenciaSeleccionada.id,
          nuevo_estado: nuevoEstado,
          comentarios: comentarios,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Error al cambiar estado');
      }

      alert('✅ Estado actualizado correctamente');
      cerrarModal();
      cargarPonencias(); // Recargar ponencias

    } catch (err) {
      alert('❌ ' + err.message);
    } finally {
      setCambiandoEstado(false);
    }
  };

  // Recargar cuando cambia el filtro
  useEffect(() => {
    if (autenticado) {
      cargarPonencias();
    }
  }, [filtroEstado]);

  // Estadísticas
  const estadisticas = {
    total: ponencias.length,
    pendientes: ponencias.filter(p => p.estado === 'Pendiente de Revisión').length,
    enRevision: ponencias.filter(p => p.estado === 'En Revisión').length,
    aprobadas: ponencias.filter(p => p.estado === 'Aprobada').length,
    rechazadas: ponencias.filter(p => p.estado === 'Rechazada').length,
    requierenCambios: ponencias.filter(p => p.estado === 'Requiere Cambios').length,
  };

  if (!autenticado) {
    return (
      // Pantalla de Login
      <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-gray-900">
              Panel de Administración
            </h1>
            <p className="text-gray-600 mt-2">
              Acceso solo para administradores
            </p>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email de Administrador
            </label>
            <input
              type="email"
              value={emailAdmin}
              onChange={(e) => setEmailAdmin(e.target.value)}
              placeholder="admin@ejemplo.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              onKeyDown={(e) => {
                if (e.key === 'Enter') verificarAdmin();
              }}
            />
          </div>

          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-md">
              <p className="text-sm text-red-600">{error}</p>
            </div>
          )}

          <button
            onClick={verificarAdmin}
            disabled={loading || !emailAdmin}
            className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed font-medium"
          >
            {loading ? 'Verificando...' : 'Acceder'}
          </button>
        </div>
      </div>
    );
  }

  return (
    // Dashboard Principal
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Dashboard de Administración
              </h1>
              <p className="text-sm text-gray-600 mt-1">
                Sesión: {emailAdmin}
              </p>
            </div>
            <button
              onClick={() => {
                setAutenticado(false);
                setEmailAdmin('');
                setPonencias([]);
              }}
              className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 border border-gray-300 rounded-md hover:bg-gray-50"
            >
              Cerrar Sesión
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Estadísticas */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-8">
          <div className="bg-white rounded-lg shadow p-4">
            <p className="text-sm text-gray-600">Total</p>
            <p className="text-2xl font-bold text-gray-900">{estadisticas.total}</p>
          </div>
          <div className="bg-yellow-50 rounded-lg shadow p-4">
            <p className="text-sm text-yellow-800">Pendientes</p>
            <p className="text-2xl font-bold text-yellow-900">{estadisticas.pendientes}</p>
          </div>
          <div className="bg-blue-50 rounded-lg shadow p-4">
            <p className="text-sm text-blue-800">En Revisión</p>
            <p className="text-2xl font-bold text-blue-900">{estadisticas.enRevision}</p>
          </div>
          <div className="bg-orange-50 rounded-lg shadow p-4">
            <p className="text-sm text-orange-800">Cambios</p>
            <p className="text-2xl font-bold text-orange-900">{estadisticas.requierenCambios}</p>
          </div>
          <div className="bg-green-50 rounded-lg shadow p-4">
            <p className="text-sm text-green-800">Aprobadas</p>
            <p className="text-2xl font-bold text-green-900">{estadisticas.aprobadas}</p>
          </div>
          <div className="bg-red-50 rounded-lg shadow p-4">
            <p className="text-sm text-red-800">Rechazadas</p>
            <p className="text-2xl font-bold text-red-900">{estadisticas.rechazadas}</p>
          </div>
        </div>

        {/* Filtros */}
        <div className="bg-white rounded-lg shadow p-4 mb-6">
          <div className="flex items-center gap-4">
            <label className="text-sm font-medium text-gray-700">
              Filtrar por estado:
            </label>
            <select
              value={filtroEstado}
              onChange={(e) => setFiltroEstado(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Todos</option>
              <option value="Pendiente de Revisión">Pendiente de Revisión</option>
              <option value="En Revisión">En Revisión</option>
              <option value="Requiere Cambios">Requiere Cambios</option>
              <option value="Aprobada">Aprobada</option>
              <option value="Rechazada">Rechazada</option>
            </select>
            <button
              onClick={cargarPonencias}
              className="ml-auto px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm font-medium"
            >
              🔄 Actualizar
            </button>
          </div>
        </div>

        {/* Lista de Ponencias */}
        {cargandoPonencias ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            <p className="text-gray-600 mt-4">Cargando ponencias...</p>
          </div>
        ) : ponencias.length === 0 ? (
          <div className="bg-white rounded-lg shadow p-12 text-center">
            <p className="text-gray-600">No hay ponencias para mostrar</p>
          </div>
        ) : (
          <div className="space-y-4">
            {ponencias.map((ponencia) => (
              <div key={ponencia.id} className="bg-white rounded-lg shadow p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {ponencia.titulo}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span>👤 {ponencia.usuario?.nombre_completo}</span>
                      <span>📧 {ponencia.usuario?.email}</span>
                      <span>🏛️ {ponencia.usuario?.institucion || 'N/A'}</span>
                    </div>
                  </div>
                  
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

                <p className="text-sm text-gray-700 mb-4 line-clamp-2">
                  {ponencia.resumen}
                </p>

                <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                  <span>📁 {ponencia.area_tematica || 'N/A'}</span>
                  <span>•</span>
                  <span>📄 Versión {ponencia.version}</span>
                  <span>•</span>
                  <span>📅 {new Date(ponencia.created_at).toLocaleDateString('es-MX')}</span>
                </div>

                {ponencia.comentarios_revisor && (
                  <div className="bg-blue-50 border border-blue-200 rounded-md p-3 mb-4">
                    <p className="text-sm font-medium text-blue-900 mb-1">
                      Comentarios del revisor:
                    </p>
                    <p className="text-sm text-blue-800">{ponencia.comentarios_revisor}</p>
                  </div>
                )}

                <div className="flex gap-2">
                  <a
                    href={ponencia.archivo_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 text-sm font-medium"
                  >
                    📄 Ver Archivo
                  </a>
                  <button
                    onClick={() => abrirModalEstado(ponencia)}
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm font-medium"
                  >
                    ✏️ Cambiar Estado
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Modal para cambiar estado */}
      {modalAbierto && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
            <h3 className="text-lg font-semibold mb-4">
              Cambiar Estado de Ponencia
            </h3>
            
            <p className="text-sm text-gray-600 mb-4">
              <strong>{ponenciaSeleccionada?.titulo}</strong>
            </p>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nuevo Estado
              </label>
              <select
                value={nuevoEstado}
                onChange={(e) => setNuevoEstado(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              >
                <option value="Pendiente de Revisión">Pendiente de Revisión</option>
                <option value="En Revisión">En Revisión</option>
                <option value="Requiere Cambios">Requiere Cambios</option>
                <option value="Aprobada">Aprobada</option>
                <option value="Rechazada">Rechazada</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Comentarios para el autor
              </label>
              <textarea
                value={comentarios}
                onChange={(e) => setComentarios(e.target.value)}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                placeholder="Escribe tus comentarios aquí..."
              />
            </div>

            <div className="flex gap-3">
              <button
                onClick={cerrarModal}
                disabled={cambiandoEstado}
                className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 disabled:opacity-50"
              >
                Cancelar
              </button>
              <button
                onClick={cambiarEstado}
                disabled={cambiandoEstado}
                className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-gray-400"
              >
                {cambiandoEstado ? 'Guardando...' : 'Guardar Cambios'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}