"use client";

import { useState } from "react";
import Hero from "./components/home/Hero";
import BibliotecaVirtual from "./components/home/BibliotecaVirtual";
import Mision from "./components/home/Mision";
import Servicios from "./components/home/Servicios";
import ExitoStats from "./components/home/ExitoStats";
import Bienvenida from "./components/home/Bienvenida";
import Inscripciones from "./components/home/Inscripciones";
import OfertaCTA from "./components/home/OfertaCTA";
import NumerosStats from "./components/home/NumerosStats";
import Testimonios from "./components/home/Testimonios";
import WhatsAppFloat from "./components/home/WhatsAppFloat";
import ProgramaModal from "./components/home/ProgramaModal";

const programas = [
  {
    id: 1,
    tipo: "licenciatura",
    nombre: "Licenciatura en Ciencias de la Educación",
    duracion: "8 semestres",
    modalidad: "Escolarizada / En línea",
    descripcion:
      "Forma profesionales capaces de diseñar, implementar y evaluar programas educativos innovadores.",
    icono: "🎓",
    imagen: "/images/educacion.jpg",
  },
  {
    id: 2,
    tipo: "licenciatura",
    nombre: "Licenciatura en Criminología",
    duracion: "8 semestres",
    modalidad: "Escolarizada",
    descripcion:
      "Prepara especialistas en prevención y análisis del delito con enfoque multidisciplinario.",
    icono: "⚖️",
    imagen: "/images/criminologia.jpg",
  },
  {
    id: 3,
    tipo: "licenciatura",
    nombre: "Licenciatura en Derecho",
    duracion: "9 semestres",
    modalidad: "Escolarizada",
    descripcion:
      "Forma abogados con sólidos conocimientos jurídicos y ética profesional.",
    icono: "⚖️",
    imagen: "/images/derecho.jpg",
  },
  {
    id: 4,
    tipo: "maestria",
    nombre: "Maestría en Educación",
    duracion: "4 semestres",
    modalidad: "En línea",
    descripcion:
      "Especialización en procesos educativos y desarrollo de competencias docentes.",
    icono: "🎯",
    imagen: "/images/meducacion.jpg",
  },
  {
    id: 5,
    tipo: "maestria",
    nombre: "Maestría en Administración Competitiva",
    duracion: "4 semestres",
    modalidad: "Escolarizada / En línea",
    descripcion:
      "Desarrolla líderes empresariales con visión estratégica y competitiva.",
    icono: "💼",
    imagen: "/images/madministracion.jpg",
  },
  {
    id: 6,
    tipo: "maestria",
    nombre: "Maestría en Gestión de Políticas Públicas",
    duracion: "4 semestres",
    modalidad: "En línea",
    descripcion:
      "Forma especialistas en diseño e implementación de políticas públicas efectivas.",
    icono: "🏛️",
    imagen: "/images/mpublicas.jpg",
  },
  {
    id: 7,
    tipo: "doctorado",
    nombre: "Doctorado en Administración de Instituciones Educativas",
    duracion: "6 semestres",
    modalidad: "En línea",
    descripcion:
      "Máximo grado académico para líderes en gestión educativa e investigación.",
    icono: "🎓",
    imagen: "/images/comunicacion.jpg",
  },
];

const schemaJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollegeOrUniversity",
  name: "Instituto Interamericano de Estudios Superiores de Baja California (IIESBC)",
  url: "https://www.iiesbc.mx",
  logo: "https://www.iiesbc.mx/images/logo.png",
  sameAs: [
    "https://www.facebook.com/share/1D6PU7xWbP/",
    "https://www.instagram.com/iiesbc",
  ],
  description:
    "Transformamos vidas a través de la educación superior de calidad, formando profesionales competitivos en licenciaturas, maestrías y doctorados en Mexicali.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Río Fuerte #1692, Col. Independencia Magisterial",
    addressLocality: "Mexicali",
    addressRegion: "B.C.",
    postalCode: "21290",
    addressCountry: "MX",
  },
  telephone: "+526864335197",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+52-686-433-5197",
    contactType: "Admissions",
    email: "im.iiesbc@gmail.com",
  },
};

export default function Home() {
  const [selectedProgram, setSelectedProgram] = useState(null);

  return (
    <main className="pt-0">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJsonLd) }}
      />

      <Hero />
      <BibliotecaVirtual />
      <Mision />
      <Servicios />
      <ExitoStats />
      <Bienvenida />
      <Inscripciones />
      <OfertaCTA />
      <NumerosStats />
      <Testimonios />

      <WhatsAppFloat />
      <ProgramaModal program={selectedProgram} onClose={() => setSelectedProgram(null)} />

      {/* Acceso oculto a los datos de programas para integraciones futuras (modal, filtros). */}
      <span className="sr-only" aria-hidden="true" data-programas-count={programas.length} />
    </main>
  );
}
