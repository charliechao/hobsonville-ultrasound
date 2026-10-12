# Design direction

Calm, welcoming and precise. Deep teal, warm gold and pale blue-green reading surfaces reconnect the redesign to the clinic's original identity. Dark readable body text, generous whitespace, restrained rules, large editorial photographs and clear text links. Avoid generic medical icon grids and decorative effects.

Manrope headings and Source Sans 3 body, self-hosted. Strong hierarchy, comfortable reading measure and body text at least 18px. Real reception and examination-room photographs establish the clinic; stock photographs illustrate scans without claiming to depict its staff or patients. Mobile navigation remains usable without JavaScript; keyboard focus and reduced-motion support are required.

## Earlier design direction, 24 September 2026

The first version was too static and visually restrained. The client references and proposal call for sophisticated medical-imaging presentation with local approachability. A patient browsing at home in daylight, possibly anxious about a scan, needs welcoming photographs, confident contrast and readable controls.

The later phased revision below supersedes the original homepage hero, service-carousel and section-placement choices in this historical direction.

- Full-width photographic hero with deep teal readability treatment, warm-gold emphasis and persistent booking actions. Clinic pictures lead; illustrative equipment is labelled separately. It rotates automatically without visible slideshow controls.
- Five image-led service cards in a continuous horizontal track, each with a consistent medical line icon. The track moves smoothly while several cards remain visible; service links remain ordinary crawlable links without arrows, slide numbers or drag interaction.
- Genuine clinic gallery and image-rich inner-page introductions, with varied section proportions and image crops.
- Medical and practical icons for services, preparation, appointments, contact, location, care, prices and parking. Icons supplement visible text.
- The referrers page leads with the downloadable referral form, then presents referral steps, reporting and PACS access in clinician-friendly reading order.
- The home page includes a deep-teal professional-accreditations band with transparent-background MRTB, ASMIRT, ASAR and HPCSA marks, each paired with an accessible full-name label.
- A visible 4.5-second hero slideshow without visual controls. It pauses out of view or in a hidden browser tab; reduced-motion users see its static first photograph. Static first photograph remains available without JavaScript.
- A continuously moving automatic service track, paced to make the motion visible without abrupt card changes. It pauses when a visitor hovers or focuses an individual service card, plus out-of-view content, a hidden browser tab and reduced-motion users.
- A home-page Google review section presents ten selected five-star reviews in a responsive card layout. Its badge and cards use a Google-style hierarchy: coloured Google marks, gold stars, reviewer avatars, clean metadata and elevated white surfaces, without repeating an overall numeric score.
- Restrained entrance reveals, hover photo zoom, button lift and navigation underlines. Primary navigation uses larger, comfortable type and tap targets. Reduced motion disables these effects. No animation hides core content when JavaScript is unavailable.

- Services hub keeps the current website's typing line under the heading (“Select your exam and book now:” cycling the five categories, with a blinking cursor) and slides category photos and examination links in on scroll with a short stagger, as requested by the client. Screen readers get the full category list once; reduced-motion users see the first category without typing.

See `docs/design-reference-review.md` for how the five client-supplied references informed the redesign.

## Brand identity alignment, 25 September 2026

The client-supplied legacy identity guide remains the source for the visual system. It identifies the former name, while all live copy, metadata and accessible labels retain **Hobsonville Ultrasound**. The supplied Hobsonville Ultrasound logo remains the only header logo and receives no CSS filter, recolouring, distortion or added effects.

| Role         | Colour    | Use                                                             |
| ------------ | --------- | --------------------------------------------------------------- |
| Primary teal | `#1A393C` | Header, footer, primary buttons, photographic overlays and text |
| Gold         | `#F8D08A` | Booking actions, hero emphasis and active controls on teal      |
| Warm brown   | `#8D5939` | Icons, focus treatment and secondary emphasis                   |
| White        | `#FFFFFF` | Primary reading and navigation surfaces                         |
| Black        | `#000000` | Photography and high-contrast presentation only                 |

The light mist, tint, divider and muted-text tokens are restrained derivatives for readable digital surfaces. They support the guide's teal, gold and white application without adding a competing colour family. Source Sans 3 and Manrope remain for UI readability; the guide's serif logotype is used only within the supplied logo artwork.

Use real, warmly lit images of patients, families, the clinic and ultrasound care. Give images enough uncluttered space for a logo lockup only when the supplied logo remains clear and legible. Preserve clearspace around the header logo, keep its proportions unchanged and never recreate it in CSS or type.

## Phased revision, 12 October 2026

Phase 1 corrects service availability and clinic information only. Unavailable examinations retain concise, noindex direct-URL notices with reception contact, but are excluded from promoted lists, pricing, booking choices and the sitemap. The shared `services` collection contains promoted examinations; `allServices` is used only to preserve examination routes.

See `docs/phase-1-review.md` for the review checklist and clinical confirmations. Each phase is reviewed locally and requires explicit user approval before the next starts. Publication requires separate approval. The later single-image hero, stable category selector and homepage restructuring have not been implemented in Phase 1.

## Phase 2: hero and shared design, 12 October 2026

The patient is browsing in daylight, possibly anxious about an examination, and needs familiar branding, readable information and an obvious route to book. The shared identity remains teal `#1A393C`, gold `#F8D08A` and brown `#8D5939`, with a warm pale-gold hero surface (`#FBF6EC`). Manrope and Source Sans 3 remain self-hosted.

