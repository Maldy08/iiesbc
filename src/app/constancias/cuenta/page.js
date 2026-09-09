import { sesionActual } from '@/lib/constancias/auth';
import FormularioContrasena from '../componentes/FormularioContrasena';

export const dynamic = 'force-dynamic';

export default async function PaginaCuenta() {
  const sesion = await sesionActual();

  return (
    <div className="mx-auto max-w-xl">
      <span className="text-eyebrow text-[var(--color-primary-green)]">Mi cuenta</span>
      <h1 className="mt-2 font-display text-3xl font-semibold tracking-tight text-[var(--color-ink)]">
        Cambiar <span className="text-[var(--color-primary-orange)]">contraseña</span>
      </h1>

      <dl className="mt-6 flex flex-wrap gap-x-10 gap-y-2 text-sm">
        <div>
          <dt className="text-eyebrow text-[var(--color-ink-muted)]">Usuario</dt>
          <dd className="mt-1 font-mono text-[var(--color-ink)]">{sesion?.usuario}</dd>
        </div>
        <div>
          <dt className="text-eyebrow text-[var(--color-ink-muted)]">Nombre</dt>
          <dd className="mt-1 text-[var(--color-ink)]">{sesion?.nombre}</dd>
        </div>
      </dl>

      <div className="mt-8">
        <FormularioContrasena />
      </div>
    </div>
  );
}
