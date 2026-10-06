/** Canonical rate card. Weekday is Mon–Thu. Weekend is Fri–Sun. Prices exclude 8.25% tax. */

export type ZoneId = "free" | "mid" | "outer" | "quote";
export type PackageGroup = "priced" | "hourly";

export interface CatalogPackage {
  id: string;
  name: string;
  group: PackageGroup;
  minutes: number;
  timeLabel: string;
  /** Weekday Mon–Thu price. Hourly packages store the per-hour rate here. */
  weekdayPrice: number;
  /** Weekend Fri–Sun price. Null on the weekday hourly group rate. */
  weekendPrice: number | null;
  hourly?: boolean;
  summary: string;
  includes: string[];
  note?: string;
}

export interface Town {
  id: string;
  name: string;
  zoneId: ZoneId;
  /** Null means past 60 miles: quote, no published fee. */
  fee: number | null;
  blurb: string;
  href?: string;
}

export interface Addon {
  id: string;
  name: string;
  price: number;
  detail: string;
}

export const TAX_RATE = 0.0825;
export const DEPOSIT = 100;
export const EXTRA_HALF_HOUR = 50;
export const GROUP_HOURLY = 125;
export const GROUP_MIN_HOURS = 3;
export const COMMUNITY_DISCOUNT = 25;

export const zones = [
  { id: "free", name: "Within 30 miles", miles: "0–30 miles", fee: 0 },
  { id: "mid", name: "31–45 miles", miles: "31–45 miles", fee: 50 },
  { id: "outer", name: "46–60 miles", miles: "46–60 miles", fee: 90 },
  { id: "quote", name: "Past 60 miles", miles: "61+ miles", fee: null },
] as const;

const sharedIncludes = [
  "Trailer, coach, setup, and cleanup",
  "Up to 24 players at a time",
  "6 stations: monitor, chair, and a console (Xbox Series S/X, PS5, or Switch)",
  "About 4 Xbox, 3 PS5s, 8 eight-inch tablets, and various games",
];

export const packages: CatalogPackage[] = [
  {
    id: "skirmish",
    name: "Skirmish",
    group: "priced",
    minutes: 120,
    timeLabel: "2 hr",
    weekdayPrice: 349,
    weekendPrice: 399,
    summary: "Two hours. Weekdays are $349. Friday through Sunday is $399.",
    includes: sharedIncludes,
  },
  {
    id: "mission",
    name: "Mission",
    group: "priced",
    minutes: 180,
    timeLabel: "3 hr",
    weekdayPrice: 449,
    weekendPrice: 499,
    summary: "Three hours. Weekdays are $449. Friday through Sunday is $499.",
    includes: sharedIncludes,
  },
  {
    id: "campaign",
    name: "Campaign",
    group: "priced",
    minutes: 240,
    timeLabel: "4 hr",
    weekdayPrice: 549,
    weekendPrice: 599,
    summary: "Four hours. Weekdays are $549. Friday through Sunday is $599.",
    includes: sharedIncludes,
  },
  {
    id: "full-6",
    name: "Full day",
    group: "priced",
    minutes: 360,
    timeLabel: "6 hr",
    weekdayPrice: 749,
    weekendPrice: 799,
    summary: "Six hours for schools, units, and long parties. $749 weekday, $799 weekend.",
    includes: [...sharedIncludes, "Rotations through the same room"],
  },
  {
    id: "full-8",
    name: "Full day",
    group: "priced",
    minutes: 480,
    timeLabel: "8 hr",
    weekdayPrice: 949,
    weekendPrice: 999,
    summary: "Eight hours. $949 weekday, $999 weekend.",
    includes: [...sharedIncludes, "Built for festivals and all-day events"],
  },
  {
    id: "group",
    name: "Group rate",
    group: "hourly",
    minutes: 180,
    timeLabel: "$125/hr · Mon–Thu · 3 hr min · verified orgs",
    weekdayPrice: 125,
    weekendPrice: null,
    hourly: true,
    summary:
      "Verified organizations only. Schools, churches, units, and nonprofits with a tax-exempt certificate or a purchase order. Not a birthday or home-party price.",
    includes: [
      "Verified organizations only",
      "$125 per hour, Monday–Thursday",
      "Three-hour minimum",
      "Tax-exempt certificate or purchase order",
      "Residential parties use Skirmish, Mission, Campaign, or a full day",
    ],
    note: "Not offered for home parties. Friday–Sunday uses a named package.",
  },
];

export const pricedPackages = packages.filter((item) => item.group === "priced");
export const partyPackages = pricedPackages;
export const groupPackage = packages.find((item) => item.id === "group")!;

export const addons: Addon[] = [
  {
    id: "toddler",
    name: "Toddler zone",
    price: 75,
    detail: "Younger-kids setup. The trailer already carries 8 eight-inch tablets for Roblox and Minecraft.",
  },
  {
    id: "tournament",
    name: "Tournament pack",
    price: 40,
    detail: "Add-on. Not included in the package price.",
  },
  {
    id: "dogtag",
    name: "Dog-tag favors",
    price: 30,
    detail: "One flat price for the set, not per guest.",
  },
  {
    id: "yard",
    name: "Yard games",
    price: 25,
    detail: "Outside the trailer.",
  },
];

