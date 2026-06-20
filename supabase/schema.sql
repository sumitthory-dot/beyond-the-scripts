create extension if not exists "pgcrypto";

create table if not exists public.subscribers (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null unique,
  created_at timestamptz not null default now()
);

create table if not exists public.feedback (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  feedback text not null,
  created_at timestamptz not null default now()
);

create table if not exists public.contacts (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  message text not null,
  created_at timestamptz not null default now()
);

create table if not exists public.users (
  id uuid primary key references auth.users(id) on delete cascade,
  email text not null unique,
  full_name text,
  avatar_url text,
  role text not null default 'reader' check (role in ('reader', 'admin')),
  created_at timestamptz not null default now()
);

create table if not exists public.categories (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text not null unique,
  created_at timestamptz not null default now()
);

create table if not exists public.tags (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text not null unique,
  created_at timestamptz not null default now()
);

create table if not exists public.stories (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  description text not null,
  author text not null,
  cover_image text,
  category_id uuid references public.categories(id) on delete set null,
  tags text[] not null default '{}',
  reading_time text not null,
  featured boolean not null default false,
  published boolean not null default false,
  content text not null,
  chapters jsonb,
  series text,
  seo_title text,
  seo_description text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  published_at timestamptz
);

create table if not exists public.articles (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  description text not null,
  author text not null,
  cover_image text,
  category_id uuid references public.categories(id) on delete set null,
  tags text[] not null default '{}',
  reading_time text not null,
  featured boolean not null default false,
  published boolean not null default false,
  content text not null,
  article_type text not null check (article_type in ('business', 'startup', 'affiliate', 'ai_tools')),
  seo_title text,
  seo_description text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  published_at timestamptz
);

create table if not exists public.comments (
  id uuid primary key default gen_random_uuid(),
  article_id text not null,
  parent_id uuid references public.comments(id) on delete cascade,
  name text not null,
  comment text not null,
  created_at timestamptz not null default now()
);

create table if not exists public.bookmarks (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.users(id) on delete cascade,
  content_id uuid not null,
  content_type text not null check (content_type in ('story', 'article')),
  created_at timestamptz not null default now(),
  unique (user_id, content_id, content_type)
);

create table if not exists public.reading_history (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.users(id) on delete cascade,
  content_id uuid not null,
  content_type text not null check (content_type in ('story', 'article')),
  progress integer not null default 0 check (progress >= 0 and progress <= 100),
  updated_at timestamptz not null default now(),
  unique (user_id, content_id, content_type)
);

create table if not exists public.newsletter_logs (
  id uuid primary key default gen_random_uuid(),
  subscriber_id uuid references public.subscribers(id) on delete set null,
  email text not null,
  subject text not null,
  status text not null default 'queued' check (status in ('queued', 'sent', 'failed')),
  provider_id text,
  created_at timestamptz not null default now()
);

create index if not exists stories_search_idx on public.stories using gin (to_tsvector('english', title || ' ' || description || ' ' || content));
create index if not exists articles_search_idx on public.articles using gin (to_tsvector('english', title || ' ' || description || ' ' || content));
create index if not exists comments_article_id_idx on public.comments(article_id);

alter table public.subscribers enable row level security;
alter table public.feedback enable row level security;
alter table public.contacts enable row level security;
alter table public.users enable row level security;
alter table public.categories enable row level security;
alter table public.tags enable row level security;
alter table public.stories enable row level security;
alter table public.articles enable row level security;
alter table public.comments enable row level security;
alter table public.bookmarks enable row level security;
alter table public.reading_history enable row level security;
alter table public.newsletter_logs enable row level security;

create policy "Published stories are public" on public.stories for select using (published = true);
create policy "Published articles are public" on public.articles for select using (published = true);
create policy "Categories are public" on public.categories for select using (true);
create policy "Tags are public" on public.tags for select using (true);
create policy "Comments are public" on public.comments for select using (true);

create policy "Users can read own profile" on public.users for select using (auth.uid() = id);
create policy "Users can update own profile" on public.users for update using (auth.uid() = id);
create policy "Users manage own bookmarks" on public.bookmarks for all using (auth.uid() = user_id);
create policy "Users manage own reading history" on public.reading_history for all using (auth.uid() = user_id);
