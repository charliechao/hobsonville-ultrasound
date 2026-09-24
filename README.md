# Hobsonville Ultrasound

Static Astro website for https://hobus.co.nz. Framework-free, with local photography, self-hosted fonts, responsive WebP images and the existing TidyCal booking links.

## Local development

Requires Node 22.12 or newer.

```sh
npm ci
npm run dev
npm run check
npm run build
npm run audit
```

Development URL: http://127.0.0.1:4321. Static output: `dist/`.

## Content

- `src/data/services.ts`: examinations, preparation, pricing and booking links. Category and examination routes are generated from this file.
- `src/data/site.ts`: contact details and FAQs.
- `src/data/images.ts`: selected original images for Astro optimisation.
- `assets/images/SOURCES.md`: image provenance and licensing notes.
- `docs/launch-checklist.md`: client decisions and publication gates.
- `docs/url-migration.md`: existing URL preservation and launch redirect review.

The source library includes unused candidate images. Only imported images are emitted into the website. Clinical copy is a review draft derived from supplied material. No raw emails, original confidential briefs or patient records belong in this repository.

## Publication

The default build is **not indexable**. Copy `.env.example` to `.env` for local settings. Set `PUBLIC_SITE_INDEXABLE=true` only after client approval and completion of the launch checklist. This enables robots crawling and removes the review noindex metadata.

`PUBLIC_GA4_ID` is optional and validated before loading Google Analytics. Analytics runs only on an indexable build. Event names: `book_online_click`, `phone_click`, `email_click`, `directions_click`. Clicks are not confirmed bookings, calls or enquiries. No event includes form contents, email text, scan names or patient details. Review GA4 enhanced-measurement settings before launch.

Build command: `npm run build`. Publish directory: `dist`. No server runtime or CMS is required. Hosting may remain with the current provider or use a static host supporting directory indexes and a custom 404. The chosen host must enforce the canonical hostname and HTTPS. The source push does not deploy or change DNS.

## Verification limits

`npm run audit` checks generated static pages and local references, not the operation of external booking accounts or the final production environment. Browser, assistive technology, clinical and launch reviews remain on the launch checklist. This build has no patient-data collection form or referral portal.
