# Review and launch checklist

## Source hierarchy

Latest September 2026 written agreement and client content/pricing/appointment documents take precedence over the older proposal and current website. Source documents remain in the client Drive project folder; raw correspondence is not stored in this repository.

## Client approval required before public launch

- [ ] Review every examination description and preparation instruction, including fasting, bladder instructions, diabetes advice and vascular preparation.
- [ ] Review the new service-page clinical copy in `src/data/services.ts`: what each examination assesses, when it may be requested, what to expect (including the transvaginal consent wording), referral requirements by category and the urgent-care safety notes on wellbeing, scrotal, DVT and carotid pages. Drafted from general sonography practice, not supplied by the client.
- [ ] Confirm whether gender and 3D / 4D (non-diagnostic) scans need a referral. The brief states all scans require a referral; these pages currently ask patients to confirm with reception.
- [ ] Approve prices, eligible NZ maternity definition, $30 Community Services Card scope, ACC contributions and payment methods.
- [ ] Resolve the non-eligible maternity price conflict: content brief mentions $320; pricing PDF does not confirm it. Website currently asks patients to contact reception.
- [ ] Confirm anatomy, 3D / 4D and combined growth + 3D / 4D availability. Current site and new price list differ. These pages currently direct users to enquire.
- [ ] Confirm support-person age wording (brief says 16+; policy says over 16). Website uses “adult support person” pending approval.
- [ ] Approve $50 cancellation fee, 24-hour notice, late-arrival, rescan and outstanding-payment policy wording.
- [ ] Confirm opening hours. No unverified opening hours are published.
- [ ] Confirm clinic legal/privacy wording, third-party booking and Google map use, analytics choice and health-record contact process. The website privacy page describes website behaviour; it is not a full clinic health-information policy.
- [ ] Confirm reuse rights for examination photographs inherited from the current website; stock Pexels and genuine clinic sources are recorded separately.
- [ ] Supply staff names, qualifications, current accreditations and genuine portraits if desired. No credential logos or invented staff are published.
- [ ] Supply permissioned patient reviews if desired. No review quotes or review schema is published without evidence.
- [ ] Supply a current branded referral PDF and approved secure referral process. No eReferral form or PACS portal URL was supplied; referrers currently email or call reception. Add the URLs to `site.referral` in `src/data/site.ts` and the eReferral, referral form and PACS buttons appear on the referrers page automatically.
- [ ] Clarify the unfinished “Place Our Affiliator’s” item at the end of the content brief (affiliations or partner logos).

## Functional and launch review

- [ ] Confirm each TidyCal appointment type, clinical timing, pricing, duration and preparation against the approved service data. Links were recovered from the existing website; no appointment was booked during development.
- [ ] Choose links for pelvic, renal tract, scrotal, DVT and other enquiries after client confirmation. Ambiguous legacy TidyCal slugs were not guessed.
- [ ] Review desktop/mobile appearance, keyboard navigation, screen-reader navigation, links, image crops and text size. Check the real contact details and map location.
- [ ] Final URL crawl and redirect mapping against the previous site and Search Console. Preserve the five existing primary paths. See URL migration notes.
- [ ] Confirm hosting, DNS, HTTPS, www canonical redirect, custom 404 behaviour, preview access and rollback snapshot.
- [ ] Keep review builds private; noindex is an indexing instruction, not access control.
- [ ] Obtain GA4 property ID and GSC access if analytics/search setup is wanted at launch. Review enhanced measurement, query-string collection, consent and privacy requirements before enabling.
- [ ] After approval set `PUBLIC_SITE_INDEXABLE=true`, rebuild, inspect robots, canonical metadata and sitemap locally, then deploy the approved output.
- [ ] User performs production verification unless explicitly delegated.

## Checks completed during implementation

See the delivery report for local build, Astro check, dependency audit and generated-output audit results. These do not establish client clinical approval or production deployment.
