import { listarDiplomados } from '@/lib/constancias/service';
import ImportadorCedula from '../componentes/ImportadorCedula';

export const dynamic = 'force-dynamic';

export default async function PaginaImportar() {
  const diplomados = await listarDiplomados();

  return (
    <div className="mx-auto max-w-5xl">
      <span className="text-eyebrow text-[var(--color-primary-green)]">Carga masiva</span>
      <h1 className="mt-2 font-display text-3xl font-semibold tracking-tight text-[var(--color-ink)]">
        Importar <span className="text-[var(--color-primary-orange)]">cédula</span>
      </h1>
      <p className="mt-1 max-w-2xl text-sm text-[var(--color-ink-soft)]">
        Sube el archivo de Excel tal como se llena hoy. El sistema localiza la fila de encabezados,
        interpreta las fechas y te muestra todo para revisar antes de guardar nada.
      </p>

      <ImportadorCedula diplomados={diplomados} />
    </div>
  );
}
