-- ============================================================================
-- Centro emisor de la constancia
--
-- El catálogo de centros vive en código (src/lib/constancias/centros.js) y no
-- en una tabla: dar de alta un centro obliga a subir su logo y su firma al
-- repo, así que una tabla solo agregaría un lugar más donde desincronizarse.
-- Aquí se guarda únicamente con qué centro se emitió cada constancia.
--
-- Sin check constraint a propósito: la lista de claves válidas la valida la
-- capa de servicio contra el catálogo, y así agregar un centro no obliga a
-- migrar de nuevo. Una clave desconocida cae al CACP al generar el PDF.
-- ============================================================================

alter table public.constancias
  add column if not exists centro_clave text not null default 'CACP';

comment on column public.constancias.centro_clave is
  'Clave del centro emisor (catálogo en src/lib/constancias/centros.js): define logo, firma y firmante del PDF.';

-- Las constancias emitidas antes de esta migración son todas del CACP, que es
-- justo lo que deja el default de la columna.

create index if not exists constancias_centro_idx on public.constancias (centro_clave, anio);
