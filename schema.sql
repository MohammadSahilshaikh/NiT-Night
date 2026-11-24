-- Proposed future schema; this local app does not connect to it yet.
-- Execute only in a project you control, after review.
create table if not exists public.student_progress (
  user_id uuid not null references auth.users(id) on delete cascade,
  topic_id text not null, completed boolean not null default false,
  updated_at timestamptz not null default now(), primary key(user_id,topic_id)
);
create table if not exists public.student_notes (
  user_id uuid not null references auth.users(id) on delete cascade,
  question_id text not null, body text not null default '', drawing_path text,
  updated_at timestamptz not null default now(), primary key(user_id,question_id)
);
create table if not exists public.graded_attempts (
  user_id uuid not null references auth.users(id) on delete cascade,
  test_id text not null, score integer not null check(score>=0), total integer not null check(total>0 and score<=total),
  submitted_at timestamptz not null default now(), primary key(user_id,test_id)
);
alter table public.student_progress enable row level security;
alter table public.student_notes enable row level security;
alter table public.graded_attempts enable row level security;
create policy "own progress" on public.student_progress for all to authenticated using(auth.uid()=user_id) with check(auth.uid()=user_id);
create policy "own notes" on public.student_notes for all to authenticated using(auth.uid()=user_id) with check(auth.uid()=user_id);
create policy "read own graded attempts" on public.graded_attempts for select to authenticated using(auth.uid()=user_id);
-- No direct browser writes for graded_attempts. Implement trusted server scoring.
revoke insert,update,delete on public.graded_attempts from anon, authenticated;
