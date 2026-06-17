create table if not exists public.timeline_entries (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text unique,
  event_date date,
  date_precision text not null default 'exact'
    check (date_precision in ('exact', 'month', 'year', 'era', 'chapter')),
  era text,
  summary text not null,
  story text,
  featured_image_url text,
  gallery_image_urls text[] not null default '{}',
  audio_memory_url text,
  quote text,
  tags text[] not null default '{}',
  featured boolean not null default false,
  published boolean not null default false,
  status text not null default 'draft'
    check (status in ('draft', 'published')),
  sort_year integer,
  sort_month integer check (sort_month is null or sort_month between 1 and 12),
  sort_day integer check (sort_day is null or sort_day between 1 and 31),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists timeline_entries_status_sort_idx
  on public.timeline_entries (status, sort_year, sort_month, sort_day, created_at);

create index if not exists timeline_entries_featured_idx
  on public.timeline_entries (featured)
  where featured = true;

alter table public.timeline_entries enable row level security;

drop policy if exists "Published timeline entries are public" on public.timeline_entries;
create policy "Published timeline entries are public"
  on public.timeline_entries
  for select
  using (status = 'published' and published = true);

drop policy if exists "Authenticated users manage timeline entries" on public.timeline_entries;
create policy "Authenticated users manage timeline entries"
  on public.timeline_entries
  for all
  to authenticated
  using (true)
  with check (true);

create or replace function public.set_timeline_entries_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  new.published = new.status = 'published';
  return new;
end;
$$;

drop trigger if exists set_timeline_entries_updated_at on public.timeline_entries;
create trigger set_timeline_entries_updated_at
  before insert or update on public.timeline_entries
  for each row
  execute function public.set_timeline_entries_updated_at();
