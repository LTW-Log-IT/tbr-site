# Team Battle Ready Gaming Trailer

Static marketing site for **Team Battle Ready** — a Central Texas car club and a mobile gaming trailer serving Killeen, Fort Cavazos, Belton, and the towns on the travel card.

Visual system: the launch flyer. Deep black and charcoal stage, electric cyan and ice blue call-to-action bars, white and metallic silver type. The mark is Joe’s **B4TTL3** brush logo: `public/brand/b4ttl3-logo-transparent.png` on the header and other light-on-dark chrome, and `public/brand/b4ttl3-logo.png` on dark panels. The values strip is **Drive · Build · Compete · Represent**. **Play · Connect · Build · Belong** can stay in body copy. No invented sponsor besides **Hakai No Kamigami**. The trailer is unwrapped. Magnets or a banner are fine. Do not show a wrap.

Soft launch books by phone: call or text **(254) 251-5219**. `/book` can also open a text or email with the request. A date is not held until Joe confirms it. Facts that are still missing are marked **[TODO: Joe]**.

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

`/book` is phone-first. The short **Request a date** form does not hold the trailer. If `contactEmail` is set in `src/config/site.ts`, submit opens `mailto:` with the fields filled in. Until that inbox exists, submit opens an SMS to (254) 251-5219 with the same note, and the page tells the guest Joe will call or text back. There is no form backend.

`SQUARE_BOOKING_URL` stays empty and is not shown. Do not add an online-booking embed for soft launch.

The planner on `/book` is a price estimate. It adds 8.25% tax. It does not check availability and it does not take the deposit.

## What Joe still has to supply

Edit these before the domain is advertised:

1. **Phone** — set to (254) 251-5219 (`phoneE164` `12542515219` in `src/config/site.ts`). Text and Call use that line.
2. **Email** — `contactEmail` in `src/config/site.ts`. When it is set, Request a date and the quote form open `mailto:`. While it is blank, Request a date opens a text to (254) 251-5219.
3. **Rate card sign-off** — prices, zones, discounts, and policies live in `src/data/pricing.ts`. They are the launch draft. Change them there; the pages read that file.
4. **Remaining measurements** — station and console counts are filled on `/the-rig` (6 Switch stations, about 4 Xbox, 3 PS5, 8 Roblox/Minecraft tablets). Generator output is 13.5 kW. Model, decibels, length, screen size, and parking footprint are still `[TODO: Joe]`.
5. **Photos** — trailer pictures are not in yet. Hero, packages, and The Rig use branded “Trailer photos coming soon” frames. Put real files in `public/photos/` after the event and replace those frames. No stock gamers. No wrapped-trailer art. No invented trailer photos. Magnets or a banner are fine. Drop the launch flyer at `public/brand/tbr-flyer-launch.png` and the home page will show it. That flyer is the color system.
6. **Storage address** — travel zones assume a Killeen base. Recompute `/areas` if the lot is somewhere else.
7. **Bio** — replace the About stub with facts you want public. No home address, no gate codes, no minors’ last names.
8. **Google Business Profile** — add the real link when it exists. Do not type a star rating or review count.
9. **Insurance and background checks** — do not claim “fully insured” or “background-checked” until those are done. Schools and units will ask for a COI and a W-9.
10. **Attorney** — have a Texas attorney read `/policies` before the first deposit.
11. **Balance** — soft launch collects the $100 deposit by phone. Do not advertise an automatic card charge.
12. **Sales tax** — quotes add 8.25%. Confirm amusement-tax treatment and the permit with the Texas Comptroller. A tax-exempt booking needs a Texas exemption certificate.
13. **Fort Cavazos access** — write only the gate steps you are allowed to publish.
14. **Past 60 miles** — travel is a quote. Do not invent a fee.
15. **No VR** — do not add a headset line. The live room is consoles and tablets.
16. **Discount** — military, first responders, and teachers get a flat $25 off the package or weekday hourly total. It does not come off travel, add-ons, or extra time.

Canonical prices live in `src/data/pricing.ts`:

| Package | Mon–Thu | Fri–Sun |
|---|---:|---:|
| Skirmish, 2 hr | $349 | $399 |
| Mission, 3 hr | $449 | $499 |
| Campaign, 4 hr | $549 | $599 |
| Full day, 6 hr | $749 | $799 |
| Full day, 8 hr | $949 | $999 |

Organization rate: $125/hr Monday–Thursday, 3-hour minimum, verified schools, churches, units, and nonprofits with a tax-exempt certificate or a purchase order. Not a residential package. Extra time is $50 per 30 minutes. Deposit is a flat $100. Travel is free within 30 miles, $50 for 31–45, and $90 for 46–60. Menu prices exclude tax. Quotes add 8.25%.

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
| `/military` | Fort Cavazos, units, schools |
| `/about` | Car club and trailer story |
| `/contact` | Text, call, quote form |
| `/faq` | Full FAQ |
| `/policies` | Draft deposit and cancellation rules |

Internal links are in the header and footer. Instagram: [@Team.Battle.Ready](https://www.instagram.com/Team.Battle.Ready/) and [@TBR.B4TTL3](https://www.instagram.com/TBR.B4TTL3/).
