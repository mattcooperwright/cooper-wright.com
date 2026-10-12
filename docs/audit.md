# Repository audit

Read-only audit of `mattcooperwright/cooper-wright.com`, taken from `main` at commit `5234afc4` (2026-04-01). No code was changed. This file is the only addition.

One correction to the brief up front, because it changes several answers below: this is not a Next.js project. It is a Vite + React single-page app exported from Figma Make (`package.json` is still named `@figma/my-make-file`), with client-side routing from React Router and deployment on Vercel. There is no `next` package, no `app/` or `pages/` directory in the Next.js sense, and no page registry.

## 1. Pages

There are four routes plus a catch-all. All of them are declared by hand in `src/app/App.tsx` inside a `<BrowserRouter>`. Navigation links are declared separately, also by hand, in `src/app/components/Menu.tsx`.

| Slug / route | Component | Source file | Lines | Route declared | Menu entry |
|---|---|---|---|---|---|
| `/` | `HomePage` (local function) | `src/app/App.tsx` | 113 (whole file) | `App.tsx:97` | "More" links here (`Menu.tsx:26`) |
| `/sitting-in-a-room` | `IAmSittingInARoom` (named export) | `src/app/pages/IAmSittingInARoom.tsx` | 568 | `App.tsx:100` | "Sitting in a Room" (`Menu.tsx:23`) |
| `/making-is-thinking` | `MakingIsThinking` (named export) | `src/app/pages/MakingIsThinking.tsx` | 424 | `App.tsx:103` | "Making is Thinking" (`Menu.tsx:24`) |
| `/cynefin-for-designers` | `Article` (default export, imported as `Cynefin`) | `src/app/pages/Cynefin.tsx` | 264 | `App.tsx:106` | "Cynefin for Designers" (`Menu.tsx:25`) |
| `*` (anything else) | `HomePage` | `src/app/App.tsx` | | `App.tsx:109` | none |

**Registry.** There is no registry, manifest or config listing pages. The route table in `App.tsx` and the `menuItems` array in `Menu.tsx` are the only two places pages are listed, and nothing keeps them in sync.

Observations on the pages:

- `Menu.tsx:27` links "Stuff soon" to `/contact.html`. No such route or file exists, so the Vercel rewrite serves `index.html` and the `*` route renders the home page.
- The `Menu` component is only rendered on the home page. The three content pages have no shared navigation back.
- `src/app/routes.tsx` (9 lines) builds a second router with `createBrowserRouter` that only knows about `/sitting-in-a-room`. Its own comment says it is "kept for reference but not wired up". It is dead code.
- Unknown URLs render the home page rather than a 404, so broken links fail silently.
- Every page sets its own fonts. `Cynefin.tsx` and `MakingIsThinking.tsx` describe themselves as standalone drop-in components and carry their own tokens and font imports. The home page uses `src/styles/home-page.css` for BR Cobane. Global fonts are in `src/styles/fonts.css`. The page `<title>` is "Personal One Page Website" for every route (`index.html:6`); no page sets `document.title`.
- `src/app/components/ui/` holds 48 shadcn/ui files (46 components plus two helpers) and `src/app/components/figma/ImageWithFallback.tsx` holds one more. None of the pages, `App.tsx` or `Menu.tsx` import any of them. They are unused Figma Make scaffolding.

## 2. Markdown and instruction files

| File | Lines | Summary |
|---|---|---|
| `README.md` | 10 | Figma Make boilerplate: names the original Figma file and says to run `npm i` then `npm run dev`. |
| `ATTRIBUTIONS.md` | 3 | Figma Make boilerplate crediting shadcn/ui (MIT) and Unsplash photos. |
| `guidelines/Guidelines.md` | 61 | Unedited Figma Make template. Line 1 reads "Add your own guidelines here" and the remaining 60 lines are an HTML comment with example rules. It contains no project rules. |
| `docs/audit.md` | this file | Added by this audit. |

Missing, stated plainly:

- **No `CLAUDE.md`** anywhere in the repo.
- **No `SKILL.md`** and no `.claude/skills/` directory. The only thing under `.claude/` is `.claude/worktrees/.DS_Store`, a macOS metadata file.
- **No `docs/` directory** existed before this audit.
- No `CONTRIBUTING.md`, no PR template, no `.github/` directory, no `AGENTS.md`.
- The README does not mention the routes, how to add a page, the build command, or Vercel.

## 3. How a new page gets added, and what is enforced

### The process as the code implies it

Nothing documents this. Reading the three pages that have been added, the pattern is:

1. Create a component in `src/app/pages/`. Existing pages are self-contained single files that import only from `react`, with inline styles or Tailwind classes and their own font `@import`s.
2. Import it in `src/app/App.tsx` and add a `<Route path="/your-slug" element={<YourPage />} />` above the `*` route.
3. Add `{ label, to: '/your-slug' }` to `menuItems` in `src/app/components/Menu.tsx` if it should appear in the menu.
4. Push. Vercel builds it. `vercel.json` rewrites every path to `/index.html`, so the new route works on direct load and refresh without further config.

