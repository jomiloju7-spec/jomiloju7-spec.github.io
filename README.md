# jomiloju7-spec.github.io

Personal portfolio site for Oluwajomiloju Dare-Esan, built with Next.js and
deployed as a static site to GitHub Pages.

## Layout

```
.
├── site/                     Next.js source (this is what you edit)
│   ├── src/
│   │   ├── app/               App Router pages (/, /projects, sitemap, robots)
│   │   ├── components/        UI components, section components, sections/ui
│   │   ├── data/content.ts    <-- single source of truth for all site copy
│   │   └── lib/
│   └── public/                Static assets (favicon, resume.pdf, portrait.jpg)
├── lexicon/                   Vocabulary practice app, separate project
└── .github/workflows/deploy.yml   Builds `site/` and publishes to GitHub Pages
```

The Next.js source lives entirely under `site/`. Nothing is committed to the
repo root as pre-built static output — the GitHub Actions workflow builds it
fresh on every push to `main` and publishes it via GitHub Pages' native
"Deploy from GitHub Actions" flow (no `gh-pages` branch, no committed `out/`
folder).

## Editing content

Almost everything on the site — name, tagline, experience, certifications,
skills, projects, education, contact copy — comes from one file:

```
site/src/data/content.ts
```

Edit the values there and the site updates everywhere it's used. A couple of
entries are still placeholders (a second project card, the resume link) —
they're clearly commented as such in that file.

## Building locally

```bash
cd site
npm install
npm run build      # outputs a static site to site/out
npm run dev         # local dev server at http://localhost:3000
```

`next.config.mjs` sets `output: 'export'` because GitHub Pages user sites
(`<username>.github.io`) serve plain static files with no Node server —
`next build` produces a fully static `site/out` directory that GitHub Pages
can serve directly.

## Deployment

`.github/workflows/deploy.yml` runs on every push to `main`:

1. Installs dependencies and runs `npm run build` inside `site/`.
2. Copies the untouched `lexicon/` folder into the export so it keeps
   working at `/lexicon`.
3. Uploads `site/out` as a Pages artifact and deploys it via
   `actions/deploy-pages`.

For this to work, the repository's **Settings → Pages → Build and
deployment → Source** must be set to **"GitHub Actions"** (not "Deploy from
a branch"). This is a one-time manual step in the repo settings.

## Contact

The Contact section is a row of icon links (email, LinkedIn, GitHub) that go
straight to `mailto:`/profile URLs from `content.ts` — no form, no backend
needed, works the same on static GitHub Pages hosting as anywhere else.

## Known placeholders to fill in

- **More projects**: `content.ts` currently lists one project (Repo Audit) —
  add more entries to the `projects` array as you build them.
