-- Migration 5 — admin_email setting + auto-update trigger + RLS policies
alter database postgres set app.admin_email = 'minhaz12219990@gmail.com';

create or replace function public.touch_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end $$;

create trigger touch_case_studies before update on public.case_studies
  for each row execute function public.touch_updated_at();
create trigger touch_blog_posts before update on public.blog_posts
  for each row execute function public.touch_updated_at();

-- Helper: is current user the admin?
create or replace function public.is_admin()
returns boolean language sql stable as $$
  select coalesce(auth.jwt() ->> 'email', '') = current_setting('app.admin_email', true);
$$;

-- case_studies policies
create policy "cs_public_read"  on public.case_studies for select using (published = true);
create policy "cs_admin_all"    on public.case_studies for all   using (public.is_admin()) with check (public.is_admin());

-- blog_posts policies
create policy "bp_public_read"  on public.blog_posts for select using (published = true);
create policy "bp_admin_all"    on public.blog_posts for all   using (public.is_admin()) with check (public.is_admin());

-- contact_submissions: public insert, admin read/update/delete
create policy "cs_public_insert" on public.contact_submissions for insert with check (true);
create policy "cs_admin_select"  on public.contact_submissions for select using (public.is_admin());
create policy "cs_admin_update"  on public.contact_submissions for update using (public.is_admin()) with check (public.is_admin());
create policy "cs_admin_delete"  on public.contact_submissions for delete using (public.is_admin());

-- audit_log: admin read, server-only insert (via service role — RLS bypassed)
create policy "al_admin_select" on public.admin_audit_log for select using (public.is_admin());
