# Team Battle Ready Gaming Trailer

Static marketing site for **Team Battle Ready** — a Central Texas car club and a mobile gaming trailer serving Killeen, Fort Hood, Belton, and the towns on the travel card.

Visual system: the launch flyer. Deep black and charcoal stage, electric cyan and ice blue call-to-action bars, white and metallic silver type. The mark is Joe’s **B4TTL3** brush logo: `public/brand/b4ttl3-logo-transparent.png` on the header and other light-on-dark chrome, and `public/brand/b4ttl3-logo.png` on dark panels. The public tagline is **Play · Connect · Build · Belong**. Do not name a flyer sponsor on the site. The trailer is unwrapped. Magnets or a banner are fine. Do not show a wrap.

Soft launch books by phone: call or text **(254) 251-5219**. `/book` can also open a text or email with the request. A date is not held until Joe confirms it. Open measurements stay in this README. Do not put them on the public pages.

## Production target

| | |
|---|---|
| Domain | https://tbr.leadthewaylogistics.info |
| Repository | https://github.com/LTW-Log-IT/tbr-site |
| Branch | `main` |
| Build command | `npm run build` |
| Output folder | `dist/` |
| `base` | `/` (custom subdomain, not a GitHub project-pages subpath) |
| Domain file | `public/CNAME` → copied to `dist/CNAME` |

`public/CNAME` contains exactly:

```
tbr.leadthewaylogistics.info
```

Bridge adds the GitHub Pages deploy workflow. This repo does not include GitHub Actions. Publish the contents of `dist/` (or point Pages at that folder). Do not set Astro `base` or an asset prefix to `/tbr-site/`.

Land the code on **`LTW-Log-IT/tbr-site` `main`**.

## Run locally

Requires Node.js 22.12 or newer (22.19+ avoids an engine warning from a dependency).

```bash
npm install
npm run dev
```

The dev server prints a localhost URL (Astro’s default port is 4321).

```bash
npm run build    # writes dist/
npm run preview  # serves dist/
```

## How booking works

Primary buttons use `tel:+12542515219` and read **Call / Text to book**.

`/book` and `/contact` are the rental path. Call / Text still holds the date. Both pages share one rental form (`form_id=rental`) with name, phone, email, date, time, package, city, driveway, and notes.

`/join` is the gaming community path only. It does not book the trailer. Its form (`form_id=join`) asks for name, email, phone, Instagram, Xbox and Fortnite tags, other tags, age range, city, a guardian note, and interests.

There is no form backend until Joe pastes two different Formspree URLs into `site.forms.rental` and `site.forms.join` in `src/config/site.ts`. While those are blank, submit opens `mailto:` if `contactEmail` is set, and otherwise opens a text to (254) 251-5219. The subject and `form_id` keep rental leads separate from community members. Do not point both URLs at the same Formspree form.

`SQUARE_BOOKING_URL` stays empty. There is no booking embed. Payment checkouts live in `site.squareLinks`: the $100 deposit and Skirmish, Mission, and Campaign for weekday and weekend. `/book` lists them under Pay with Square. Package cards link the same checkouts as secondary buttons. Call / Text still holds the date. Listed prices exclude tax. Square tax may be configured separately.

The planner on `/book` is a price estimate. It adds 8.25% tax. It does not check availability and it does not take the deposit.

## What Joe still has to supply

Edit these before the domain is advertised:

