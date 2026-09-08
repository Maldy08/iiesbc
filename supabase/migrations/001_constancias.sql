-- ============================================================================
-- Módulo de constancias IIESBC - CACP
-- Tablas: diplomados, constancias_usuarios, constancias, constancias_consecutivos
-- ============================================================================

create extension if not exists pgcrypto;
create extension if not exists pg_trgm;

-- ---------------------------------------------------------------------------
-- Catálogo de diplomados. La clave alimenta el folio (IIESBC-2026-DI-<CLAVE>-CO-0001)
-- ---------------------------------------------------------------------------
create table if not exists public.diplomados (
  id             uuid primary key default gen_random_uuid(),
  clave          text not null unique,
  nombre         text not null,
  horas_totales  integer,
  modulos        jsonb not null default '[]'::jsonb,
  activo         boolean not null default true,
  created_at     timestamptz not null default now(),
  updated_at     timestamptz not null default now(),
  constraint diplomados_clave_formato check (clave ~ '^[A-Z0-9]{2,10}$'),
  constraint diplomados_modulos_max check (jsonb_array_length(modulos) <= 6)
);

-- ---------------------------------------------------------------------------
-- Usuarios del módulo. Hoy solo la encargada de emisión; el campo rol deja
-- abierta la puerta a más perfiles sin migrar de nuevo.
-- ---------------------------------------------------------------------------
create table if not exists public.constancias_usuarios (
  id             uuid primary key default gen_random_uuid(),
  usuario        text not null unique,
  password_hash  text not null,
  nombre         text not null,
  rol            text not null default 'emisor',
  activo         boolean not null default true,
  ultimo_acceso  timestamptz,
  created_at     timestamptz not null default now(),
  constraint constancias_usuarios_rol_valido check (rol in ('emisor', 'admin'))
);

-- ---------------------------------------------------------------------------
-- Constancias emitidas. Fuente de verdad: el PDF se regenera desde estos datos.
-- ---------------------------------------------------------------------------
create table if not exists public.constancias (
  id                  uuid primary key default gen_random_uuid(),
  folio               text not null unique,
  anio                integer not null,
  matricula           text,
  nombre_completo     text not null,
  curp                text,
  rfc                 text,
  correo              text,
  diplomado_clave     text not null,
  diplomado_nombre    text not null,
  fecha_inicio        date,
  fecha_termino       date,
  horas_totales       integer not null,
  modulos             jsonb not null default '[]'::jsonb,
  libro_no            integer not null default 1,
  estatus             text not null default 'emitida',
  fecha_emision       date not null default current_date,
  emitida_por         uuid references public.constancias_usuarios(id) on delete set null,
  motivo_cancelacion  text,
  created_at          timestamptz not null default now(),
  updated_at          timestamptz not null default now(),
  constraint constancias_estatus_valido check (estatus in ('emitida', 'enviada', 'cancelada')),
  constraint constancias_modulos_max check (jsonb_array_length(modulos) between 1 and 6),
  constraint constancias_horas_positivas check (horas_totales > 0)
);

create index if not exists constancias_nombre_idx    on public.constancias using gin (nombre_completo gin_trgm_ops);
create index if not exists constancias_matricula_idx on public.constancias (matricula);
create index if not exists constancias_diplomado_idx on public.constancias (diplomado_clave, anio);
create index if not exists constancias_creadas_idx   on public.constancias (created_at desc);

-- ---------------------------------------------------------------------------
-- Consecutivo del folio: reinicia por (año, clave de diplomado)
-- ---------------------------------------------------------------------------
create table if not exists public.constancias_consecutivos (
  anio    integer not null,
  clave   text    not null,
  ultimo  integer not null default 0,
  primary key (anio, clave)
);

-- Reserva atómica del siguiente consecutivo. El upsert con ON CONFLICT toma
-- el lock de la fila, así que dos emisiones simultáneas no repiten folio.
create or replace function public.siguiente_consecutivo_constancia(p_anio integer, p_clave text)
returns integer
language plpgsql
security definer
set search_path = public
as $$
declare
  v_siguiente integer;
begin
  insert into public.constancias_consecutivos (anio, clave, ultimo)
  values (p_anio, p_clave, 1)
  on conflict (anio, clave)
  do update set ultimo = public.constancias_consecutivos.ultimo + 1
  returning ultimo into v_siguiente;

  return v_siguiente;
end;
$$;

-- Cuando el folio se captura a mano (o llega desde el Excel), el contador debe
-- adelantarse para que la siguiente emisión automática no repita número.
create or replace function public.sincronizar_consecutivo_constancia(p_anio integer, p_clave text, p_valor integer)
returns integer
language plpgsql
security definer
set search_path = public
as $$
declare
  v_ultimo integer;
begin
  insert into public.constancias_consecutivos (anio, clave, ultimo)
  values (p_anio, p_clave, p_valor)
  on conflict (anio, clave)
  do update set ultimo = greatest(public.constancias_consecutivos.ultimo, excluded.ultimo)
  returning ultimo into v_ultimo;

  return v_ultimo;
end;
$$;

-- ---------------------------------------------------------------------------
-- updated_at automático
-- ---------------------------------------------------------------------------
create or replace function public.tocar_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists constancias_updated_at on public.constancias;
create trigger constancias_updated_at
  before update on public.constancias
  for each row execute function public.tocar_updated_at();

drop trigger if exists diplomados_updated_at on public.diplomados;
create trigger diplomados_updated_at
  before update on public.diplomados
  for each row execute function public.tocar_updated_at();

-- ---------------------------------------------------------------------------
-- RLS: todo el acceso pasa por rutas de servidor con la service-role key.
-- Sin políticas, la anon key no lee nada (incluida la página pública de
-- validación, que consulta desde el servidor y solo expone 3 campos).
-- ---------------------------------------------------------------------------
alter table public.diplomados              enable row level security;
alter table public.constancias_usuarios    enable row level security;
alter table public.constancias             enable row level security;
alter table public.constancias_consecutivos enable row level security;
