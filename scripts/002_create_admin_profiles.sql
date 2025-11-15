-- Create admin profiles table
create table if not exists public.admin_profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  created_at timestamptz default now() not null,
  email text not null unique,
  full_name text,
  role text default 'admin' not null check (role in ('admin', 'super_admin'))
);

-- Enable Row Level Security
alter table public.admin_profiles enable row level security;

-- Policy: Admin users can view their own profile
create policy "admin_profiles_select_own"
  on public.admin_profiles for select
  using (auth.uid() = id);

-- Policy: Admin users can update their own profile
create policy "admin_profiles_update_own"
  on public.admin_profiles for update
  using (auth.uid() = id);

-- Create trigger to auto-create admin profile on signup
create or replace function public.handle_new_admin_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.admin_profiles (id, email, full_name)
  values (
    new.id,
    new.email,
    coalesce(new.raw_user_meta_data ->> 'full_name', null)
  )
  on conflict (id) do nothing;
  
  return new;
end;
$$;

drop trigger if exists on_auth_admin_user_created on auth.users;

create trigger on_auth_admin_user_created
  after insert on auth.users
  for each row
  execute function public.handle_new_admin_user();
