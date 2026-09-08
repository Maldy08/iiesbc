import Link from 'next/link';

import { listarConstancias, listarDiplomados } from '@/lib/constancias/service';
import AccionesConstancia from './componentes/AccionesConstancia';

export const dynamic = 'force-dynamic';

const ETIQUETA_ESTATUS = {
  emitida: { texto: 'Emitida', clases: 'bg-[var(--color-primary-green)]/10 text-[#556e23]' },
  enviada: { texto: 'Enviada', clases: 'bg-[var(--color-primary-orange)]/12 text-[var(--color-primary-dark-orange)]' },
  cancelada: { texto: 'Cancelada', clases: 'bg-[var(--color-ink)]/8 text-[var(--color-ink-muted)]' },
};

function formatearFecha(valor) {
  if (!valor) return '—';
  const [anio, mes, dia] = String(valor).slice(0, 10).split('-');
  return `${dia}/${mes}/${anio}`;
}

export default async function PaginaConstancias({ searchParams }) {
  const filtros = await searchParams;
  const pagina = Number(filtros.pagina) || 1;

  const [{ constancias, total, porPagina }, diplomados] = await Promise.all([
    listarConstancias({
      busqueda: filtros.busqueda || '',
      estatus: filtros.estatus || '',
      diplomado: filtros.diplomado || '',
      pagina,
    }),
    listarDiplomados(),
  ]);

  const totalPaginas = Math.max(1, Math.ceil(total / porPagina));
  const parametros = (cambios) => {
    const p = new URLSearchParams();
    for (const [k, v] of Object.entries({ ...filtros, ...cambios })) if (v) p.set(k, String(v));
    return `?${p.toString()}`;
  };

  return (
    <div>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <span className="text-eyebrow text-[var(--color-primary-green)]">Registro</span>
          <h1 className="mt-2 font-display text-3xl font-semibold tracking-tight text-[var(--color-ink)]">
            Constancias <span className="text-[var(--color-primary-orange)]">emitidas</span>
          </h1>
          <p className="mt-1 text-sm text-[var(--color-ink-soft)]">
            {total} {total === 1 ? 'constancia registrada' : 'constancias registradas'}.
          </p>
        </div>

        <Link
          href="/constancias/nueva"
          className="rounded-full bg-[var(--color-primary-green)] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_14px_36px_-12px_rgba(102,130,44,0.7)] transition-all hover:bg-[#556e23]"
        >
          Nueva constancia
        </Link>
      </div>

      {/* Filtros: formulario GET, así los resultados quedan en la URL y se
          pueden compartir o recargar sin perder el estado. */}
      <form className="mt-8 flex flex-wrap items-end gap-3 rounded-[1.5rem] bg-white p-5 ring-1 ring-black/5">
        <label className="flex-1 basis-64 text-xs font-medium uppercase tracking-[0.14em] text-[var(--color-ink-muted)]">
          Buscar
          <input
            type="search"
            name="busqueda"
            defaultValue={filtros.busqueda || ''}
            placeholder="Folio, nombre, matrícula o CURP"
            className="mt-1.5 w-full rounded-xl border border-[var(--color-line)] px-3.5 py-2.5 text-sm font-normal normal-case tracking-normal text-[var(--color-ink)] outline-none focus:border-[var(--color-primary-green)]"
          />
        </label>

        <label className="text-xs font-medium uppercase tracking-[0.14em] text-[var(--color-ink-muted)]">
          Estatus
          <select
            name="estatus"
            defaultValue={filtros.estatus || ''}
            className="mt-1.5 block rounded-xl border border-[var(--color-line)] px-3.5 py-2.5 text-sm font-normal normal-case tracking-normal text-[var(--color-ink)] outline-none focus:border-[var(--color-primary-green)]"
          >
            <option value="">Todos</option>
            <option value="emitida">Emitida</option>
            <option value="enviada">Enviada</option>
            <option value="cancelada">Cancelada</option>
          </select>
        </label>

        <label className="text-xs font-medium uppercase tracking-[0.14em] text-[var(--color-ink-muted)]">
          Diplomado
          <select
            name="diplomado"
            defaultValue={filtros.diplomado || ''}
            className="mt-1.5 block max-w-56 rounded-xl border border-[var(--color-line)] px-3.5 py-2.5 text-sm font-normal normal-case tracking-normal text-[var(--color-ink)] outline-none focus:border-[var(--color-primary-green)]"
          >
            <option value="">Todos</option>
            {diplomados.map((d) => (
              <option key={d.clave} value={d.clave}>
                {d.clave} · {d.nombre}
              </option>
            ))}
          </select>
        </label>

        <button
          type="submit"
          className="rounded-full border border-[var(--color-line)] px-5 py-2.5 text-sm font-semibold text-[var(--color-ink)] transition-colors hover:border-[var(--color-primary-green)] hover:text-[var(--color-primary-green)]"
        >
          Filtrar
        </button>
      </form>

      <div className="mt-6 overflow-x-auto rounded-[1.5rem] bg-white ring-1 ring-black/5 shadow-[var(--shadow-card)]">
        <table className="w-full min-w-[62rem] text-left text-sm">
          <thead>
            <tr className="border-b border-[var(--color-line)] text-xs uppercase tracking-[0.14em] text-[var(--color-ink-muted)]">
              <th className="px-5 py-4 font-medium">Folio</th>
              <th className="px-5 py-4 font-medium">Egresado</th>
              <th className="px-5 py-4 font-medium">Diplomado</th>
              <th className="px-5 py-4 font-medium tabular-nums">Emisión</th>
              <th className="px-5 py-4 font-medium">Estatus</th>
              <th className="px-5 py-4 font-medium text-right">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {constancias.length === 0 && (
              <tr>
                <td colSpan={6} className="px-5 py-16 text-center text-[var(--color-ink-muted)]">
                  No hay constancias que coincidan con los filtros.
                </td>
              </tr>
            )}

            {constancias.map((c) => {
              const estatus = ETIQUETA_ESTATUS[c.estatus] || ETIQUETA_ESTATUS.emitida;
              return (
                <tr key={c.folio} className="border-b border-[var(--color-line)] last:border-0 align-top">
                  <td className="px-5 py-4">
                    <span className="font-mono text-xs tabular-nums text-[var(--color-ink)]">{c.folio}</span>
                  </td>
                  <td className="px-5 py-4">
                    <span className="block font-medium text-[var(--color-ink)]">{c.nombre_completo}</span>
                    <span className="text-xs text-[var(--color-ink-muted)]">
                      {c.matricula ? `Matrícula ${c.matricula}` : 'Sin matrícula'}
                    </span>
                  </td>
                  <td className="px-5 py-4 max-w-72">
                    <span className="block text-[var(--color-ink-soft)]">{c.diplomado_nombre}</span>
                    <span className="text-xs text-[var(--color-ink-muted)] tabular-nums">
                      {c.horas_totales} h · {(c.modulos || []).length} módulos
                    </span>
                  </td>
                  <td className="px-5 py-4 tabular-nums text-[var(--color-ink-soft)]">
                    {formatearFecha(c.fecha_emision)}
                  </td>
                  <td className="px-5 py-4">
                    <span className={`inline-block rounded-full px-2.5 py-1 text-xs font-medium ${estatus.clases}`}>
                      {estatus.texto}
                    </span>
                  </td>
                  <td className="px-5 py-4">
                    <AccionesConstancia folio={c.folio} estatus={c.estatus} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {totalPaginas > 1 && (
        <div className="mt-6 flex items-center justify-between text-sm">
          <span className="text-[var(--color-ink-muted)] tabular-nums">
            Página {pagina} de {totalPaginas}
          </span>
          <div className="flex gap-2">
            {pagina > 1 && (
              <Link
                href={parametros({ pagina: pagina - 1 })}
                className="rounded-full border border-[var(--color-line)] px-4 py-2 font-medium transition-colors hover:border-[var(--color-primary-green)]"
              >
                Anterior
              </Link>
            )}
            {pagina < totalPaginas && (
              <Link
                href={parametros({ pagina: pagina + 1 })}
                className="rounded-full border border-[var(--color-line)] px-4 py-2 font-medium transition-colors hover:border-[var(--color-primary-green)]"
              >
                Siguiente
              </Link>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