The git history matches this. `6c4575ef` ("Integrate making-is-thinking page with routing") and `2b840eaf` ("adding cynefin for the first time") each touch the page file, `App.tsx` and `Menu.tsx`.

### Rules enforced in code

There are none that a tool enforces. Specifically:

| Possible enforcement | Present? |
|---|---|
| ESLint / Prettier / Biome config | No |
| `tsconfig.json` (type-checking) | No. Vite strips types with esbuild and never type-checks. `typescript` is not installed. |
| Test runner or tests | No |
| `lint`, `test` or `typecheck` npm scripts | No. Only `dev` and `build`. |
| Git hooks (Husky, lint-staged, `.git/hooks` beyond samples) | No |
| CI (`.github/workflows`) | No |
| CODEOWNERS or branch protection files | No (branch protection, if any, lives in GitHub settings and is not visible from the repo) |
| Locked or read-only files | No |
| `.gitignore` | No |

The only "rules" are comments, which nothing checks:

- `vite.config.ts:8-9`: the React and Tailwind plugins "are both required for Make, even if Tailwind is not being actively used – do not remove them".
- `vite.config.ts:20`: "Never add .css, .tsx, or .ts files to" `assetsInclude`.
- `postcss.config.mjs`: says not to add `tailwindcss` or `autoprefixer` because `@tailwindcss/vite` handles them.
- `package.json` `pnpm.overrides` pins `vite` to 6.3.5. This only applies under pnpm. The repo has a `package-lock.json` (npm), so the override has no effect in practice.

### Committed build and dependency output

These are not rules, but they affect anyone adding a page:

- **`node_modules/` is committed**: 64,916 files, about 410 MB on disk, added in commit `d9f0b5c7` ("trying"). It makes up almost all of the repo's 65,008 tracked files. With no `.gitignore`, any `npm install` will produce a large diff.
- **`dist/` is committed and stale.** It was last changed in `9004e848` (2026-03-26). The built JS contains `/sitting-in-a-room` and `/making-is-thinking` but not `/cynefin-for-designers`. Vercel runs its own build, so this is unlikely to affect the live site, but anyone serving `dist/` directly would get an old version.
- **`.DS_Store` files are committed** at the root, `src/`, `src/app/` and `.claude/worktrees/`.

## 4. Framework and dependency versions

| Item | Value | Source |
|---|---|---|
| Framework | Vite + React SPA (not Next.js) | `package.json`, `vite.config.ts` |
| Router | React Router v7, declarative `<BrowserRouter>` / `<Routes>` (not the data router) | `App.tsx:1`, `App.tsx:94` |
| Next.js | Not used, not installed | |
| Build tool | `vite` 6.3.5 | devDependency, pinned |
| React plugin | `@vitejs/plugin-react` 4.7.0 | devDependency |
| Tailwind | `tailwindcss` 4.1.12 with `@tailwindcss/vite` 4.1.12 | devDependencies |
| React / React DOM | 18.3.1 | Listed only as optional `peerDependencies`, not `dependencies`. Installed via the lockfile. |
| `react-router` | 7.13.0 | exact pin |
| `react-router-dom` | `^7.13.2` (7.13.2 installed) | caret range, the only unpinned dependency; also not imported anywhere |
| `motion` | 12.23.24 | |
| `lucide-react` | 0.487.0 | used only by unused `ui/` components |
| `@mui/material`, `@mui/icons-material` | 7.3.5 | not imported anywhere |
| `@emotion/react` / `@emotion/styled` | 11.14.0 / 11.14.1 | not imported anywhere |
| Radix UI (`@radix-ui/react-*`) | 26 packages, 1.1.x to 2.2.x | imported only by unused `ui/` components |
| Others | `recharts` 2.15.2, `react-hook-form` 7.55.0, `date-fns` 3.6.0, `sonner` 2.0.3, `vaul` 1.1.2, `cmdk` 1.1.1, `embla-carousel-react` 8.6.0, `react-day-picker` 8.10.1, `next-themes` 0.4.6, `react-dnd` 16.0.1, `react-slick` 0.31.0, `react-responsive-masonry` 2.7.1, `canvas-confetti` 1.9.4, `react-popper` 2.3.0, `@popperjs/core` 2.11.8, `input-otp` 1.4.2, `react-resizable-panels` 2.1.7, `class-variance-authority` 0.7.1, `clsx` 2.1.1, `tailwind-merge` 3.2.0, `tw-animate-css` 1.3.8 | Figma Make defaults; the live pages import none of them |
| TypeScript | Not a dependency, no `tsconfig.json` | |
| Package manager | npm (`package-lock.json`), though `package.json` has a pnpm-only block | |

