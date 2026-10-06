/** Canonical rate card. Weekday is Mon–Thu. Weekend is Fri–Sun. Prices exclude 8.25% tax. */

export type ZoneId = "free" | "beyond";
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
  /** Null means outside the usual cities: no published fee. By exception. */
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
  { id: "free", name: "Usual area", miles: "Killeen, Copperas Cove, Harker Heights, Nolanville", fee: 0 },
  { id: "beyond", name: "Outside that area", miles: "By exception", fee: null },
] as const;

/** Named default. About 30 miles of Killeen. Travel is free. */
export const SERVICE_AREA_NOTE =
  "The usual area is Killeen, Copperas Cove, Harker Heights, and Nolanville, within about 30 miles of Killeen. Travel there is free.";

/** Public copy for any pin outside those cities. No dollar amount. */
export const BEYOND_30_NOTE =
  "Outside that area, trips are by exception only. They have to be coordinated and approved ahead of time. Prices vary. A minimum of 4 hours may be required.";

const outsideBlurb =
  "Outside the usual cities. By exception only. Approve ahead. Prices vary. A 4-hour minimum may apply.";

const sharedIncludes = [
  "Trailer, coach, setup, and cleanup",
  "6 dedicated gaming stations",
  "Each station: 27-inch gaming monitor, gaming chair, and a console (Xbox Series S/X, PS5, or Switch)",
  "Certain games are 4-player multiplayer",
  "About 4 Xbox, 3 PS5s, and various games",
  "8 stand-alone 8-inch tablets for younger kids (Roblox and Minecraft)",
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
    includes: [...sharedIncludes, "Same trailer for the full six hours"],
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
    includes: [...sharedIncludes, "Same trailer for the full eight hours"],
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
    detail: "Younger-kids setup. The trailer already carries 8 stand-alone 8-inch tablets for Roblox and Minecraft.",
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
  { id: "killeen", name: "Killeen", zoneId: "free", fee: 0, href: "/areas/killeen", blurb: "Usual area. Travel is free. The trailer is stored in Killeen." },
  { id: "copperas-cove", name: "Copperas Cove", zoneId: "free", fee: 0, blurb: "Usual area, west of Killeen. Travel is free." },
  { id: "harker-heights", name: "Harker Heights", zoneId: "free", fee: 0, blurb: "Usual area, next to Killeen. Travel is free." },
  { id: "nolanville", name: "Nolanville", zoneId: "free", fee: 0, blurb: "Usual area. Travel is free." },
  { id: "fort-hood", name: "Fort Hood", zoneId: "beyond", fee: null, blurb: "Outside the usual cities. Driveway bookings are by exception only. Approve ahead. Prices vary. A 4-hour minimum may apply." },
  { id: "belton", name: "Belton", zoneId: "beyond", fee: null, blurb: outsideBlurb },
  { id: "kempner", name: "Kempner", zoneId: "beyond", fee: null, blurb: outsideBlurb },
  { id: "temple", name: "Temple", zoneId: "beyond", fee: null, blurb: outsideBlurb },
  { id: "salado", name: "Salado", zoneId: "beyond", fee: null, blurb: outsideBlurb },
  { id: "gatesville", name: "Gatesville", zoneId: "beyond", fee: null, blurb: outsideBlurb },
  { id: "lampasas", name: "Lampasas", zoneId: "beyond", fee: null, blurb: outsideBlurb },
  { id: "florence", name: "Florence", zoneId: "beyond", fee: null, blurb: outsideBlurb },
  { id: "jarrell", name: "Jarrell", zoneId: "beyond", fee: null, blurb: outsideBlurb },
  { id: "troy", name: "Troy", zoneId: "beyond", fee: null, blurb: outsideBlurb },
  { id: "georgetown", name: "Georgetown", zoneId: "beyond", fee: null, blurb: outsideBlurb },
  { id: "moody", name: "Moody", zoneId: "beyond", fee: null, blurb: outsideBlurb },
  { id: "burnet", name: "Burnet", zoneId: "beyond", fee: null, blurb: outsideBlurb },
  { id: "waco", name: "Waco", zoneId: "beyond", fee: null, blurb: outsideBlurb },
  { id: "round-rock", name: "Round Rock", zoneId: "beyond", fee: null, blurb: outsideBlurb },
  { id: "cedar-park", name: "Cedar Park", zoneId: "beyond", fee: null, blurb: outsideBlurb },
  { id: "leander", name: "Leander", zoneId: "beyond", fee: null, blurb: outsideBlurb },
  { id: "hutto", name: "Hutto", zoneId: "beyond", fee: null, blurb: outsideBlurb },
];

export function zoneFor(zoneId: ZoneId) {
  return zones.find((zone) => zone.id === zoneId) ?? zones[0];
}

export function findPackage(id: string) {
  return packages.find((item) => item.id === id);
}

export function feeLabel(fee: number | null): string {
  if (fee === null) return "By exception";
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
  let townName = "Outside the usual area";
  if (town) {
    townName = town.name;
    if (town.fee === 0) {
      lines.push({
        label: `Travel · ${town.name}`,
        amount: 0,
      });
    } else {
      notes.push(`${town.name} is outside Killeen, Copperas Cove, Harker Heights, and Nolanville. ${BEYOND_30_NOTE} Travel is not in this total.`);
    }
  } else {
    notes.push(`${BEYOND_30_NOTE} Travel is not in this total.`);
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
    townName: town?.name ?? "Outside the usual area",
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
