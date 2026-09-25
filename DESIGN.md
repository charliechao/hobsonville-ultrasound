# Design direction

Calm, welcoming and precise. Deep teal, warm gold and pale blue-green reading surfaces reconnect the redesign to the clinic's original identity. Dark readable body text, generous whitespace, restrained rules, large editorial photographs and clear text links. Avoid generic medical icon grids and decorative effects.

Manrope headings and Source Sans 3 body, self-hosted. Strong hierarchy, comfortable reading measure and body text at least 18px. Real reception and examination-room photographs establish the clinic; stock photographs illustrate scans without claiming to depict its staff or patients. Mobile navigation remains usable without JavaScript; keyboard focus and reduced-motion support are required.

## Revised direction, 24 September 2026

The first version was too static and visually restrained. The client references and proposal call for sophisticated medical-imaging presentation with local approachability. A patient browsing at home in daylight, possibly anxious about a scan, needs welcoming photographs, confident contrast and readable controls.

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

| Role | Colour | Use |
| --- | --- | --- |
| Primary teal | `#1A393C` | Header, footer, primary buttons, photographic overlays and text |
| Gold | `#F8D08A` | Booking actions, hero emphasis and active controls on teal |
| Warm brown | `#8D5939` | Icons, focus treatment and secondary emphasis |
| White | `#FFFFFF` | Primary reading and navigation surfaces |
| Black | `#000000` | Photography and high-contrast presentation only |

The light mist, tint, divider and muted-text tokens are restrained derivatives for readable digital surfaces. They support the guide's teal, gold and white application without adding a competing colour family. Source Sans 3 and Manrope remain for UI readability; the guide's serif logotype is used only within the supplied logo artwork.

Use real, warmly lit images of patients, families, the clinic and ultrasound care. Give images enough uncluttered space for a logo lockup only when the supplied logo remains clear and legible. Preserve clearspace around the header logo, keep its proportions unchanged and never recreate it in CSS or type.
