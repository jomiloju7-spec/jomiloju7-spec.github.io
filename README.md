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
│   ├── public/                Static assets (favicon, resume.pdf goes here)
│   └── reference/             Reference-only API route (see "Contact form")
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

## Contact form

GitHub Pages can't run server code, so the contact form does **not** use a
Next.js API route in production. Instead:

- `site/src/components/sections/contact.tsx` posts the form to a
  Formspree-style endpoint read from `NEXT_PUBLIC_FORM_ENDPOINT`.
- **To wire up real submissions:** create a form at
  [formspree.io](https://formspree.io) (or any similar static-friendly form
  service), then set `NEXT_PUBLIC_FORM_ENDPOINT` to that endpoint URL —
  either in `site/.env.local` for local builds, or as a repository/
  environment variable (`vars.NEXT_PUBLIC_FORM_ENDPOINT`) that the deploy
  workflow already passes through to the build.
- **Until that's set**, submitting the form falls back to opening a
  `mailto:` link pre-filled with the message, so it never silently fails.
- A one-click "copy email" button next to the form always works regardless
  of form service setup.

A reference-only Next.js API route lives at
`site/reference/contact-route.example.ts`. It is **not** part of the build
and will not run on GitHub Pages — it's kept only in case this project is
ever redeployed to a Node-capable host (e.g. Vercel), at which point you'd
move it to `site/src/app/api/contact/route.ts` and drop `output: 'export'`.

## Known placeholders to fill in

- **Resume**: drop a real PDF at `site/public/resume.pdf` (the Hero
  "Download Resume" button links to `/resume.pdf` and currently 404s).
- **Second project card**: `content.ts` has one real project (Repo Audit)
  and one placeholder — swap in your next project when it's ready.
- **Contact form endpoint**: see above.
