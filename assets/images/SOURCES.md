# Hobsonville Ultrasound image sources

Collected 24 September 2026, before starting the Astro build. These are source images for selection and optimisation during design. `client/` contains files supplied in the client project folder; `current-site/` preserves files downloaded from the existing website; `stock/` contains separately licensed photographs. The stock photographs are illustrative and must never be presented as Hobsonville Ultrasound's staff, patients, premises or equipment.

## Client-supplied photographs

| Local file | Source | Notes |
| --- | --- | --- |
| `client/exam-room.jpg` | [Client Drive file](https://drive.google.com/file/d/1qI7oUF-BhlWmjj76muXREBbyfS-cSK4B/view) | Genuine examination room. Retained as source material but excluded from the website at the client's request. |
| `client/exam-machine.png` | User-supplied local asset | Ultrasound machine image used on About, Insights and social previews. It is not identified as the clinic's actual machine or room. |
| `client/reception.jpg` | [Client Drive file](https://drive.google.com/file/d/1kv49hbYuwBumvc08C8XNIWki6edmTvsB/view) | Genuine current reception and branding. |

## Existing website

All files under `current-site/images/` were downloaded from the matching path at `https://hobus.co.nz/`. They are an asset inventory, not an approved final selection. The original site contains a mix of genuine clinic photography, graphics and stock-like examination imagery.

- `team/about-home.jpg` shows the current Hobsonville Ultrasound reception. This is a useful alternate crop of the client-supplied reception photo.
- `team/about-founder.jpg` shows the former Body 2 Baby reception sign; it is **not** a founder or team portrait.
- `logos/logo.jpg` contains the current brand logo.
- `content/` and `hero/` contain examination imagery for visual reference. Confirm reuse rights and clinical suitability before publishing. The precomposed `hero/home-slide-1.jpg` promotes 4D scans, whose availability needs confirmation. Do not imply that these images show the current clinic or its patients.
- `thumbnails/` contains small service images; they are too low-resolution for prominent placement.
- `backgrounds/home-welcome-banner.jpg` is a precomposed brand graphic, not a photograph.

## Separately licensed stock photography

These three images are downloaded from Pexels at up to 2000 px width under the [Pexels license](https://www.pexels.com/license/), which permits commercial website use. Photographer: MART PRODUCTION. Keep the source pages for attribution and future license review.

| Local file | Source page | Intended use |
| --- | --- | --- |
| `stock/ultrasound-machine.jpg` | [Ultrasound machine in a clinical room](https://www.pexels.com/photo/technology-computer-health-hospital-7089029/) | Supporting equipment photo; screen depicts a pregnancy scan. |
| `stock/pregnancy-ultrasound.jpg` | [Pregnancy ultrasound examination](https://www.pexels.com/photo/people-woman-technology-health-7089333/) | Pregnancy service illustration. |
| `stock/ultrasound-probe.jpg` | [Close-up of ultrasound equipment](https://www.pexels.com/photo/technology-computer-health-monitor-7089618/) | Neutral diagnostic equipment detail. |

## Phase 2 hero selection, 12 October 2026

The user selected the real sonographer examination photograph over the equipment close-up. `stock/sonographer-examination.jpg` is downloaded at 2000px from [MART PRODUCTION on Pexels](https://www.pexels.com/photo/photo-of-person-using-ultrasound-scan-7089299/), under the [Pexels license](https://www.pexels.com/license/), checked 12 October 2026. The hero includes a visible illustrative-photograph caption and descriptive stock-photo alt text; it does not identify the model as clinic staff. Astro creates local responsive WebP sizes.

The favicon embeds the original `current-site/images/logos/logo.jpg` in an SVG square viewport focused on its symbol. The source image bytes, colours and proportions are preserved; the symbol is not redrawn or generated.

## Still needed from the client (future pages)

An entrance/wayfinding photo could improve the Contact page if the client supplies and approves one. The client does not want an identifiable face in the About team section or the actual examination room and machine shown on the website. Do not add a team portrait or restore that room photograph without a new client instruction.

## New client-supplied homepage assets, 19 October 2026

The user authorised use of these files from `client/` for the current local draft. The three `hero_section` PNGs are composite-looking scenes; their origin as real clinic or equipment photography is unverified. They are decorative full-width hero backgrounds with no visible image-origin caption, as requested. The site does not name the pictured equipment model or claim that it depicts this clinic.

| Local file | Use |
| --- | --- |
| `client/hero_section (1).png` | Illustrative examination slide. |
| `client/hero_section (2).png` | Illustrative reception slide. |
| `client/hero_section (3).png` | Illustrative equipment slide. |
| `client/ACC.jpg` | Supplied ACC badge beside the existing ACC referral charge statement. Kept close to native display size. |
| `client/Southern Cross.jpg` | Supplied Southern Cross Health Insurance affiliated-provider badge. |

## Service category icons

The Pregnancy, General, Musculoskeletal and Vascular icons are `pregnant-outline`, `liver-outline`, `joints-outline` and `varicose-vein-outline` from [Healthicons](https://github.com/resolvetosavelives/healthicons) (MIT License, Copyright (c) 2021 Resolve to Save Lives), taken from the Iconify mirror on 19 October 2026. The SVG markup is inlined in `src/components/Icon.astro`, with the licence notice kept in a source comment.

## About page background, 9 November 2026

`stock/about-floral.jpg` is a photograph by [Nadezhda Moryak on Pexels](https://www.pexels.com/photo/a-white-flowers-with-green-leaves-6206366/), downloaded at 1600px under the [Pexels licence](https://www.pexels.com/license/). It is a decorative backdrop, not a photograph of the clinic.
