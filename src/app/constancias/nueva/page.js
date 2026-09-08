import Link from 'next/link';

import { listarDiplomados } from '@/lib/constancias/service';
import FormularioConstancia from '../componentes/FormularioConstancia';

export const dynamic = 'force-dynamic';

export default async function PaginaNuevaConstancia() {
  const diplomados = await listarDiplomados();

  return (
    <div className="mx-auto max-w-5xl">
      <Link href="/constancias" className="text-sm text-[var(--color-ink-muted)] hover:text-[var(--color-primary-green)]">
        ← Volver al registro
      </Link>

      <h1 className="mt-3 mb-8 font-display text-3xl font-semibold tracking-tight text-[var(--color-ink)]">
        Nueva <span className="text-[var(--color-primary-orange)]">constancia</span>
      </h1>

      <FormularioConstancia diplomados={diplomados} />
    </div>
  );
}
