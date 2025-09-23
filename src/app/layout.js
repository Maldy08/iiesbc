import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './globals.css'; // Asegúrate de tener un archivo de estilos globales

export const metadata = {
  title: 'Mi Institución Educativa',
  description: 'Formando líderes para el futuro.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}