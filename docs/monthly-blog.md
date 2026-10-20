# Monthly Insights updates

The Insights page is part of the static Astro website. Add one approved edition each month; no CMS or account is needed.

1. Copy `src/content/monthly/_template.yml` to `src/content/monthly/YYYY-MM.yml`, using the month of publication (for example, `2026-11.yml`).
2. Replace the template text in all three sections: **Update**, **Did you know?**, and **Good to know**. The third section can explain a scan or answer a common patient question; it does not need to be a patient story. Add or remove `details` paragraphs as needed.
3. Confirm clinical statements, service availability, prices and opening hours with the clinic. Keep `draft: true` until the copy is approved.
4. Set `draft: false`, run `npm run check`, `npm run build` and `npm run audit`, then publish through the normal website workflow.

Published editions appear newest first at `/blog/`, with a page at `/blog/YYYY-MM/` for each month. The website changes only when the static build is published. The current placeholder page stays in place until the first edition is published.
