# NiT Night V3 — local preview and private deployment checklist

This is an independent student project. No external deployment or database migration has been performed. Before hosting any question paper, obtain permission to share it. A public Vercel URL exposes static PDFs even if a UI login is present. Keep the archive local unless authorized; use deployment-level access protection for any private preview (verify that direct PDF URLs are also protected). If unavailable, remove the papers before deploying. Do not use real student data before validating access controls. Any paid external services/account configuration must be managed by an eligible account owner with appropriate adult involvement.

## 1. Local preview (no cloud keys)
Extract ZIP, open NiT-Night folder in VS Code. Run `py -m http.server 8000 --bind 127.0.0.1`. Visit `http://localhost:8000`. The original local features work without a cloud configuration; cloud login/AI need the API routes running on a Vercel-compatible server.

## 2. Supabase
In the project you control, run `schema-v3.sql` once in SQL Editor after reviewing. Enable email/password authentication and configure allowed site/redirect URLs. Create a test account using the website after deployment and verify email if required. In Auth > Users copy the test owner's user UUID and run `insert into public.nit_admins(user_id) values ('YOUR-AUTH-USER-UUID');` using the SQL Editor. Never grant admin to every student. Sign out and back in to reload the role. Never expose a service role key. The workspace is saved per user, with RLS. Sync is last-write-wins, not a collaborative merge; use one editing device at a time. Cloud sign-in is session-in-memory: sign in again after a reload. Custom PDF uploads remain browser-local; admin can share approved HTTPS links. No authenticated upload bucket or production moderation workflow is included.

## 3. Vercel
Use a private repository and review permissions first. Import as an Other/static project, root folder NiT-Night. This project includes API functions in api/ and vercel.json. Configure `SUPABASE_URL`, `SUPABASE_PUBLISHABLE_KEY`, `OPENAI_API_KEY`, and `OPENAI_MODEL` in environment variables (example names in .env.example). The AI model must be enabled for the account. Revoke the previously exposed OpenAI key and use a fresh one server-side only. Do not paste credentials into chats or Git. Apply deployment-level access protection BEFORE making a preview available; never deploy the bundled archive publicly without permission. Deploy, then update Supabase site URL and redirect allowlist. Do not enable public registration or allow real student data until security, privacy, and quota testing pass.

## 4. Verify with test accounts
- Two distinct accounts: complete a topic and save a note in A; B must not see them. Sign in as A on another browser and verify sync. Sign out and verify local state is restored.
- Non-admin cannot insert/delete shared content via REST; admin can add a subject, question with model answer, and approved paper URL; verify other test users can read them. Test direct PDF URL protection separately.
- C sample quiz: submit once, verify score, sign in again, retry and ensure database unique constraint rejects second submission. Practice remains repeatable and does not affect the cloud graded score. This is a learning quiz, not a secure/proctored exam; sample answers are visible in practice. Other subjects do not yet have scored exams.
- AI: test consent, logged-out denial, missing config, feedback, rate limit (15 calls/user/day) and provider failures. Consider global spend limits, account abuse protections and privacy policy before wider release.
- Check mobile layouts, voice permissions, PDF reading, whiteboard, keyboard access. Browser tests here were blocked by environment; actual cloud tests not run.

## 5. Data status
41 unique papers from 2021–2023 plus the 2016 IT archive are bundled. 2024/2025 and incomplete prior-year coverage remain missing. CSE R25 official theory/lab roster and condensed topic outlines are included; detailed lab topics are pending. IT official R25 link found, but its PDF could not be read in the current environment; do not use historical IT papers as the R25 syllabus. CE R25 outlines remain; ME outline needs detailed verification. The question bank includes generic syllabus practice prompts and existing sample C quiz, not a complete question-specific solved bank or verified repetition counts. Admin can add reviewed content after cloud configuration. No guaranteed prediction of exam questions.

Official curriculum index: https://www.nit.ac.in/curriculum-syllabus.php
CSE R25: https://www.nit.ac.in/pdf/B.Tech_CSE_25.pdf (semester roster PDF page 5; theory summaries PDF pages 72–87)
IT R25: https://www.nit.ac.in/pdf/B.Tech_IT_25.pdf (link located, content not verified)
