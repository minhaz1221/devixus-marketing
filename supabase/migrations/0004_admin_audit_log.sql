-- Migration 4 — admin_audit_log
create table public.admin_audit_log (
  id          bigserial primary key,
  admin_email text not null,
  action      text not null,         -- 'create' | 'update' | 'delete' | 'publish' | 'unpublish' | 'login' | 'logout'
  entity_type text not null,         -- 'case_study' | 'blog_post' | 'contact' | 'auth'
  entity_id   text,
  before_data jsonb,
  after_data  jsonb,
  ip_address  inet,
  created_at  timestamptz default now()
);
create index audit_log_admin_idx on public.admin_audit_log(admin_email, created_at desc);
create index audit_log_entity_idx on public.admin_audit_log(entity_type, entity_id);
alter table public.admin_audit_log enable row level security;