1. **Phone** — set to (254) 251-5219 (`phoneE164` `12542515219` in `src/config/site.ts`). Text and Call use that line.
2. **Email and forms** — `contactEmail` opens `mailto:` for rental and join when the Formspree URLs are blank. `site.forms.rental` and `site.forms.join` are separate Formspree endpoints (`https://formspree.io/f/…`). Leave them blank until the two forms exist. Do not reuse one ID for both lists.
3. **Rate card sign-off** — prices, zones, discounts, and policies live in `src/data/pricing.ts`. They are the launch draft. Change them there; the pages read that file.
4. **Remaining measurements** — the room is 6 dedicated gaming stations (27-inch monitor, chair, and a console: Xbox Series S/X, PS5, or Switch). Certain games are 4-player multiplayer. Also about 4 Xbox, 3 PS5s, 8 stand-alone 8-inch tablets, and various games. Do not publish a simultaneous player count. Generator output is 13.5 kW. Model, decibels, and the measured parking footprint are still open.
5. **Photos** — trailer pictures are not in yet. Hero, packages, and The Rig use branded “Trailer photos coming soon” frames. Put real files in `public/photos/` after the event and replace those frames. No stock gamers. No wrapped-trailer art. No invented trailer photos. Magnets or a banner are fine. Drop the launch flyer at `public/brand/tbr-flyer-launch.png` and the home page will show it. That flyer is the color system.
6. **Storage address** — travel zones assume the trailer is stored in Killeen. Recompute `/areas` if the lot is somewhere else.
7. **Bio** — replace the About stub with facts you want public. No home address, no gate codes, no minors’ last names.
8. **Google Business Profile** — add the real link when it exists. Do not type a star rating or review count.
9. **Insurance and background checks** — do not claim “fully insured” or “background-checked” until those are done. Schools and units will ask for a COI and a W-9.
10. **Attorney** — have a Texas attorney read `/policies` before the first deposit.
11. **Balance** — the $100 deposit can be paid with the Square deposit link or arranged on the phone. Do not add a card-on-file charge.
12. **Sales tax** — quotes add 8.25%. Confirm amusement-tax treatment and the permit with the Texas Comptroller. A tax-exempt booking needs a Texas exemption certificate.
13. **Fort Hood** — an area name only. It is outside the usual cities, so travel there is by exception, not a published $0. Do not explain installation access, gates, passes, or MWR. Bookings on the site are driveway and residential.
14. **Service area** — free travel in Killeen, Copperas Cove, Harker Heights, and Nolanville (about 30 miles of Killeen). Everywhere else is by exception: approve ahead, prices vary, a 4-hour minimum may apply. Do not publish an outside fee.
15. **No VR** — do not add a headset line. The live room is consoles and tablets.
16. **Discount** — active duty, veterans, first responders, and teachers get a flat $25 off the package or weekday hourly total, once, with an ID. Discounts do not stack. It does not come off travel, add-ons, or extra time. Square links stay the full package price. Call or text to apply the $25.

Canonical prices live in `src/data/pricing.ts`:

| Package | Mon–Thu | Fri–Sun |
|---|---:|---:|
| Skirmish, 2 hr | $349 | $399 |
| Mission, 3 hr | $449 | $499 |
| Campaign, 4 hr | $549 | $599 |
| Full day, 6 hr | $749 | $799 |
| Full day, 8 hr | $949 | $999 |

Organization rate: $125/hr Monday–Thursday, 3-hour minimum, verified schools, churches, units, and nonprofits with a tax-exempt certificate or a purchase order. Not a residential package. Extra time is $50 per 30 minutes. Deposit is a flat $100. Travel is free in Killeen, Copperas Cove, Harker Heights, and Nolanville. Outside those cities, trips are by exception: approve ahead, prices vary, and a 4-hour minimum may apply. Do not publish an outside fee. Menu prices exclude tax. Quotes add 8.25%. Do not market invoicing or purchase orders as a welcome perk. The trailer is still under construction, and rental availability is limited until it is complete.

Domain DNS for `tbr.leadthewaylogistics.info` is Bridge’s job. Do not change `site` or `base` in `astro.config.mjs` unless the hostname changes.

## Same `dist/` folder on other hosts

GitHub Pages on this domain is the locked target. If you ever move:

- **Cloudflare Pages** — build command `npm run build`, output directory `dist`, custom domain in the Cloudflare dashboard. You can ignore `CNAME` (that file is for GitHub Pages).
- **Netlify** — same build command and `dist` publish directory. Set the custom domain in Netlify. No `base` change.

## Pages

| Path | What it is |
|---|---|
| `/` | Home, package cards, date check, FAQ, book CTA |
| `/packages` | Comparison, add-ons, travel, discounts, deposit summary |
| `/book` | Call / text, request form, price estimate |
| `/the-rig` | Spec sheet with open measurements |
| `/areas` | Zone and town list |
| `/areas/killeen` | Sample city page |
| `/military` | Fort Hood, units, schools |
| `/about` | Car club and trailer story |
| `/contact` | Text, call, quote form |
| `/faq` | Full FAQ |
| `/policies` | Draft deposit and cancellation rules |

Internal links are in the header and footer. Instagram: [@Team.Battle.Ready](https://www.instagram.com/Team.Battle.Ready/) and [@TBR.B4TTL3](https://www.instagram.com/TBR.B4TTL3/).