export const discounts = [
  { id: "none", label: "No discount" },
  {
    id: "community",
    label: "Military, veteran, first responder, or teacher — $25 off once, ID",
  },
] as const;

export const startWindows = [
  { id: "10:00", label: "10:00 AM" },
  { id: "13:30", label: "1:30 PM" },
  { id: "16:30", label: "4:30 PM" },
  { id: "18:00", label: "6:00 PM" },
  { id: "19:30", label: "7:30 PM" },
  { id: "other", label: "Another time — I’ll explain in the note" },
] as const;

export const towns: Town[] = [
  { id: "killeen", name: "Killeen", zoneId: "free", fee: 0, href: "/areas/killeen", blurb: "Stored in Killeen. Travel is free inside 30 miles." },
  { id: "fort-hood", name: "Fort Hood", zoneId: "free", fee: 0, blurb: "Inside 30 miles, same as Killeen. Driveway bookings in the area." },
  { id: "harker-heights", name: "Harker Heights", zoneId: "free", fee: 0, blurb: "Next to Killeen. Free travel." },
  { id: "nolanville", name: "Nolanville", zoneId: "free", fee: 0, blurb: "Between Killeen and Belton. Free travel." },
  { id: "copperas-cove", name: "Copperas Cove", zoneId: "free", fee: 0, blurb: "West of Killeen, inside 30 miles." },
  { id: "belton", name: "Belton", zoneId: "free", fee: 0, blurb: "The square and the UMHB area stay inside the free radius." },
  { id: "kempner", name: "Kempner", zoneId: "free", fee: 0, blurb: "West of the Cove. Free travel on this card." },
  { id: "temple", name: "Temple", zoneId: "mid", fee: 50, blurb: "31–45 miles on this card. $50. A pin at 30 miles or under is free." },
  { id: "salado", name: "Salado", zoneId: "mid", fee: 50, blurb: "South of Belton. 31–45 mile band, $50." },
  { id: "gatesville", name: "Gatesville", zoneId: "mid", fee: 50, blurb: "West into Coryell County. $50." },
  { id: "lampasas", name: "Lampasas", zoneId: "mid", fee: 50, blurb: "31–45 mile band, $50." },
  { id: "florence", name: "Florence", zoneId: "mid", fee: 50, blurb: "Toward Williamson County. $50." },
  { id: "jarrell", name: "Jarrell", zoneId: "mid", fee: 50, blurb: "Between Salado and Georgetown. $50." },
  { id: "troy", name: "Troy", zoneId: "mid", fee: 50, blurb: "East of Temple. $50." },
  { id: "georgetown", name: "Georgetown", zoneId: "outer", fee: 90, blurb: "46–60 miles. $90." },
  { id: "moody", name: "Moody", zoneId: "outer", fee: 90, blurb: "Toward Waco. 46–60 mile band, $90." },
  { id: "burnet", name: "Burnet", zoneId: "outer", fee: 90, blurb: "Hill Country side. $90." },
  { id: "waco", name: "Waco", zoneId: "quote", fee: null, blurb: "Sits on the far side of 60 miles. Past 60 is a quote, not a flat fee." },
  { id: "round-rock", name: "Round Rock", zoneId: "quote", fee: null, blurb: "Past 60 miles. Travel is a quote." },
  { id: "cedar-park", name: "Cedar Park", zoneId: "quote", fee: null, blurb: "Past 60 miles. Travel is a quote." },
  { id: "leander", name: "Leander", zoneId: "quote", fee: null, blurb: "Past 60 miles. Travel is a quote." },
  { id: "hutto", name: "Hutto", zoneId: "quote", fee: null, blurb: "Past 60 miles. Travel is a quote." },
];

export function zoneFor(zoneId: ZoneId) {
  return zones.find((zone) => zone.id === zoneId) ?? zones[0];
}

export function findPackage(id: string) {
  return packages.find((item) => item.id === id);
}

export function feeLabel(fee: number | null): string {
  if (fee === null) return "Quote";
  return money(fee);
}

export function money(amount: number): string {
  const rounded = Math.round(amount * 100) / 100;
  const whole = Math.abs(rounded - Math.trunc(rounded)) < 0.001;
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: whole ? 0 : 2,
    maximumFractionDigits: 2,
  }).format(rounded);
}

function toCents(amount: number): number {
  return Math.round(amount * 100);
}

function fromCents(cents: number): number {
  return cents / 100;
}

/** 8.25% rounded to the nearest cent. */
export function taxOnCents(subtotalCents: number): number {
  return Math.round((subtotalCents * 825) / 10000);
}

export type RateKind = "weekday" | "weekend" | "unset";

export function rateKind(date?: string): RateKind {
  if (!date || !/^\d{4}-\d{2}-\d{2}$/.test(date)) return "unset";
  const day = new Date(`${date}T12:00:00`).getDay();
  if (day === 0 || day === 5 || day === 6) return "weekend";
  return "weekday";
}

export interface EstimateLine {
  label: string;
  amount: number;
}

