# Claude Code working agreement

This repository is shared with Codex. Work from the latest shared `main` state and preserve any in-progress files owned by the other agent.

## Before editing

Run:

```powershell
git status --short
git log -5 --oneline
git status -sb
```

The current content baseline includes commit `b76a9d3 Align site with client content brief`.

## Safe collaboration

- Do not use `git reset`, `git clean`, `git stash`, broad checkout commands, or reverts unless the user explicitly asks.
- Do not edit or stage unrelated changes. The `client requests/` folder is untracked client material and must remain untouched unless the user asks to use it.
- Inspect a file again immediately before editing it. If Codex has changed it during your task, merge the intent into the current version rather than restoring an older one.
- Keep commits small and descriptive so the other agent can understand the shared history.

## Validation and deployment

For source changes, run:

```powershell
npm run check
npm run build
npm run audit
```

For the GitHub Pages review deployment, run:

```powershell
$env:GITHUB_PAGES='true'
npm run build:github-pages
$env:SITE_BASE_PATH='/hobsonville-ultrasound'
npm run audit
```

Pushing `main` starts the GitHub Pages review deployment at:

`https://charliechao.github.io/hobsonville-ultrasound/`

Do not push unless the user has authorised publication. Do not change the production website as part of this review-site workflow.

## Site standards

- Keep the site static in Astro and retain local responsive images.
- Preserve accessible semantic links, keyboard operation and reduced-motion support for interactive elements.
- Record material design choices in `DESIGN.md` and meaningful checks in `docs/verification.md`.
