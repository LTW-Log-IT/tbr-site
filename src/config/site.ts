/**
 * Public site configuration.
 *
 * Do not commit payment-processor secret keys.
 * A date is still held on the phone. Square links below are payment checkouts only.
 */

/** No booking widget. Leave empty. Do not render this on the site. */
export const SQUARE_BOOKING_URL = "";

export const site = {
  name: "Team Battle Ready Gaming Trailer",
  shortName: "Team Battle Ready",
  mark: "B4TTL3",
  leet: "B4TTL3",
  logo: {
    chrome: "/brand/b4ttl3-logo-transparent.png",
    plate: "/brand/b4ttl3-logo.png",
  },
  domain: "tbr.leadthewaylogistics.info",
  url: "https://tbr.leadthewaylogistics.info",
  repo: "https://github.com/LTW-Log-IT/tbr-site",
  description:
    "Mobile game room with 6 dedicated gaming stations. Birthdays, BBQs, and game nights in Killeen, Copperas Cove, Harker Heights, and Nolanville. The trailer is still under construction.",
  slogan: "The Party Shows Up Battle Ready.",
  tagline: "Play · Connect · Build · Belong",
  parent: {
    name: "Lead the Way Logistics & IT LLC",
    href: "https://leadthewaylogistics.info",
  },
  areaLine: "Killeen · Copperas Cove · Harker Heights · Nolanville",
  constructionNote:
    "The gaming trailer is still under construction. Rental availability is limited until it is complete.",
  /** Not live. Do not describe the cabin as climate-controlled. */
  climateNote:
    "Climate control (A/C and heat) is being installed as part of the build. It is not live yet.",
  /**
   * Digits only, country code included, no plus and no spaces.
   * Joe confirmed this line for every call and text CTA.
   */
  phoneE164: "12542515219",
  /** Visible formatting for (254) 251-5219. */
  phoneDisplay: "(254) 251-5219",
  /** Inbox for quote mail. Leave blank until the mailbox exists. */
  contactEmail: "",
  /**
   * Optional Formspree endpoints. Leave blank until Joe creates two forms.
   * Rental and community must be different IDs so the lists stay separate.
   * Example: "https://formspree.io/f/abcdwxyz"
   */
  forms: {
    rental: "",
    join: "",
  },
  /** Unused. There is no booking embed. Payment links are squareLinks. */
  squareBookingUrl: SQUARE_BOOKING_URL,
  squareLinks: {
    skirmishWeekday: "https://square.link/u/21bQRel6",
    skirmishWeekend: "https://square.link/u/5R7cP5FD",
    missionWeekday: "https://square.link/u/9wDVTX7l",
    missionWeekend: "https://square.link/u/lz1PWoJw",
    campaignWeekday: "https://square.link/u/3Ynzwgh7",
    campaignWeekend: "https://square.link/u/uAEwAXqA",
    deposit: "https://square.link/u/46Ep3lcE",
  },
  instagram: [
    {
      handle: "@Team.Battle.Ready",
      href: "https://instagram.com/Team.Battle.Ready",
    },
    {
      handle: "@TBR.B4TTL3",
      href: "https://instagram.com/TBR.B4TTL3",
    },
  ],
  values: ["Play.", "Connect.", "Build.", "Belong."],
} as const;

export const primaryNav = [
  { href: "/packages", label: "Packages" },
  { href: "/faq", label: "FAQ" },
] as const;

/** Pages that stay off the top bar. Linked from the footer. */
export const footerNav = [
  { href: "/book", label: "Book" },
  { href: "/contact", label: "Contact" },
  { href: "/join", label: "Join TBR" },
  { href: "/packages", label: "Packages" },
  { href: "/faq", label: "FAQ" },
  { href: "/areas", label: "Areas" },
  { href: "/gallery", label: "Gallery" },
  { href: "/policies", label: "Policies" },
  { href: "/the-rig", label: "The Rig" },
  { href: "/military", label: "Military" },
  { href: "/about", label: "About" },
] as const;

export const nav = footerNav;

export function phoneReady(): boolean {
  return site.phoneE164.trim().length > 0;
}

export function callHref(): string {
  return phoneReady() ? `tel:+${site.phoneE164}` : "/contact#call";
}

export function textHref(): string {
  return phoneReady() ? `sms:+${site.phoneE164}` : "/contact#text";
}

/** Text with the three things Joe needs before he can confirm a day. */
export function textDateHref(): string {
  if (!phoneReady()) return "/contact#text";
  const body = "Date:\nAddress:\nPackage:";
  return `sms:+${site.phoneE164}?body=${encodeURIComponent(body)}`;
}

export function phoneLabel(): string {
  return site.phoneDisplay.trim() || "(254) 251-5219";
}

const squarePackageKey = {
  skirmish: { weekday: "skirmishWeekday", weekend: "skirmishWeekend" },
  mission: { weekday: "missionWeekday", weekend: "missionWeekend" },
  campaign: { weekday: "campaignWeekday", weekend: "campaignWeekend" },
} as const;

export function squarePackageHref(id: string, day: "weekday" | "weekend"): string | undefined {
  if (!(id in squarePackageKey)) return undefined;
  const key = squarePackageKey[id as keyof typeof squarePackageKey][day];
  return site.squareLinks[key];
}
