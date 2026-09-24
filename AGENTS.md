# Shared agent instructions

This checkout is shared by Codex and Claude Code. Treat the current Git state as the source of truth for all work.

## Start every task

1. Read `git status --short`, `git log -5 --oneline`, and `git status -sb`.
2. Pull no changes and do not reset, clean, stash, checkout, or revert another agent's work unless the user explicitly requests it.
3. If the working tree contains files you did not create, leave them untouched and stage only the files needed for the current task.
4. Re-read the files you intend to edit immediately before editing them. Another agent may have changed them since the task began.

## Current baseline

- The current shared baseline is the latest `main` commit, including Claude Code's client-content update `b76a9d3`.
- The untracked `client requests/` folder contains client material. Do not add, move, delete, or edit it without a direct user request.
- The public review site is deployed by GitHub Pages from `main` at `https://charliechao.github.io/hobsonville-ultrasound/`.
- A push to `main` triggers `.github/workflows/deploy-github-pages.yml`. This deploys the review site only.

## Change and publish workflow

1. Keep each change focused on the user's request.
2. Run the appropriate local validation for code changes: `npm run check`, `npm run build`, and `npm run audit`.
3. Before a GitHub Pages publish, also run `npm run build:github-pages` with `GITHUB_PAGES=true`, then run `npm run audit` with `SITE_BASE_PATH=/hobsonville-ultrasound`.
4. Commit only the authorised files with a descriptive message and push `main` only when the user has authorised publication.
5. GitHub Actions deployment success is the publication confirmation. Check the rendered review site only when the user asks for live verification.

## Implementation rules

- Preserve the Astro static-site architecture, local responsive image pipeline, accessible links, keyboard support, and reduced-motion behaviour.
- Do not introduce credentials, private client correspondence, or external service configuration into source control.
- Update `DESIGN.md` and `docs/verification.md` when a design or implementation decision changes materially.
