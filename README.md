# Infectious Disease Bias Project Website

An English, single-page academic project website inspired by the editorial clarity of the Stanford STAR project site. The implementation uses Astro content collections so project developers can maintain publications without editing page components.

Production site: <https://epidemicast.github.io>

## Run locally

```bash
pnpm install
pnpm dev
```

Build and validate:

```bash
pnpm build
```

## Deploy

Pushes to the `main` branch are built and deployed to GitHub Pages by
`.github/workflows/deploy.yml`. In the repository settings, set **Pages → Build
and deployment → Source** to **GitHub Actions**.

## Update content

- Publications: add or edit a Markdown file in `src/content/publications/`.
- People: edit `src/data/people.json`.
- Talks and events: edit `src/data/talks.json`.
- Page-level copy and partner names: edit `src/pages/index.astro`.

All publication fields are validated during the build. Missing resource links should be stored as `null`; the corresponding button will not be rendered.

## Placeholders

Search the repository for `[To confirm]`, `[Affiliation to confirm]`, and `TODO` before production deployment.
