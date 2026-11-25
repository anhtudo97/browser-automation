# browser-automation

Next.js (App Router) + React + Tailwind CSS v4 + shadcn/ui, written in TypeScript.

## Getting started

Requirements: Node.js 20.9+ and npm.

```bash
npm install   # also installs the Husky git hooks via the "prepare" script
npm run dev   # http://localhost:3000
```

## Scripts

| Script                 | Description                                  |
| ---------------------- | -------------------------------------------- |
| `npm run dev`          | Start the dev server                         |
| `npm run build`        | Production build                             |
| `npm run start`        | Serve the production build                   |
| `npm run lint`         | ESLint (`eslint-config-next`)                |
| `npm run format`       | Format `**/*.{ts,tsx}` with Prettier         |
| `npm run format:check` | Check formatting without writing (used by CI) |
| `npm run typecheck`    | `tsc --noEmit`                               |

## Project structure

```
app/            Next.js routes, layout, global styles
components/     App components (theme-provider, ...)
components/ui/  shadcn/ui components
hooks/          React hooks
lib/            Utilities (e.g. cn)
```

Path alias: `@/*` maps to the project root.

## shadcn/ui

Add components:

```bash
npx shadcn@latest add button
```

Components are placed in `components/ui`. Use them like this:

```tsx
import { Button } from "@/components/ui/button"
```

## Code quality

- **Prettier**: config in `.prettierrc` (no semicolons, double quotes, LF line endings, Tailwind class sorting).
- **Commit messages**: [Conventional Commits](https://www.conventionalcommits.org/), enforced by commitlint through the Husky `commit-msg` hook (`.husky/commit-msg`, `commitlint.config.js`). Example: `feat: add login page`.
- **CI**: `.github/workflows/ci.yml` runs `format:check` and `typecheck` on pushes to `main`/`master` and on pull requests. Run both locally before pushing.
- **Security**: `.github/workflows/security.yml` runs CodeQL, `npm audit` (prod deps, high+), dependency review (PRs) and Gitleaks on push, PRs and weekly. Dependabot (`.github/dependabot.yml`) opens weekly update PRs for npm and GitHub Actions.
- **Line endings**: `.gitattributes` forces LF so Prettier results match between Windows and CI.

## Editor setup (VS Code)

`.vscode/` is committed. It enables Prettier format-on-save, ESLint fix-on-save and the workspace TypeScript version. Install the recommended extensions when VS Code prompts (Prettier, ESLint, Tailwind CSS IntelliSense).
