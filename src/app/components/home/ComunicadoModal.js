"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

// Comunicado institucional que se muestra al entrar a la página principal.
// Para retirarlo: poner `activo: false` (o quitar <ComunicadoModal /> de page.js).
// Al publicar uno nuevo, cambiar `id` para que vuelva a mostrarse a quien ya cerró el anterior.
const COMUNICADO = {
  activo: true,
  id: "condolencias-toledo-2026-11",
  imagen: "/images/comunicados/condolencias-toledo.jpg",
  ancho: 1281,
  alto: 1600,
  titulo: "Comunicado: condolencias por el accidente en Toledo, España",
  textoAlternativo:
    "Comunicado del IIESBC. Desde el Instituto Interamericano de Estudios Superiores de Baja California, " +
    "expresamos nuestro más profundo pesar por el trágico accidente ocurrido en Toledo, España. " +
    "Extendemos nuestras más sentidas condolencias a las familias y seres queridos de las víctimas, " +
    "así como nuestro apoyo y solidaridad a las personas heridas y afectadas. " +
    "Que encuentren consuelo en este momento tan difícil. Respetuosamente, Dr. Rafael López Oñate, " +
    "Rector del Instituto Interamericano de Estudios Superiores de Baja California.",
};

const STORAGE_KEY = `iiesbc-comunicado-${COMUNICADO.id}`;

export default function ComunicadoModal() {
  const [abierto, setAbierto] = useState(false);

  useEffect(() => {
    if (!COMUNICADO.activo) return;
    try {
      if (sessionStorage.getItem(STORAGE_KEY)) return;
    } catch {
      // sessionStorage no disponible (modo privado estricto): se muestra igual.
    }
    setAbierto(true);
  }, []);

  const cerrar = useCallback(() => {
    setAbierto(false);
    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {}
  }, []);

  useEffect(() => {
    if (!abierto) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => {
      if (e.key === "Escape") cerrar();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [abierto, cerrar]);

  if (!abierto) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={COMUNICADO.titulo}
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6 bg-[#0c1208]/85 backdrop-blur-sm animate-fade-in"
      onClick={cerrar}
    >
      <div
        className="relative flex flex-col items-center max-h-full"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={cerrar}
          aria-label="Cerrar comunicado"
          autoFocus
          className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 z-10 w-10 h-10 rounded-full bg-white text-[#1a1f14] shadow-lg ring-1 ring-black/10 flex items-center justify-center hover:bg-[#f3f1ea] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f68c24]"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <Image
          src={COMUNICADO.imagen}
          alt={COMUNICADO.textoAlternativo}
          width={COMUNICADO.ancho}
          height={COMUNICADO.alto}
          priority
          sizes="(max-width: 640px) 92vw, 560px"
          className="w-auto h-auto max-w-[min(92vw,560px)] max-h-[calc(100dvh-6.5rem)] rounded-lg shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)]"
        />

        <button
          type="button"
          onClick={cerrar}
          className="mt-4 px-6 py-2 rounded-full text-sm font-medium tracking-wide text-white/85 border border-white/25 hover:bg-white/10 transition-colors"
        >
          Continuar al sitio
        </button>
      </div>
    </div>
  );
}
