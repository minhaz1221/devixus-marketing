-- Migration 2 — blog_posts
create table public.blog_posts (
  id            uuid primary key default gen_random_uuid(),
  slug          text unique not null,
  title         text not null,
  excerpt       text,
  content_mdx   text not null,
  cover_image   text,
  author        text default 'Minhaz',
  tags          text[] default array[]::text[],
  published     boolean default false,
  published_at  timestamptz,
  reading_minutes integer,
  seo_title       text,
  seo_description text,
  og_image        text,
  created_at    timestamptz default now(),
  updated_at    timestamptz default now()
);
create index blog_posts_slug_idx on public.blog_posts(slug);
create index blog_posts_published_idx on public.blog_posts(published, published_at desc);
alter table public.blog_posts enable row level security;
