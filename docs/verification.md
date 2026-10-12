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

## Brand identity guide alignment, 25 September 2026

- Rendered and visually reviewed all 26 pages of the client-supplied legacy brand identity guide. It defines primary teal `#1A393C`, gold `#F8D08A`, warm brown `#8D5939`, black and white.
- Replaced the prior current-site teal and gold approximations with the guide's exact core values in the shared global tokens, favicon and browser theme colour. Pale teal interface tones remain as derived reading surfaces.
- Confirmed the existing Hobsonville Ultrasound header logo has no CSS recolouring or transformation. The guide's legacy name is not introduced into live copy, metadata or alternative text.
- The guide contains no separate web typography specification. The existing self-hosted Source Sans 3 and Manrope remain for accessible site text; the decorative serif treatment remains confined to the supplied logo artwork.

## Phase 1 content corrections, 12 October 2026

- Local implementation only; no commit, push or deployment. Phase 2 is awaiting user review and approval. See `docs/phase-1-review.md` for changes, review routes and pending client confirmations.
- `npm run check`: 0 errors, 0 warnings, 0 hints. `npm run build`: 43 static pages. `npm run audit`: passed 1,862 local references and 99 image elements. `git diff --check`: passed.
- Targeted generated-output checks scanned all 43 pages for stale ACC-contribution, opening-hours and duration wording, and links promoting unavailable scans. All checks passed.
- Verified all four unavailable-service routes render an availability notice with reception contact, without a scan price, scan booking action or Service schema. Each is noindex and excluded from the sitemap. Shared header/footer booking links still lead to the available-service directory.
- Verified the $300 draft maternity rate renders on Pricing, the pregnancy category and the dating detail page; weekday hours and shoulder clothing/duration copy render correctly. Funding scope remains a pre-publication confirmation.
- Local Playwright checks: Pricing, pregnancy directory and anatomy availability notice had no horizontal overflow at 390px, 768px and 1440px. Visually reviewed the new notice at desktop width. Skip-link keyboard focus and navigation into main content passed with reduced motion enabled at a 720px viewport.
- These focused content checks do not constitute a full accessibility or 200% browser-zoom audit; those remain part of the typography/navigation redesign and final review. Existing brand styling is unchanged in Phase 1.

## Phase 2 hero and shared design, 12 October 2026

- Implemented locally following Phase 2 approval. The user selected the sonographer examination photograph (option A). No commit, push or deployment; Phase 3 awaits approval.
- `npm run check`: 40 files, 0 errors, 0 warnings, 0 hints. Standard build: 43 pages. Standard audit: 1,988 local references and 97 image elements passed. `git diff --check`: passed.
- GitHub Pages build and base-path audit passed locally: 43 pages, 1,981 local references and 90 image elements. Generated Home, Contact and nested abdominal-service pages have the expected active navigation and prefixed URLs. Restored the standard build for local preview.
- Visually reviewed the split hero at 1440px and stacked layout at 390px. Home, Pricing, Contact and Referrers were checked at 320px, 768px and 1440px: no horizontal page or header overflow. Fixed the narrowest-screen logo width following this check.
- Checked persistent booking access across 320px, 390px, 768px, 1024px, 1280px and 1440px layouts. Reading copy is 20px and primary booking targets exceed 48px.
- Keyboard: mobile menu opens with Enter, Tab reaches Home, and Escape closes the menu. With JavaScript disabled, the hero image, native mobile menu and bottom booking action remain available. The static hero does not depend on motion; reduced-motion preference was enabled during the browser review.
- These are targeted checks, not a full accessibility audit or a native 200% browser-zoom certification. Later page refinement and final review remain separate phases.

## Phase 3 homepage flow, 12 October 2026

- Implemented locally following Phase 3 approval. No commit, push or deployment. Phase 4 is recorded below.
- `npm run check`: 42 files, 0 errors, 0 warnings, 0 hints. `npm run build`: 43 pages. `npm run audit`: passed 2,049 local references and 97 image elements. `git diff --check`: passed.
- Homepage source and browser order: hero, Google reviews, booking step, category services, pricing, preparation and FAQs, location, final booking banner. The About page contains the clinic gallery and four accreditation marks.
- Visually reviewed the reviews and gold service selector at desktop and mobile widths. Home has no horizontal overflow at 320px, 390px, 720px, 768px or 1440px. The 320px Google badge was adjusted after an initial overflow check. The 720px check covers the reflow width of a 1440px screen at approximately 200% zoom; native browser zoom has not been certified.
- Reviews: three complete cards at 1440px, two at 768px and one at 390px. Next and previous move whole cards, including wrap from review 10 to 1 and back. Auto advance was observed after eight seconds with motion allowed; hover stopped the next advance. With reduced motion, no automatic advance occurred, while the manual control still worked.
- Service selector: General is initially selected. Pointer selection changes the image, introduction and examination links; keyboard ArrowRight selects Pregnancy. The Vascular panel contains DVT, carotid and other vascular links. With JavaScript disabled, all five panels and their links remain visible, and all ten reviews remain in a horizontally scrollable row.
- Browser screenshots were saved locally under `.local/phase-3-*.png` for this review. These targeted checks do not replace the final accessibility and content review.

