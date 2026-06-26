-- Migration 3 — contact_submissions
create table public.contact_submissions (
  id            uuid primary key default gen_random_uuid(),
  name          text not null,
  email         text not null,
  whatsapp      text,
  budget        text,
  message       text not null,
  status        text not null default 'new' check (status in ('new', 'read', 'contacted', 'archived', 'spam')),
  ip_address    inet,
  user_agent    text,
  turnstile_score numeric,
  notes         text,
  created_at    timestamptz default now()
);
create index contact_submissions_status_idx on public.contact_submissions(status);
create index contact_submissions_created_idx on public.contact_submissions(created_at desc);
alter table public.contact_submissions enable row level security;
