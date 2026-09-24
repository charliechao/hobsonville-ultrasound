# Design direction

Calm, welcoming and precise. Deep aubergine, soft lavender and warm porcelain establish a distinct visual identity for the redesign. Dark readable body text, generous whitespace, restrained rules, large editorial photographs and clear text links. Avoid generic medical icon grids and decorative effects.

Manrope headings and Source Sans 3 body, self-hosted. Strong hierarchy, comfortable reading measure and body text at least 18px. Real reception and examination-room photographs establish the clinic; stock photographs illustrate scans without claiming to depict its staff or patients. Mobile navigation remains usable without JavaScript; keyboard focus and reduced-motion support are required.

## Revised direction, 24 September 2026

The first version was too static and visually restrained. The client references and proposal call for sophisticated medical-imaging presentation with local approachability. A patient browsing at home in daylight, possibly anxious about a scan, needs welcoming photographs, confident contrast and readable controls.

- Full-width photographic hero with deep aubergine readability treatment, soft lavender emphasis and persistent booking actions. Clinic pictures lead; illustrative equipment is labelled separately. It rotates automatically without visible slideshow controls.
- Five image-led service cards in a continuous horizontal track, each with a consistent medical line icon. The track moves smoothly while several cards remain visible; service links remain ordinary crawlable links without arrows, slide numbers or drag interaction.
- Genuine clinic gallery and image-rich inner-page introductions, with varied section proportions and image crops.
- Medical and practical icons for services, preparation, appointments, contact, location, care, prices and parking. Icons supplement visible text.
- A visible 4.5-second hero slideshow without visual controls. It pauses out of view or in a hidden browser tab; reduced-motion users see its static first photograph. Static first photograph remains available without JavaScript.
- A continuously moving automatic service track, paced to make the motion visible without abrupt card changes. It pauses for keyboard focus, hover, out-of-view content, a hidden browser tab and reduced-motion users.
- Restrained entrance reveals, hover photo zoom, button lift and navigation underlines. Reduced motion disables these effects. No animation hides core content when JavaScript is unavailable.

See `docs/design-reference-review.md` for how the five client-supplied references informed the redesign.

## Palette revision, 24 September 2026

The user requested a clear departure from the old website's teal and gold. The existing layout and photographic direction now use a committed aubergine identity with lavender accents and warm porcelain reading surfaces. This suits patients browsing in daylight who need a calm, legible interface with a recognisable new identity.

| Role       | Colour                        | Use                                                                 |
| ---------- | ----------------------------- | ------------------------------------------------------------------- |
| Brand      | Aubergine, `#3a2c44`          | Header, primary buttons, map caption and booking callout            |
| Deep brand | Dark aubergine, `#271d2e`     | Utility bar, footer and photographic overlays                       |
| Accent     | Soft lavender, `#dec6f2`      | Booking buttons on dark surfaces, hero emphasis and active controls |
| Paper      | Warm porcelain, `#fcf8f4`     | Main reading background                                             |
| Mist       | Lavender porcelain, `#efe8f4` | Inner-page introductions, preparation and clinic sections           |
| Ink        | Plum charcoal, `#2d2632`      | Headings and body text                                              |

Canonical colours are defined once in OKLCH in `src/styles/global.css`; hexadecimal values above are rounded sRGB equivalents. Shared semantic tokens govern hover, focus, borders, icons, captions and mobile actions. The original logo artwork has a monochrome CSS treatment; its source image and the real clinic photographs remain intact. The favicon and browser theme colour follow the new palette.
