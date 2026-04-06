import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './globals.css'; // Asegúrate de tener un archivo de estilos globales
import { Analytics } from '@vercel/analytics/next';

export const metadata = {
  metadataBase: new URL('https://www.iiesbc.mx'),
  title: {
    default: 'IIESBC | Instituto Interamericano de Estudios Superiores',
    template: '%s | IIESBC',
  },
  description: 'Formando líderes para el futuro. Transforma tu vida a través de educación superior de calidad con licenciaturas, maestrías y doctorados en Baja California.',
  keywords: ['universidad', 'baja california', 'educación superior', 'licenciaturas', 'maestrías', 'doctorados', 'iiesbc', 'instituto interamericano'],
  openGraph: {
    title: 'IIESBC | Educación Superior de Excelencia',
    description: 'Transformamos vidas a través de educación de calidad. Inscríbete en nuestras Licenciaturas y Posgrados.',
    url: 'https://www.iiesbc.mx',
    siteName: 'IIESBC',
    images: [
      {
        url: '/images/slid-IIESBC-Inscrip.jpg',
        width: 1200,
        height: 630,
        alt: 'Campus IIESBC',
      },
    ],
    locale: 'es_MX',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IIESBC | Instituto Interamericano de Estudios Superiores',
    description: 'Formando líderes para el futuro en Baja California',
    images: ['/images/slid-IIESBC-Inscrip.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};



export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <meta name="google-site-verification" content="CqOy9i65UxB16VhhEt6O4Dgou6PmnbctRFHPCLrSSOM" />
      </head>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}