"use client";

import Link from "next/link";
import { useEffect } from "react";

const beneficios = [
  "Profesores con experiencia profesional activa",
  "Reconocimiento de Validez Oficial (RVOE)",
  "Instalaciones modernas y equipadas",
  "Becas y financiamiento disponible",
];

export default function ProgramaModal({ program, onClose }) {
  useEffect(() => {
    if (!program) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [program, onClose]);

  if (!program) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="programa-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0c1208]/75 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-[2rem] max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-[0_40px_80px_-20px_rgba(0,0,0,0.45)] ring-1 ring-black/5"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative bg-gradient-to-br from-[#66822c] to-[#4a621e] p-10 text-white overflow-hidden">
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-[#f68c24]/20 blur-3xl" aria-hidden="true" />
          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar"
            className="absolute top-5 right-5 w-10 h-10 bg-white/15 hover:bg-white/25 rounded-full flex items-center justify-center transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="relative">
            <span className="text-5xl block mb-4" aria-hidden="true">{program.icono}</span>
            <h3 id="programa-modal-title" className="font-display text-3xl lg:text-4xl font-bold leading-tight text-balance mb-5">
              {program.nombre}
            </h3>
            <div className="flex flex-wrap gap-2">
              <span className="bg-white/15 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-medium tracking-wide">
                {program.duracion}
              </span>
              <span className="bg-white/15 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-medium tracking-wide">
                {program.modalidad}
              </span>
            </div>
          </div>
        </div>

        <div className="p-10">
          <p className="text-[#4a5240] text-lg leading-relaxed mb-8 text-pretty">{program.descripcion}</p>

          <div className="mb-10">
            <h4 className="font-display text-lg font-bold text-[#1a1f14] mb-5">Beneficios del programa</h4>
            <ul className="space-y-3">
              {beneficios.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="shrink-0 w-5 h-5 rounded-full bg-[#66822c]/10 text-[#66822c] flex items-center justify-center mt-0.5">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-[#4a5240]">{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/contacto"
              className="flex-1 inline-flex items-center justify-center gap-2 bg-[#66822c] hover:bg-[#556e23] text-white px-8 py-4 rounded-full font-semibold transition-colors shadow-[0_14px_36px_-12px_rgba(102,130,44,0.7)]"
            >
              Solicitar Información
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <button
              type="button"
              onClick={onClose}
              className="flex-1 inline-flex items-center justify-center bg-white ring-1 ring-[var(--color-line)] hover:ring-[#1a1f14] text-[#1a1f14] px-8 py-4 rounded-full font-semibold transition-colors"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