The code the site actually runs imports only `react`, `react-dom/client` and `react-router`. Every other runtime dependency is unused by the four pages.

## 5. Environment variables and secrets

No source or config file reads environment variables. A search of `src/`, the root config files and `index.html` for `process.env`, `import.meta.env`, `VITE_`, `NEXT_PUBLIC`, `API_KEY`, `SECRET` and `TOKEN` found nothing. There is no `.env`, `.env.example` or `.env.local` file, and no `.gitignore` that would hide one. `vercel.json` contains only the SPA rewrite and no `env` or `build.env` block.

The site does make runtime requests to third parties. These are not secrets, but they are external dependencies:

- `fonts.cdnfonts.com` for Neue Haas Grotesk Display Pro, Gasoek One, Sofia Sans, Plantin MT Pro, BR Segma (`src/styles/fonts.css`), BR Cobane (`src/styles/home-page.css`), and again for Gasoek One and Rethink Sans inside `MakingIsThinking.tsx`.
- `fonts.googleapis.com` for DM Sans (`src/styles/fonts.css:2`).

If cdnfonts.com is slow or down, every page falls back to system fonts. Some of these are commercial typefaces (Neue Haas Grotesk, Plantin MT Pro) served from a free mirror, which is a licensing question worth checking.

Any environment variables set in the Vercel project dashboard are outside the repo and could not be audited.

## 6. Recent git history

All 35 commits on `main` are by Matt Cooper-Wright (`mcooper@ideo.com`), between 2026-03-23 and 2026-04-01. `main` and `origin/main` point at the same commit.

**How changes arrived.** Of the 28 commits on `main`'s first-parent line, 24 are ordinary commits pushed straight to `main`, three are GitHub pull-request merges, and one is a local merge of `origin/main` back into a local `main` (`24455a3f`). Seven commits came in through branches.

| PR | Branch | Merged | What it brought |
|---|---|---|---|
| #1 (`33db197c`) | `claude/infallible-bartik` | 2026-03-26 | `cc49e066` routing fix for `/sitting-in-a-room` |
| #2 (`51ef96d0`) | `claude/infallible-bartik` | 2026-03-26 | SPA fallback fix, font-loading changes, BR Cobane on the home page (3 commits) |
| #3 (`69b2f220`) | `claude/infallible-bartik` | 2026-03-29 | `/making-is-thinking` route plus a replacement Figma Make component (2 commits) |

All three PRs reused the same branch name. The commit messages ("Claude Save me", "Integrate making-is-thinking page with routing") suggest these were Claude Code sessions.

**Direct pushes to main.** Yes, and they are the norm. Everything since PR #3 went straight to `main`: the Cynefin page (`2b840eaf`), its syntax fix (`b854bce5`, "Fix Cynefin component syntax errors"), and the five most recent commits. The early setup was also direct, including the commit that added all of `node_modules` (`d9f0b5c7`) and the Vercel config (`a9d7b35a` "vercely"). Messages are mostly short and informal ("Tweaks", "wetg", "realy change4s", "nearly"), so the history alone says little about what changed.

The `b854bce5` syntax fix is the clearest cost of this setup: with no type-check, lint or CI, a broken page reached `main` and was only caught afterwards.

## 7. Secrets and confidential-content scan (full history)

Scope: every commit on every branch (`main`, `claude/infallible-bartik`, `claude/repository-audit-kojgrf`), 37 commits including this audit. That covers 152 unique project file versions, 40,031 unique `node_modules` file versions, and the contents of two zip archives that were committed and later deleted. No secret values are reproduced here.

### Method

- **File names.** Every path that has ever existed in history was checked for `.env*`, `*.pem`, `*.key`, `*.p12`, `*.pfx`, `id_rsa`/`id_ed25519`, `*.keystore`, `.npmrc`, `.netrc`, `.vercel/`, and names containing `credentials`, `secret` or `service-account`. The same check ran on the file lists inside both zips.
- **File contents.** Every blob was matched against patterns for private key blocks, AWS access key IDs, GitHub, Slack, Stripe, npm, Vercel and Figma tokens, Google API keys, OpenAI and Anthropic keys, JWTs, URLs with embedded credentials, and generic `api_key / secret / token / password = "..."` assignments. Zip members were extracted in memory and scanned the same way. A keyword search (`password`, `secret`, `api key`, `token`, `bearer`, `authorization`) was run separately over project files on every commit.
- **Names.** Commit subjects and bodies were read in full. Page text in every historical version of every `.tsx`, `.md` and `.html` file (excluding shadcn components and Figma boilerplate) was reduced to its capitalised terms and reviewed by hand, with hits read in context.
- **Metadata.** All committed `.DS_Store` files were decoded for the file and folder names they record. Email and phone-number patterns were searched across project files.

