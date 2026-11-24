# NiT Night V2 — Local archive

## Run on Windows
Extract ZIP, open NiT-Night folder in VS Code, then run `py -m http.server 8000 --bind 127.0.0.1` in the terminal (or `python -m http.server 8000 --bind 127.0.0.1`). Visit http://localhost:8000 in Chrome. Ctrl+C stops the server.

## Archive
51 uploaded PDFs from 2021–2023, 8 exact duplicate copies excluded and 2 EE papers excluded. 41 distinct in-scope PDFs plus one 2016 IT archive bundle. 2024–25 pending. Subject matches are provisional, based on subject titles, not question-level syllabus verification. No original CE C-language paper identified. CSE/IT current syllabi are pending. Sample C tests remain samples.

## Cloud integration (not yet implemented)
1. Verify rights to share papers. Do not put bundled PDFs or confidential data in a public repository or public static website. If approved, move papers into private storage with authentication and signed URLs; exclude them from public build output.
2. Confirm Supabase URL and publishable key in the Connect dialog. Review schema.sql before executing. Implement authentication, per-user database sync and trusted server-side scoring before deploying.
3. Vercel environment variables must match the eventual server code. Set the project URL, publishable key and server-only OPENAI_API_KEY directly in your dashboard when ready. This static version does not consume environment variables. Revoke previously exposed secret keys; do not send replacements in chat or commit them to source.
4. Finish syllabus and question mapping, verify answer keys and test access isolation before any shared deployment. No external changes have been performed.
