# Local implementation checks

Verified 24 September 2026 before the initial source push:

- Astro diagnostics: 0 errors, 0 warnings, 0 hints.
- Static build: 43 HTML pages, including the custom 404.
- Output audit: 1,423 local references and 59 rendered image elements passed. Checks cover internal links and fragments, local image references, image dimensions and alt text, unique titles, one H1 per page, descriptions, canonical URLs, valid JSON-LD and review noindex guards.
- Dependency audit: 0 known vulnerabilities after upgrading Sharp to 0.35.4.
- Existing primary site routes retained; current `#general-ultrasound` and `#obstetric` service anchors preserved.
- Two representative recovered TidyCal links (dating and upper abdomen) and TidyCal’s privacy page returned HTTP 200. This does not confirm booking configuration or availability. No booking submitted.
- Photography served from local files through Astro’s responsive WebP pipeline. No AI-generated photography.

No browser/visual review or production deployment was performed for the initial version. Clinical approval, booking configuration review, client decisions and launch checks remain listed in `launch-checklist.md`.

## Design revision, 24 September 2026

- Re-read the client reference email, presentation creative direction and content/design brief; inspected the five reference homepages visually.
- Astro diagnostics: 0 errors, 0 warnings, 0 hints. Static build still contains 43 pages.
- Generated-output audit: 1,508 local references and 100 image elements passed (includes repeated shared and service-page imagery).
- Local browser checks at the default desktop viewport and a 390px mobile viewport: homepage and representative examination page; no page-level horizontal overflow in sampled mobile views; no broken loaded images.
- Hero direct slide selector and keyboard arrow navigation change the active slide and stop automatic rotation. Reduced-motion emulation starts the slideshow paused.
- Service carousel advances using its next control; previous control becomes enabled after movement.
- Mobile navigation opens and Escape closes it. Photo captions and gallery controls checked for overlap; gallery label repositioned and mobile hero typography adjusted.
- Viewport and reduced-motion emulation reset after testing. No production deployment or post-push live-site verification.

## Palette revision, 24 September 2026

- Replaced interface teal/gold and green-tinted neutrals with shared aubergine, lavender and porcelain tokens, including responsive styles, photographic overlays, hover states, icons, favicon and browser theme colour.
- Calculated WCAG contrast from the OKLCH tokens in linear sRGB: ten solid text/background pairs passed 4.5:1, with the lowest sampled pair at 5.57:1. This is a token contrast check, not a claim about every photographic pixel.
- Astro diagnostics: 0 errors, 0 warnings, 0 hints. Static build: 43 pages. Generated-output audit: 1,508 local references and 100 image elements passed.
- Source scan found no remaining old teal/gold token names, button class or primary hexadecimal colours in `src` or `public`. Original photography and logo files are preserved; the header applies a monochrome CSS treatment to the logo.
- No browser visual review or production deployment performed for this colour-only revision.

## Homepage motion simplification, 24 September 2026

- Homepage hero: removed the visual slide selectors, previous/next arrows and pause/play control. The three supplied images continue to crossfade automatically; the static first photograph remains available when JavaScript is unavailable or reduced motion is preferred.
- Our expertise: removed the image numbers and all directional controls. The service cards now advance automatically while the section is visible. Native horizontal dragging is disabled; each linked service card remains keyboard accessible. Automatic motion pauses for keyboard focus, a hidden browser tab, out-of-view content and reduced-motion preferences.
- Local browser review confirmed the hero has no buttons, service cards have no numbered overlays, the clinic gallery retains its own controls, all five service images load, and no console errors were reported.
- Astro diagnostics: 0 errors, 0 warnings, 0 hints. Static build: 43 pages. Generated-output audit: 1,508 local references and 100 image elements passed.
