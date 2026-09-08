import { redirect } from 'next/navigation';

export const metadata = {
  title: 'Validar una constancia',
  description:
    'Verifica la autenticidad de una constancia emitida por el IIESBC y el Centro de Actualización y Capacitación Profesional.',
};

async function consultar(formData) {
  'use server';
  const folio = String(formData.get('folio') || '').trim().toUpperCase();
  if (folio) redirect(`/validar/${encodeURIComponent(folio)}`);
}

export default function PaginaConsultaFolio() {
  return (
    <section className="relative isolate overflow-hidden bg-[#0c1208] py-20 sm:py-28">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_20%_0%,rgba(102,130,44,0.28),transparent),radial-gradient(50%_50%_at_85%_20%,rgba(246,140,36,0.18),transparent)]" />

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#a5c94c] opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#a5c94c]" />
          </span>
          <span className="text-eyebrow text-white/70">Verificación de documentos</span>
        </div>

        <h1 className="mt-5 font-display text-4xl font-semibold tracking-[-0.02em] text-white sm:text-5xl">
          Validar una <span className="text-[#f68c24]">constancia</span>
        </h1>
        <div className="mt-6 h-px w-40 bg-gradient-to-r from-[#66822c] via-[#f68c24] to-transparent" />

        <p className="mt-6 max-w-xl text-pretty text-white/70">
          Captura el folio impreso en la constancia —o escanea el código QR del documento— para
          confirmar que fue emitida por el instituto.
        </p>

        <form action={consultar} className="mt-10 flex flex-col gap-3 sm:flex-row">
          <input
            type="text"
            name="folio"
            required
            placeholder="IIESBC-2026-DI-NATCC-CO-0001"
            className="flex-1 rounded-full bg-white/95 px-6 py-3.5 font-mono text-sm uppercase tracking-wide text-[var(--color-ink)] outline-none ring-1 ring-white/20 placeholder:text-[var(--color-ink-muted)] placeholder:normal-case"
          />
          <button
            type="submit"
            className="rounded-full bg-[var(--color-primary-orange)] px-8 py-3.5 text-sm font-semibold text-white shadow-[0_14px_36px_-12px_rgba(246,140,36,0.7)] transition-all hover:bg-[var(--color-primary-dark-orange)]"
          >
            Validar
          </button>
        </form>
      </div>
    </section>
  );
}
