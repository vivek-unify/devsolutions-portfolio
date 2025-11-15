-- Create clients table to store client requirement submissions
create table if not exists public.clients (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz default now() not null,
  
  -- Client Information
  full_name text not null,
  email text not null,
  phone text,
  company_name text,
  
  -- Project Requirements
  project_title text not null,
  project_description text not null,
  domain text[] not null, -- Array: frontend, backend, fullstack, ai, mobile, devops, other
  budget_range text,
  timeline text,
  additional_requirements text,
  
  -- Status tracking
  status text default 'new' not null check (status in ('new', 'contacted', 'poc-in-progress', 'poc-delivered', 'accepted', 'completed', 'rejected')),
  admin_notes text,
  
  -- Metadata
  updated_at timestamptz default now() not null
);

-- Create index for faster queries
create index if not exists clients_status_idx on public.clients(status);
create index if not exists clients_created_at_idx on public.clients(created_at desc);
create index if not exists clients_email_idx on public.clients(email);

-- Enable Row Level Security
alter table public.clients enable row level security;

-- Policy: Anyone can insert (submit requirements)
create policy "clients_insert_public"
  on public.clients for insert
  with check (true);

-- Policy: Only authenticated admin users can view all clients
create policy "clients_select_admin"
  on public.clients for select
  using (auth.role() = 'authenticated');

-- Policy: Only authenticated admin users can update
create policy "clients_update_admin"
  on public.clients for update
  using (auth.role() = 'authenticated');

-- Policy: Only authenticated admin users can delete
create policy "clients_delete_admin"
  on public.clients for delete
  using (auth.role() = 'authenticated');

-- Add trigger to update updated_at timestamp
create or replace function public.handle_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger clients_updated_at
  before update on public.clients
  for each row
  execute function public.handle_updated_at();