### Results: secrets

| Check | Finding |
|---|---|
| `.env` or key files ever committed | None. The only path match is `node_modules/prop-types/lib/ReactPropTypesSecret.js`, a React library file whose name contains "Secret"; it holds no credential. |
| API keys, tokens, private keys (project files) | None |
| API keys, tokens, private keys (`node_modules`) | None |
| Inside `Personal One Page Website.zip` (added `37075ec0`, deleted `b4da7038`) | None. 15 Figma Make files plus shadcn components; no env or key files. |
| Inside `One Page Website Design.zip` (added `b8562bcc`, deleted `1dbed495`) | None. Same structure as above. |
| Keyword search | Only false positives: the word "tokens" in `guidelines/Guidelines.md:26` (template prose) and a `// Tokens` comment heading in `src/app/pages/Cynefin.tsx:13` (design tokens). |
| `.DS_Store` contents | Only project folder names (`src`, `guidelines`, `sitting-in-a-room`, `making-is-thinking`, `Making is thinking`, `One Page Website Design`, `Personal One Page Website`, `infallible-bartik`). No personal paths, usernames or unrelated file names. |
| Emails and phone numbers in files | None in project files. The only matches for phone-like patterns are SVG path data. The author email in commit metadata is a work address (see below). |

Because nothing was found, no credential needs rotating and no history rewrite is needed on secrets grounds.

### Results: client and confidential names

No client is named anywhere in page text, file names or commit messages. Two passages describe client work in anonymised form and are published on the live site:

| File | Introduced in | Type | Detail |
|---|---|---|---|
| `src/app/pages/Cynefin.tsx:134` | `2b840eaf` on `main` (2026-03-31); also `bbccf3f4` on `claude/infallible-bartik` | Anonymised client engagement | Describes "a visionary leader in a Pharma company" who "came to IDEO" about slow decision making and a culture of perfectionism. Industry and the nature of the problem are disclosed; the company is not named. |
| `src/app/pages/MakingIsThinking.tsx:251` | `6a645e6f` and `6c4575ef` (2026-03-27); also in the deleted `making-is-thinking/` folder and `making-is-thinking/src/imports/making-is-thinking.md` | Anonymised project description | Describes "a team working on the future of commercial vehicles" exploring in-vehicle experiences, and names the tool used (Flora.ai). The client is not named. |

Both read as deliberate, publishable case-study language. Whether the sector-level detail is cleared for publication under the relevant client agreements is a judgement for the author, not something this scan can decide. If either engagement is under a strict NDA, the industry plus project-topic combination may be enough to identify the client to someone in that sector.

Other names found, none of them confidential:

- **IDEO** (employer) appears on the home page (`src/app/App.tsx:78`) and in page prose ("At IDEO", "Every project I've worked on at IDEO").
- **Third-party products and published sources**: Claude, ChatGPT, Flora.ai, Figma Make, Dave Snowden and the 2007 HBR article on Cynefin, the composer Lucier (referenced on the Sitting in a Room page), and two Medium articles linked from `MakingIsThinking.tsx`.
- **Commit messages** contain no client, project or person names. The most specific are the PR branch name `claude/infallible-bartik` and the folder names above.

### Results: personal data in git metadata

Every commit carries the author identity `Matt Cooper-Wright <mcooper@ideo.com>`, a work address. The repository is **private** on GitHub, so this is visible only to people with repo access. It would become public if the repo were ever made public. This audit file also repeats the address in section 6.

### Not covered

- Secrets stored outside git: the Vercel project's environment variables, GitHub Actions secrets (none are referenced), and local `.env` files that were never committed.
- Images and binary assets other than the two zips (there are none in project history apart from `.DS_Store`).
- Minified bundles in `dist/` were included in the pattern scan but cannot be reviewed for names by hand; they are built from the same source files reviewed above.

## Summary of gaps

In rough order of how much they matter:

1. `node_modules/` (about 410 MB) and a stale `dist/` are committed, and there is no `.gitignore`.
2. Nothing checks code before it lands on `main`: no lint, no type-check, no CI, no tests, and most changes are pushed directly.
3. No `CLAUDE.md` or contributor docs, and `guidelines/Guidelines.md` is an empty template. How to add a page lives only in the code.
4. Pages are listed in two places (`App.tsx`, `Menu.tsx`) with nothing keeping them aligned. The menu has a dead `/contact.html` link, and `src/app/routes.tsx` is unused.
5. Most dependencies, and the whole `components/ui/` folder, are unused Figma Make scaffolding. React is only a peer dependency.
6. Fonts load from a third-party mirror, including commercial faces.
7. No secrets in history. Two anonymised client references (a pharma company, a commercial-vehicles project) are published on live pages and should be confirmed as cleared.
