# Team Battle Ready Gaming Trailer

Static marketing site for **Team Battle Ready** — a Central Texas car club and a mobile gaming trailer serving Killeen, Fort Cavazos, Belton, and the towns on the travel card.

Visual system: navy stage, blue and red marks, white type. Typographic **TBR** and **B4TTL3** only. The tagline is **Play · Connect · Build · Belong**. A black-and-cyan car-club flyer is not the color source of truth. No invented sponsor besides **Hakai No Kamigami**. The trailer is unwrapped. Magnets or a banner are fine. Do not show a wrap.

The site is a pre-launch scaffold. A date is not held until a deposit is paid in Square. Facts that are still missing are marked **[TODO: Joe]**.

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

## Where the Square embed goes

1. Open `src/pages/book.astro`.
2. Find the comment `PASTE THE SQUARE EMBED`.
3. Paste only the public Square Appointments widget snippet (the `div` and `script` from **Appointments → Online Booking → Embed**).
4. Remove the placeholder block inside `#square-appointments-embed` once the snippet is in.
5. Set `squareBookingUrl` in `src/config/site.ts` to the **hosted public booking page** so the fallback button works if the embed is blocked.

Do **not** commit Square API keys, access tokens, webhook secrets, or application secrets. A public booking URL and the embed snippet are not secrets.

The planner on `/book` is a price estimate. It does not check live availability and it does not take the deposit. Square does.

## What Joe still has to supply

Edit these before the domain is advertised:

1. **Phone** — set to (254) 251-5219 (`phoneE164` `12542515219` in `src/config/site.ts`). Text and Call use that line.
2. **Email** — `contactEmail` in the same file. The quote form builds a message and opens `mailto:` only after this is set.
3. **Square** — set `SQUARE_BOOKING_URL` in `src/config/site.ts` to the public Appointments page. That one line fills `squareBookingUrl`. Paste the embed in `src/pages/book.astro`. No API keys. Book and call stay on `/book` and (254) 251-5219 until that URL exists.
4. **Rate card sign-off** — prices, zones, discounts, and policies live in `src/data/pricing.ts`. They are the launch draft. Change them there; the pages read that file.
5. **Remaining measurements** — station and console counts are filled on `/the-rig` (6 Switch stations, about 4 Xbox, 3 PS5, 8 Roblox/Minecraft tablets). Generator output is 13.5 kW. Model, decibels, length, screen size, and parking footprint are still `[TODO: Joe]`.
6. **Photos** — trailer pictures are not in yet. Hero, packages, and The Rig use branded “Trailer photos coming soon” frames. Put real files in `public/photos/` after the event and replace those frames. No stock gamers. No wrapped-trailer art. No invented trailer photos. Magnets or a banner are fine. Optional launch flyer: `public/brand/tbr-flyer-launch.png` (the home page shows it if that file exists). That flyer is not the color system.
7. **Storage address** — travel zones assume a Killeen base. Recompute `/areas` if the lot is somewhere else.
8. **Bio** — replace the About stub with facts you want public. No home address, no gate codes, no minors’ last names.
9. **Google Business Profile** — add the real link when it exists. Do not type a star rating or review count.
10. **Insurance and background checks** — do not claim “fully insured” or “background-checked” until those are done. Schools and units will ask for a COI and a W-9.
11. **Attorney** — have a Texas attorney read `/policies` before the first deposit.
12. **Square settings** — the policy says the balance charges 48 hours out. Make Square do that, or change the sentence.
13. **Sales tax** — quotes add 8.25%. Confirm amusement-tax treatment and the permit with the Texas Comptroller. A tax-exempt booking needs a Texas exemption certificate.
14. **Fort Cavazos access** — write only the gate steps you are allowed to publish.
15. **Past 60 miles** — travel is a quote. Do not invent a fee.
16. **No VR** — do not add a headset line. The live room is consoles and tablets.
17. **Discount** — military, first responders, and teachers get a flat $25 off the package or weekday hourly total. It does not come off travel, add-ons, or extra time.

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
| `/book` | Estimate + Square embed slot |
| `/the-rig` | Spec sheet with open measurements |
| `/areas` | Zone and town list |
| `/areas/killeen` | Sample city page |
| `/military` | Fort Cavazos, units, schools |
| `/about` | Car club and trailer story |
| `/contact` | Text, call, quote form |
| `/faq` | Full FAQ |
| `/policies` | Draft deposit and cancellation rules |

Internal links are in the header and footer. Instagram: [@Team.Battle.Ready](https://www.instagram.com/Team.Battle.Ready/) and [@TBR.B4TTL3](https://www.instagram.com/TBR.B4TTL3/).
