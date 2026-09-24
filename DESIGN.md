# Design direction

Calm, welcoming and precise. Deep teal, warm gold and pale blue-green reading surfaces reconnect the redesign to the clinic's original identity. Dark readable body text, generous whitespace, restrained rules, large editorial photographs and clear text links. Avoid generic medical icon grids and decorative effects.

Manrope headings and Source Sans 3 body, self-hosted. Strong hierarchy, comfortable reading measure and body text at least 18px. Real reception and examination-room photographs establish the clinic; stock photographs illustrate scans without claiming to depict its staff or patients. Mobile navigation remains usable without JavaScript; keyboard focus and reduced-motion support are required.

## Revised direction, 24 September 2026

The first version was too static and visually restrained. The client references and proposal call for sophisticated medical-imaging presentation with local approachability. A patient browsing at home in daylight, possibly anxious about a scan, needs welcoming photographs, confident contrast and readable controls.

- Full-width photographic hero with deep teal readability treatment, warm-gold emphasis and persistent booking actions. Clinic pictures lead; illustrative equipment is labelled separately. It rotates automatically without visible slideshow controls.
- Five image-led service cards in a continuous horizontal track, each with a consistent medical line icon. The track moves smoothly while several cards remain visible; service links remain ordinary crawlable links without arrows, slide numbers or drag interaction.
- Genuine clinic gallery and image-rich inner-page introductions, with varied section proportions and image crops.
- Medical and practical icons for services, preparation, appointments, contact, location, care, prices and parking. Icons supplement visible text.
- A visible 4.5-second hero slideshow without visual controls. It pauses out of view or in a hidden browser tab; reduced-motion users see its static first photograph. Static first photograph remains available without JavaScript.
- A continuously moving automatic service track, paced to make the motion visible without abrupt card changes. It pauses for keyboard focus, hover, out-of-view content, a hidden browser tab and reduced-motion users.
- A home-page Google review section presents ten selected five-star reviews in a responsive card layout. Its badge and cards use a Google-style hierarchy: coloured Google marks, gold stars, reviewer avatars, clean metadata and elevated white surfaces, without repeating an overall numeric score.
- Restrained entrance reveals, hover photo zoom, button lift and navigation underlines. Reduced motion disables these effects. No animation hides core content when JavaScript is unavailable.

- Services hub keeps the current website's typing line under the heading (“Select your exam and book now:” cycling the five categories, with a blinking cursor) and slides category photos and examination links in on scroll with a short stagger, as requested by the client. Screen readers get the full category list once; reduced-motion users see the first category without typing.

See `docs/design-reference-review.md` for how the five client-supplied references informed the redesign.

## Palette realignment, 25 September 2026

The user asked to return to the original clinic colour family. The current website's deep teal and warm-gold values now anchor the redesign, while the backgrounds and borders use lighter blue-green variations to keep the wider editorial layout calm and readable in daylight.

| Role       | Colour                           | Use                                                                 |
| ---------- | -------------------------------- | ------------------------------------------------------------------- |
| Brand      | Original primary teal, `#274246` | Primary buttons, map caption and booking callout                    |
| Deep brand | Original header teal, `#1B383C`  | Header, utility bar, footer and photographic overlays               |
| Accent     | Original warm gold, `#EEC482`    | Booking buttons on dark surfaces, hero emphasis and active controls |
| Paper      | Pale blue-green                  | Main reading background                                             |
| Mist       | Light blue-green                 | Inner-page introductions, preparation and clinic sections           |
| Ink        | Deep teal                        | Headings and body text                                              |

Canonical colours are defined once in OKLCH in `src/styles/global.css`; hexadecimal values above identify the original source values. Shared semantic tokens govern hover, focus, borders, icons, captions and mobile actions. The original logo is rendered without a colour filter, and the favicon and browser theme colour use the original deep teal.
