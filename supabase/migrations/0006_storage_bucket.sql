-- Migration 6 — Storage policies for the `admin-media` bucket.
--
-- FIRST create the bucket in the Supabase Dashboard → Storage → New bucket:
--   Name: admin-media
--   Public: yes
--   File size limit: 10MB
--   Allowed MIME types: image/jpeg, image/png, image/webp, image/avif, image/svg+xml
--
-- THEN run the policies below in the SQL Editor.

create policy "media_public_read"
  on storage.objects for select
  using (bucket_id = 'admin-media');

create policy "media_admin_write"
  on storage.objects for insert
  with check (bucket_id = 'admin-media' and public.is_admin());

create policy "media_admin_update"
  on storage.objects for update
  using (bucket_id = 'admin-media' and public.is_admin());

create policy "media_admin_delete"
  on storage.objects for delete
  using (bucket_id = 'admin-media' and public.is_admin());
