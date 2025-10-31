import Link from 'next/link';

export default function CongresoLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo y Título */}
            <div className="flex items-center gap-4">
              <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">C</span>
                </div>
                <div>
                  <h1 className="text-lg font-bold text-gray-900">Congreso IIESBC</h1>
                  <p className="text-xs text-gray-500">Sistema de Ponencias</p>
                </div>
              </Link>
            </div>

            {/* Navegación */}
            <nav className="hidden md:flex items-center gap-1">
              <Link 
                href="/registro" 
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
              >
                Registro
              </Link>
              <Link 
                href="/subir-ponencia" 
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
              >
                Subir Ponencia
              </Link>
              <Link 
                href="/mi-ponencia" 
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
              >
                Mi Ponencia
              </Link>
              <Link 
                href="/admin/dashboard" 
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
              >
                Admin
              </Link>
            </nav>

            {/* Botón volver al sitio */}
            <Link
              href="/"
              className="hidden md:flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Volver al sitio
            </Link>

            {/* Menú móvil */}
            <button className="md:hidden p-2 text-gray-600 hover:text-gray-900">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Contenido Principal */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-sm text-gray-600">
                © 2025 Instituto de Investigación y Desarrollo Educativo de Baja California
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Sistema de Gestión de Ponencias
              </p>
            </div>
            <div className="flex gap-6 text-sm">
              <a href="/ayuda" className="text-gray-600 hover:text-blue-600 transition-colors">
                Ayuda
              </a>
              <a href="/contacto" className="text-gray-600 hover:text-blue-600 transition-colors">
                Contacto
              </a>
              <a href="/terminos" className="text-gray-600 hover:text-blue-600 transition-colors">
                Términos
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
