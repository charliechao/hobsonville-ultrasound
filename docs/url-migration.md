# URL migration

The observed current website has these primary routes, preserved in this build:

| Current path | Astro route |
| --- | --- |
| `/` | `/` |
| `/services` | `/services/` |
| `/about` | `/about/` |
| `/contact` | `/contact/` |
| `/referrers` | `/referrers/` |

The host should normalize directory paths to the trailing-slash canonical, preserving query strings. No blanket redirect to the homepage should be used. The old `/book-online` path returned 404 during discovery; `/book-online/` is a new booking directory.

Legacy service hash links to `#general-ultrasound`, `#obstetric`, `#musculoskeletal` and `#vascular` are supported on the services hub, alongside the new `#pregnancy` and `#general` anchors. The paediatric category has intentionally been removed according to the latest brief. A final crawl and GSC URL export should identify any other historical URLs requiring a specific replacement or a genuine 404.

The old Body 2 Baby referral PDF URL requires a client-approved replacement before a redirect can be mapped. Do not replace it with an unrelated page. No host-specific redirect file is committed until the deployment host and full historic URL inventory are confirmed.
