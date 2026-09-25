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

## Homepage motion pacing, 24 September 2026

- Hero photography now advances every 4.5 seconds, making the image changes more apparent while retaining the crossfade and reduced-motion behaviour.
- The expertise section now presents one complete, centred service card at a time. Its 4.5-second automatic transition replaces the cropped horizontal rail and retains ordinary service links, keyboard pause and reduced-motion support.
- CSS is explicitly emitted as two static assets from the shared layout, so the review deployment retains the global and premium visual layers.
- Local browser review: the fresh hero advanced to slide two after 4.7 seconds; the service stage had one visible active card; a 390px viewport had no horizontal page overflow and the active card measured 375px wide inside the 375px document.
- Browser console: no errors reported during the local homepage checks.

## Continuous expertise carousel, 24 September 2026

- Replaced the single-card stage with a continuous multi-card service track, modelled on the movement and visible-card density of Kiwi Web Design's Client Results carousel.
- The track duplicates only the visual cards for a seamless loop. Original service links stay available in the document, and cloned cards are hidden from assistive technology and keyboard navigation.
- Local browser review: at desktop, three cards were visible and the rail advanced 40.7px in 1.2 seconds; five original links and five non-focusable visual clones were present. At a 390px viewport, the 320px cards remained within a 375px document with no horizontal page overflow.
- Browser console: no errors reported during the continuous carousel review.

## Clinic hours and Google reviews, 24 September 2026

- Contact page hours were transcribed from the current Hobsonville Ultrasound website: Monday–Friday, 9:30 am–6:30 pm; Saturday, 9:00 am–12:00 pm.
- The home page presents ten reviews selected from the Google profile's highest-rated filter. Each card is labelled as a five-star Google review; the Google-style profile badge links to the Google profile and shows its 31-review count without showing an overall numeric score.
- The review cards are responsive: five columns on wide desktop screens, three at intermediate widths, two on tablet and one on mobile. The section keeps ordinary external links to the Google profile and does not load a third-party widget.

## Palette realignment, 25 September 2026

- Sampled the current Hobsonville Ultrasound stylesheet: its primary teal is `#274246`, its darker header teal is `#1B383C`, and its warm gold is `#EEC482`.
- Replaced the aubergine and lavender token system with OKLCH teal, blue-green and warm-gold tokens. Pale blue-green paper, mist and border values retain the lighter redesigned reading experience.
- Removed the header logo filter so the supplied original teal-and-gold artwork appears unchanged. Updated the browser theme colour and favicon to the original deep teal and gold.

## Google Maps location, 25 September 2026

- Directions links now use the client-supplied Hobsonville Ultrasound Google Maps place URL. Homepage and contact-page embeds use its exact pin coordinates: -36.7977876, 174.648825.

## Expertise carousel interaction, 25 September 2026

- The continuous service track no longer pauses when the pointer enters the wider section. It only pauses while the pointer is over an individual service card, or when a service link receives keyboard focus. It resumes after the visitor leaves that card.

## Navigation readability, 25 September 2026

- Increased desktop navigation to 1.08rem (1rem on compact desktop) and increased mobile menu labels and their vertical tap targets. The existing responsive breakpoint still switches to the mobile menu below 801px.

## Referrer form and PACS information, 25 September 2026

- Added the client-supplied referral PDF as the first action on the referrers page and published it at `/downloads/hobsonville-ultrasound-referral-form.pdf`.
- Transcribed the current Hobsonville Ultrasound referrers-page PACS guidance: referring practitioners use the secure PACS portal for images and reports, and reception provides credentials and first-time registration. The site provides a reception email request rather than inventing a portal address.

## Professional accreditations, 25 September 2026

- Added the client-supplied MRTB, ASMIRT, ASAR and HPCSA logos to a home-page professional-accreditations section. Each mark has a visible full-name label and a concise image alternative.
- Replaced the white-card presentation with transparent-background logo variants, fitted directly against the deep-teal accreditation band.
- Local production-build review confirmed the white panels are absent and all four marks load against the teal background; a small brightness lift preserves visibility for the darker logos.