export interface EstimateResult {
  packageId: string;
  packageName: string;
  townName: string;
  lines: EstimateLine[];
  notes: string[];
  available: boolean;
  subtotal: number;
  tax: number;
  total: number;
  deposit: number;
  balance: number;
}

export function buildEstimate(input: {
  packageId: string;
  townId: string;
  discount: string;
  addonIds: string[];
  extraHalfHours?: number;
  groupHours?: number;
  date?: string;
}): EstimateResult | null {
  const pkg = findPackage(input.packageId);
  if (!pkg) return null;

  const notes: string[] = [];
  const kind = rateKind(input.date);
  const lines: EstimateLine[] = [];

  if (pkg.hourly) {
    notes.push(
      "Verified organizations only: schools, churches, units, and nonprofits with a tax-exempt certificate or a purchase order. Not for residential parties.",
    );
    if (kind === "weekend") {
      notes.push("The $125/hr organization rate is Monday–Thursday only. Friday–Sunday uses Skirmish, Mission, Campaign, or a full day.");
      return emptyEstimate(pkg, input.townId, notes);
    }
    const requested = Number.isFinite(input.groupHours) ? Math.floor(input.groupHours ?? 0) : 0;
    const hours = Math.max(GROUP_MIN_HOURS, requested);
    if (requested < GROUP_MIN_HOURS) {
      notes.push(`The group rate has a ${GROUP_MIN_HOURS}-hour minimum, so this quote uses ${hours} hours.`);
    }
    if (kind === "unset") {
      notes.push("No date yet. This hourly rate applies only Monday–Thursday.");
    }
    lines.push({ label: `Group rate · ${hours} hr × ${money(GROUP_HOURLY)}`, amount: hours * GROUP_HOURLY });
  } else {
    const weekend = kind !== "weekday";
    const amount = weekend ? pkg.weekendPrice ?? pkg.weekdayPrice : pkg.weekdayPrice;
    const when = kind === "weekday" ? "Mon–Thu" : kind === "weekend" ? "Fri–Sun" : "Fri–Sun rate until you pick a date";
    lines.push({ label: `${pkg.name} · ${pkg.timeLabel} · ${when}`, amount });
    if (kind === "unset") {
      notes.push(`Monday–Thursday for this package is ${money(pkg.weekdayPrice)}. This quote uses the Friday–Sunday price until a date is chosen.`);
    }
  }

  if (input.discount === "community") {
    lines.push({ label: "Military, first responder, or teacher", amount: -COMMUNITY_DISCOUNT });
    notes.push("$25 off once with an ID. Discounts do not stack. Travel, add-ons, and extra time stay full price. Square charges the full package price. Call or text to apply the discount.");
  }

  const selected = new Set(input.addonIds);
  for (const addon of addons) {
    if (selected.has(addon.id)) lines.push({ label: addon.name, amount: addon.price });
  }

  const halves = Number.isFinite(input.extraHalfHours) ? Math.max(0, Math.floor(input.extraHalfHours ?? 0)) : 0;
  if (halves > 0) {
    lines.push({
      label: `Extra time · ${halves} × 30 min`,
      amount: halves * EXTRA_HALF_HOUR,
    });
    notes.push("Extra time is only if the next slot is open.");
  }

  const town = towns.find((item) => item.id === input.townId);
  let townName = "Past 60 miles";
  if (town) {
    townName = town.name;
    if (town.fee === null) {
      notes.push(`${town.name} is past 60 miles. Travel is a quote and is not in this total.`);
    } else {
      const zone = zoneFor(town.zoneId);
      lines.push({
        label: town.fee === 0 ? `Travel · ${town.name} (within 30 mi)` : `Travel · ${town.name} (${zone.miles})`,
        amount: town.fee,
      });
    }
  } else {
    notes.push("Past 60 miles, travel is a quote and is not in this total.");
  }

  const subtotalCents = lines.reduce((sum, line) => sum + toCents(line.amount), 0);
  const taxCents = taxOnCents(subtotalCents);
  const totalCents = subtotalCents + taxCents;
  const depositCents = toCents(DEPOSIT);
  let balanceCents = totalCents - depositCents;
  if (balanceCents < 0) {
    balanceCents = 0;
    notes.push("The deposit is capped at the total.");
  }

  notes.push("Prices exclude tax. This quote adds 8.25%.");

  return {
    packageId: pkg.id,
    packageName: pkg.name,
    townName,
    lines,
    notes,
    available: true,
    subtotal: fromCents(subtotalCents),
    tax: fromCents(taxCents),
    total: fromCents(totalCents),
    deposit: fromCents(depositCents),
    balance: fromCents(balanceCents),
  };
}

function emptyEstimate(pkg: CatalogPackage, townId: string, notes: string[]): EstimateResult {
  const town = towns.find((item) => item.id === townId);
  return {
    packageId: pkg.id,
    packageName: pkg.name,
    townName: town?.name ?? "Past 60 miles",
    lines: [],
    notes,
    available: false,
    subtotal: 0,
    tax: 0,
    total: 0,
    deposit: DEPOSIT,
    balance: 0,
  };
}