- One static, user-selected sonographer photograph replaces the hero slideshow. Desktop pairs it with a separate text column; smaller screens stack the content and photograph. The image is visibly labelled illustrative, never presented as the clinic's staff.
- The current name is the H1, immediately followed by the former name in prominent brown text. Diagnostic experience and personal care lead into two large actions.
- Shared BookingButton supplies the same gold calendar action and "Book an Ultrasound" label in the hero, header, mobile menu/bar, callout, Contact and Pricing. Specific scan booking/enquiry destinations remain unchanged.
- Body and main reading text are 20px with 1.65 line spacing; supporting text is at least 16px, navigation 18px and primary actions at least 52px high. Existing page-specific layout refinement belongs to later phases.
- The header is sticky. Desktop navigation switches to an accessible native-details menu below 1280px so labels do not compress. Booking remains in the header at 768px and above, and in a persistent bottom bar below 768px. Home is explicit; active pages use background, weight and underline, with base-path-aware matching.
- Original logo artwork remains intact. Favicon uses an embedded viewport of its original symbol. No generated logo, recolouring or CSS filter.
- Phase 3 homepage sequence and stable service category selector are not implemented yet. Phase 2 is local-only and awaits review.

## Phase 3: homepage flow, 12 October 2026

The homepage now follows the client sequence: hero, reviews, booking, services, pricing, preparation and FAQs, location, final booking. A short booking step points to the existing examination-selection page. The final banner gives one dominant booking action and smaller phone and contact links.

- Ten existing review excerpts move directly below the hero. The review rail shows three complete cards on desktop, two on tablet and one on mobile. It advances one card every eight seconds, with previous/next controls; hover, focus, reduced motion, hidden tabs and off-screen content pause automatic movement. With JavaScript disabled, all original reviews remain horizontally scrollable.
- Five bold controls sit on a gold service section. General ultrasound is selected first. Choosing another category changes its illustrative photograph, introduction and ordinary examination links. Arrow, Home and End keys work with the tabs. Without JavaScript, all five categories and their links remain visible.
- The clinic story, genuine reception and examination-room gallery, and professional accreditations now live on About. The repeated homepage name-change band and promotional clinic paragraphs were removed. About receives its planned full refinement in Phase 5.
- The location section leads with the exact clinic address and pharmacy/Woolworths wayfinding before the service-area text. “Good to know” becomes “Frequently Asked Questions.”
- The Google badge says “Read our Google reviews” because the review count has not been reconfirmed for this phase. No overall score is displayed.

Phase 3 remains local for review. Phase 4 patient and service changes are recorded below.

## Phase 4: patient and service journeys, 12 October 2026

Pricing and booking use compact introductions so their tables and examination choices appear sooner. Pricing leads with prices; referral, funding, ACC and payment guidance sits in a shorter sidebar. The prior availability paragraph stays off the Pricing page.

- Preparation retains its section structure and native accordions. Its shorter introduction and larger, bold jump links help visitors find a topic; the selected hash link changes colour without JavaScript.
- Booking rows and examination sidebars use the shared gold action style for a direct appointment and an outlined action for reception enquiries. Their existing TidyCal and contact URLs are unchanged. Service listings retain ordinary links and add a consistent icon and stronger scan-title hierarchy.
- The user selected the [older website's](https://hobus.co.nz/services) draft week ranges: NT 12–13 weeks and growth 28–40 weeks. A shared timing label appears in the services hub, pregnancy directory, booking list and each relevant scan page. Dating remains labelled first trimester; individual timing should still be checked with the referrer.
- The NT preparation message asks visitors to follow their appointment instructions and check with reception about bladder preparation when they have no instructions. The Preparation page no longer makes a blanket no-preparation claim for all other pregnancy scans.

Phase 4 remains local for user review. No publication is implied by these changes.

## Phase 5: About and Referrers, 12 October 2026

About now has three clear destinations: the clinic story, the team and working at the clinic. Its gallery shows the genuine examination room first, followed by reception; the page introduction also uses the genuine reception photograph. Darshana's profile uses only the confirmed first name, more than 12 years of sonography experience, South African training and public/private experience in New Zealand and South Africa. The four supplied accreditation marks remain at practice level beside the team section; none is attributed to Darshana without confirmation. Sonographer and Receptionist are introduced as areas of work, with an explicit statement that this page is not advertising open roles.

Referrers leads with one downloadable referral form, then accepted referrers, three referral steps, reporting and PACS/image access. The PACS request action addresses reception. Five service-area links and selected prices share the desktop sidebar and follow the main content on narrow screens. The duplicated PDF action and client-named email warning are removed. These two pages remain a local draft for review; no publication is implied.

## Monthly blog placeholder, 12 October 2026

The client requested a monthly "This Month at Hobsonville Ultrasound" format with three recurring parts: Update, Did you know?, and a scan or patient question under Good to know. The new Blog page presents these as a clearly labelled preview until an approved edition exists. It uses a genuine examination-room photograph, the established teal/gold/cream palette, readable type and the same persistent booking action as other pages.

Each edition is a dated `YYYY-MM.yml` file in Astro's build-time `monthly` content collection. The newest published edition appears on the Blog page, earlier editions form an archive, and each month gets a static page. Draft editions are excluded. No CMS, live feed or patient submission is involved. The local preview page is not indexed until the first edition is published. See `docs/monthly-blog.md` for the monthly editing steps.

The About page now pairs Darshana's confirmed profile copy with a portrait-format crop of the same stock photograph used in the homepage hero. A visible caption identifies it as illustrative and says Darshana's own portrait will follow; the image does not identify the pictured person as a team member. The existing responsive image pipeline generates the portrait crop without a duplicate source asset.
