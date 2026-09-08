import { listarDiplomados } from '@/lib/constancias/service';
import FormularioDiplomado from '../componentes/FormularioDiplomado';

export const dynamic = 'force-dynamic';

export default async function PaginaDiplomados() {
  const diplomados = await listarDiplomados({ soloActivos: false });

  return (
    <div className="mx-auto max-w-5xl">
      <span className="text-eyebrow text-[var(--color-primary-green)]">Catálogo</span>
      <h1 className="mt-2 font-display text-3xl font-semibold tracking-tight text-[var(--color-ink)]">
        Diplomados <span className="text-[var(--color-primary-orange)]">registrados</span>
      </h1>
      <p className="mt-1 text-sm text-[var(--color-ink-soft)]">
        La clave se incrusta en el folio y el consecutivo se lleva por diplomado y por año.
      </p>

      <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_22rem]">
        <div className="overflow-hidden rounded-[1.5rem] bg-white ring-1 ring-black/5 shadow-[var(--shadow-card)]">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-[var(--color-line)] text-xs uppercase tracking-[0.14em] text-[var(--color-ink-muted)]">
                <th className="px-5 py-4 font-medium">Clave</th>
                <th className="px-5 py-4 font-medium">Nombre</th>
                <th className="px-5 py-4 font-medium tabular-nums">Horas</th>
                <th className="px-5 py-4 font-medium tabular-nums">Módulos</th>
              </tr>
            </thead>
            <tbody>
              {diplomados.length === 0 && (
                <tr>
                  <td colSpan={4} className="px-5 py-14 text-center text-[var(--color-ink-muted)]">
                    Todavía no hay diplomados en el catálogo.
                  </td>
                </tr>
              )}
              {diplomados.map((d) => (
                <tr key={d.clave} className="border-b border-[var(--color-line)] last:border-0 align-top">
                  <td className="px-5 py-4 font-mono text-xs text-[var(--color-ink)]">{d.clave}</td>
                  <td className="px-5 py-4 text-[var(--color-ink-soft)]">
                    {d.nombre}
                    {!d.activo && (
                      <span className="ml-2 rounded-full bg-[var(--color-ink)]/8 px-2 py-0.5 text-[0.65rem] text-[var(--color-ink-muted)]">
                        inactivo
                      </span>
                    )}
                  </td>
                  <td className="px-5 py-4 tabular-nums text-[var(--color-ink-soft)]">{d.horas_totales ?? '—'}</td>
                  <td className="px-5 py-4 tabular-nums text-[var(--color-ink-soft)]">{(d.modulos || []).length}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <FormularioDiplomado />
      </div>
    </div>
  );
}
