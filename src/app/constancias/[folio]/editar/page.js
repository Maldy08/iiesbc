import Link from 'next/link';
import { notFound } from 'next/navigation';

import { listarDiplomados, obtenerConstancia } from '@/lib/constancias/service';
import FormularioConstancia from '../../componentes/FormularioConstancia';

export const dynamic = 'force-dynamic';

export default async function PaginaEditarConstancia({ params }) {
  const { folio } = await params;
  const [constancia, diplomados] = await Promise.all([obtenerConstancia(folio), listarDiplomados()]);

  if (!constancia) notFound();

  return (
    <div className="mx-auto max-w-5xl">
      <Link href="/constancias" className="text-sm text-[var(--color-ink-muted)] hover:text-[var(--color-primary-green)]">
        ← Volver al registro
      </Link>

      <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight text-[var(--color-ink)]">
        Editar <span className="text-[var(--color-primary-orange)]">constancia</span>
      </h1>
      <p className="mb-8 mt-1 font-mono text-xs text-[var(--color-ink-muted)]">{constancia.folio}</p>

      <FormularioConstancia diplomados={diplomados} constancia={constancia} />
    </div>
  );
}
