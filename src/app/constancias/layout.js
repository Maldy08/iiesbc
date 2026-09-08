import Link from 'next/link';

import { sesionActual } from '@/lib/constancias/auth';
import BotonSalir from './componentes/BotonSalir';

export const metadata = {
  title: 'Constancias',
  robots: { index: false, follow: false },
};

const ENLACES = [
  { href: '/constancias', etiqueta: 'Constancias' },
  { href: '/constancias/nueva', etiqueta: 'Nueva' },
  { href: '/constancias/importar', etiqueta: 'Importar' },
  { href: '/constancias/diplomados', etiqueta: 'Diplomados' },
];

export default async function LayoutConstancias({ children }) {
  const sesion = await sesionActual();

  return (
    <div className="min-h-screen bg-[var(--color-surface)]">
      {sesion && (
        <header className="border-b border-[var(--color-line)] bg-white">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-x-8 gap-y-3 px-4 py-4 sm:px-6 lg:px-8">
            <Link href="/constancias" className="flex items-center gap-3">
              <span className="h-9 w-1 rounded-full bg-[var(--color-primary-green)]" />
              <span>
                <span className="block font-display text-sm font-semibold tracking-tight text-[var(--color-ink)]">
                  Emisión de constancias
                </span>
                <span className="block text-[0.7rem] uppercase tracking-[0.18em] text-[var(--color-ink-muted)]">
                  IIESBC · CACP
                </span>
              </span>
            </Link>

            <nav className="flex flex-1 flex-wrap items-center gap-1">
              {ENLACES.map((enlace) => (
                <Link
                  key={enlace.href}
                  href={enlace.href}
                  className="rounded-full px-3.5 py-1.5 text-sm font-medium text-[var(--color-ink-soft)] transition-colors hover:bg-[var(--color-surface-alt)] hover:text-[var(--color-ink)]"
                >
                  {enlace.etiqueta}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-3 text-sm">
              <span className="text-[var(--color-ink-muted)]">{sesion.nombre}</span>
              <BotonSalir />
            </div>
          </div>
        </header>
      )}

      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">{children}</main>
    </div>
  );
}