## Phase 4 patient and service pages, 12 October 2026

- Implemented locally following the Phase 4 request. No commit, push or deployment. Pricing tables now precede explanatory notes; Pricing and Booking have compact introductions. Preparation has a shorter introduction and stronger native section links.
- Booking and service detail actions retain the existing TidyCal and contact destinations. Pregnancy timing labels are drawn from shared service data. Per the user's choice, the draft uses the current website's NT 12–13-week and growth 28–40-week ranges; appointment timing remains subject to referrer guidance.
- `npm run check`: 42 files, 0 errors, 0 warnings, 0 hints. `npm run build`: 43 static pages. `npm run audit`: 43 pages, 2,090 local references and 95 image elements passed. `git diff --check`: passed.
- Local browser checks of Pricing, Preparation, Booking, abdominal scan detail, pregnancy category, NT detail and growth detail found no horizontal overflow at 320px, 390px, 768px or 1440px, with reduced motion enabled. The first Pricing table begins at about 405px on a 1440px-wide screen, and the first Booking row begins at about 696px on a 390px-wide screen. The Preparation `#bring` link receives its selected styling and navigates to the matching section.
- Visually reviewed the desktop Pricing layout and mobile Booking layout. Targeted checks do not constitute a full accessibility audit or native browser-zoom certification. Timing and maternity-funding copy should be checked with the clinic before public launch.

## Phase 5 About and Referrers, 12 October 2026

- Implemented locally following the Phase 5 request and the user's clarification to use only confirmed existing team copy and show no live vacancies. No commit, push or deployment.
- `npm run check`: 42 files, 0 errors, 0 warnings, 0 hints. `npm run build`: 43 static pages. `npm run audit`: 43 pages, 2,137 local references and 92 image elements passed.
- Local browser review at 320px, 390px, 720px, 768px and 1440px found no page-level horizontal overflow on About or Referrers. Visually checked both pages at desktop and mobile widths. The 720px reflow approximates a 1440px window at 200% zoom; native browser zoom has not been certified.
- About's genuine examination-room and reception photographs and all four accreditation marks loaded when scrolled into view. Its section link reached `#our-team`, and the gallery advanced from examination room to reception with its next control. Reduced motion was enabled for the mobile review.
- Referrers renders one PDF download link; the local download returned HTTP 200. The PACS request action addresses `reception@hobus.co.nz` with a PACS access subject. Confirmed the sequence of referrals, three steps, reports and PACS, plus the combined services/pricing sidebar.
- Darshana's full name, named qualifications, individual accreditation associations, a genuine team portrait and approved role details/application route remain unconfirmed. The page does not assign the practice-level marks to her or present the two roles as open vacancies. These targeted checks do not replace final clinical and accessibility review.

## Monthly blog placeholder, 12 October 2026

- Added a local `/blog/` page and static monthly content collection using the three sections in the client's feedback. The only collection entry is a draft template, so no dated edition or individual monthly route is published yet. No commit, push or deployment.
- `npm run check`: 47 files, 0 errors, 0 warnings, 0 hints. `npm run build`: 44 static pages. `npm run audit`: 44 pages, 2,351 local references and 94 image elements passed. The empty-collection warnings from the first build were resolved by keeping a schema-checked draft template.
- Local browser review found no page-level horizontal overflow at 320px, 390px, 768px, 1280px, 1440px or 1600px. The Blog navigation state was active in both desktop and mobile menus. The genuine clinic-room photograph loaded; desktop and mobile layouts were visually reviewed.
- The placeholder has `noindex` and contains no fabricated dated clinic update. Monthly publishing instructions and a starter file are in `docs/monthly-blog.md` and `src/content/monthly/_template.yml`. Individual monthly pages will be created by the static build when an approved file has `draft: false`.

## About team portrait placeholder, 12 October 2026

- Added the homepage hero photograph to Darshana's profile in a portrait-format crop. The image alt text and visible caption explicitly identify it as illustrative, pending a genuine portrait.
- `npm run check`: 47 files, 0 errors or warnings. `npm run build`: 44 static pages. `npm run audit`: 44 pages, 2,352 local references and 95 image elements passed.
- Visually reviewed the team section at desktop and 390px mobile width. The portrait loaded, the caption remained visible, and no page-level horizontal overflow appeared at 390px or 320px. No commit, push or deployment.
