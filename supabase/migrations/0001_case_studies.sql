-- Migration 1 — case_studies
create table public.case_studies (
  id          uuid primary key default gen_random_uuid(),
  slug        text unique not null,
  title       text not null,
  client      text not null,
  category    text not null,
  kicker      text,
  summary     text,
  hero_image  text,
  problem     text,
  approach    jsonb default '[]'::jsonb,
  outcome     text,
  metrics     jsonb default '[]'::jsonb,
  tech_stack  text[] default array[]::text[],
  testimonial jsonb,
  order_index integer default 0,
  published   boolean default false,
  seo_title       text,
  seo_description text,
  og_image        text,
  created_at  timestamptz default now(),
  updated_at  timestamptz default now()
);
create index case_studies_slug_idx on public.case_studies(slug);
create index case_studies_order_idx on public.case_studies(order_index);
alter table public.case_studies enable row level security;
