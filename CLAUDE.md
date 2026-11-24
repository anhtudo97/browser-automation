@AGENTS.md

# Project guide

Next.js App Router + React + Tailwind CSS v4 + shadcn/ui, TypeScript, npm. See [README.md](README.md) for setup and structure.

## Commands

- `npm run dev` / `build` / `start`: Next.js
- `npm run lint`: ESLint
- `npm run format`: Prettier write (`**/*.{ts,tsx}`)
- `npm run format:check`: Prettier check (CI)
- `npm run typecheck`: `tsc --noEmit` (CI)

Before finishing a change, run `npm run format:check` and `npm run typecheck`. Both must pass; CI runs them on every PR.

## Conventions

- Prettier config is in `.prettierrc`: no semicolons, double quotes, LF, Tailwind class sorting (`cn`, `cva`). Don't hand-format; run `npm run format`.
- Use the `@/*` import alias (e.g. `@/components/ui/button`).
- shadcn/ui components live in `components/ui`; add new ones with `npx shadcn@latest add <name>`. Use `cn` from `lib/utils.ts` for class merging.
- Package manager is npm. Keep `package-lock.json` committed; don't introduce other lockfiles.
- Line endings are LF (`.gitattributes`). Don't commit CRLF.

## Commits

- Conventional Commits, enforced by commitlint via the Husky `commit-msg` hook: `type(scope): subject` with types such as `feat`, `fix`, `docs`, `refactor`, `test`, `chore`.
- Husky hooks install via the `prepare` script on `npm install`. Never bypass with `--no-verify`.
- Don't add AI/tool attribution to commit messages.
- There is no `pre-commit` hook and no `test` script yet.

## Editor

`.vscode/settings.json` sets Prettier as formatter with format-on-save and ESLint fix-on-save. Keep it in sync with `.prettierrc` and `eslint.config.mjs` when those change.
