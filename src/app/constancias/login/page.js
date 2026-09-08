import { redirect } from 'next/navigation';

import { sesionActual } from '@/lib/constancias/auth';
import FormularioAcceso from '../componentes/FormularioAcceso';

export const metadata = {
  title: 'Acceso · Constancias',
  robots: { index: false, follow: false },
};

export default async function PaginaLogin({ searchParams }) {
  const sesion = await sesionActual();
  const { regresar } = await searchParams;

  if (sesion) redirect(regresar || '/constancias');

  return (
    <div className="mx-auto flex min-h-[60vh] max-w-md flex-col justify-center">
      <div className="mb-8">
        <span className="text-eyebrow text-[var(--color-primary-green)]">IIESBC · CACP</span>
        <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight text-[var(--color-ink)]">
          Emisión de <span className="text-[var(--color-primary-orange)]">constancias</span>
        </h1>
        <p className="mt-2 text-sm text-[var(--color-ink-soft)]">
          Acceso restringido al personal autorizado del instituto.
        </p>
      </div>

      <FormularioAcceso destino={regresar || '/constancias'} />
    </div>
  );
}
