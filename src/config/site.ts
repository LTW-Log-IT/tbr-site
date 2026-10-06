/**
 * Public site configuration.
 *
 * Joe: fill the blank strings before launch.
 * Do not commit payment-processor secret keys.
 * Soft launch does not use online booking.
 */

/** Unused for soft launch. Leave empty. Do not render this on the site. */
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
    "Climate-controlled mobile video game theater for up to 24 players. Birthdays, unit days, and group events in Killeen, Fort Cavazos, Temple, and Belton.",
  slogan: "The Party Shows Up Battle Ready.",
  areaLine: "Killeen · Fort Cavazos · Temple · Belton",
  /**
   * Digits only, country code included, no plus and no spaces.
   * Joe confirmed this line for every call and text CTA.
   */
  phoneE164: "12542515219",
  /** Visible formatting for (254) 251-5219. */
  phoneDisplay: "(254) 251-5219",
  /** Inbox for quote mail. Leave blank until the mailbox exists. */
  contactEmail: "",
  /** Unused. Soft-launch booking is the phone, not this field. */
  squareBookingUrl: SQUARE_BOOKING_URL,
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
  sponsor: "Hakai No Kamigami",
  values: ["Drive.", "Build.", "Compete.", "Represent."],
} as const;

export const nav = [
  { href: "/packages", label: "Packages" },
  { href: "/the-rig", label: "The Rig" },
  { href: "/military", label: "Military" },
  { href: "/areas", label: "Areas" },
  { href: "/faq", label: "FAQ" },
  { href: "/about", label: "About" },
] as const;

export function phoneReady(): boolean {
  return site.phoneE164.trim().length > 0;
}

export function callHref(): string {
  return phoneReady() ? `tel:+${site.phoneE164}` : "/contact#call";
}

export function textHref(): string {
  return phoneReady() ? `sms:+${site.phoneE164}` : "/contact#text";
}

export function phoneLabel(): string {
  return site.phoneDisplay.trim() || "(254) 251-5219";
}
