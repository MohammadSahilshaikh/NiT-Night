-- Run once on a project you control. No secret/service key required.
create table if not exists public.nit_workspace(user_id uuid primary key references auth.users(id) on delete cascade, payload jsonb not null default '{}'::jsonb, updated_at timestamptz default now(), check(octet_length(payload::text)<1000000));
create table if not exists public.nit_admins(user_id uuid primary key references auth.users(id) on delete cascade);
create table if not exists public.nit_content(id uuid primary key default gen_random_uuid(), department text not null check(department in ('CE','CSE','IT','ME')), kind text not null check(kind in ('paper','subject','question')), title text not null check(length(title)<=300), body jsonb not null, created_at timestamptz default now());
create table if not exists public.nit_ai_usage(user_id uuid references auth.users(id) on delete cascade, day date not null, calls int not null default 0, primary key(user_id,day));
create table if not exists public.nit_attempts(user_id uuid references auth.users(id) on delete cascade, test_id text not null, score int not null, total int not null, answers jsonb not null, submitted_at timestamptz default now(), primary key(user_id,test_id));
alter table public.nit_workspace enable row level security;
alter table public.nit_admins enable row level security;
alter table public.nit_content enable row level security;
alter table public.nit_ai_usage enable row level security;
alter table public.nit_attempts enable row level security;
create policy nit_own_workspace on public.nit_workspace for all to authenticated using(user_id=auth.uid()) with check(user_id=auth.uid());
create policy nit_own_admin on public.nit_admins for select to authenticated using(user_id=auth.uid());
create policy nit_read_content on public.nit_content for select to authenticated using(true);
create policy nit_edit_content on public.nit_content for all to authenticated using(exists(select 1 from public.nit_admins where user_id=auth.uid())) with check(exists(select 1 from public.nit_admins where user_id=auth.uid()));
create policy nit_read_attempt on public.nit_attempts for select to authenticated using(user_id=auth.uid());
revoke all on public.nit_admins,public.nit_ai_usage,public.nit_attempts from anon,authenticated;
grant select on public.nit_admins,public.nit_attempts to authenticated;
grant select,insert,update,delete on public.nit_workspace,public.nit_content to authenticated;
create or replace function public.nit_ai_quota() returns boolean language plpgsql security definer set search_path='' as $$
declare n integer; uid uuid:=auth.uid(); begin
 if uid is null then return false; end if;
 insert into public.nit_ai_usage(user_id,day,calls) values(uid,current_date,1) on conflict(user_id,day) do update set calls=public.nit_ai_usage.calls+1 where public.nit_ai_usage.calls<15 returning calls into n;
 return n is not null;
end $$;
revoke all on function public.nit_ai_quota() from public;grant execute on function public.nit_ai_quota() to authenticated;
-- One-time sample exam. Answers are also available in unlimited practice, so this is not a proctored exam.
create or replace function public.nit_submit_sample(p_test text,p_answers jsonb) returns jsonb language plpgsql security definer set search_path='' as $$
declare uid uuid:=auth.uid(); k int[]:=array[2,1,1,2,1,2,0,3,0,1]; s int:=0; i int; v int; begin
 if uid is null then raise exception 'Sign in required'; end if;
 if p_test not in ('CE|CS(CE)301','ME|CS(ME)301') then raise exception 'Unknown test'; end if;
 if jsonb_typeof(p_answers)<>'object' then raise exception 'Invalid answers'; end if;
 for i in 0..9 loop
   v:=(p_answers->>i::text)::int; if v is null or v<0 or v>3 then raise exception 'Incomplete answers'; end if;
   if v=k[i+1] then s:=s+1; end if;
 end loop;
 insert into public.nit_attempts(user_id,test_id,score,total,answers) values(uid,p_test,s,10,p_answers);
 return jsonb_build_object('score',s,'total',10,'answers',p_answers);
end $$;
revoke all on function public.nit_submit_sample(text,jsonb) from public;grant execute on function public.nit_submit_sample(text,jsonb) to authenticated;
-- After owner creates account: insert into public.nit_admins(user_id) values ('YOUR-AUTH-USER-UUID');
