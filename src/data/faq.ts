export interface FaqItem {
  id: string;
  question: string;
  paragraphs: string[];
  href?: string;
  linkLabel?: string;
  home?: boolean;
}

export const faqs: FaqItem[] = [
  {
    id: "cost",
    home: true,
    question: "How much does a party cost?",
    paragraphs: [
      "Skirmish is 2 hours at $349 Monday–Thursday and $399 Friday–Sunday. Mission is 3 hours at $449 / $499. Campaign is 4 hours at $549 / $599. A 6-hour full day is $749 / $799. An 8-hour full day is $949 / $999. Extra time is $50 per 30 minutes when the next slot is open.",
      "Home parties use those packages. Prices on the card exclude tax. The booking quote adds 8.25% for taxable jobs. Tax is not built into the menu price.",
      "Travel is separate. It is free within 30 miles, $50 from 31–45 miles, and $90 from 46–60 miles. Past 60 miles is a quote.",
    ],
    href: "/packages",
    linkLabel: "See the full rate card",
  },
  {
    id: "deposit",
    home: true,
    question: "What is the deposit, and how do cancellations work?",
    paragraphs: [
      "The deposit is a flat $100 on every booking. Package length, add-ons, travel, and the $25 discount do not change it.",
      "Cancel 14 or more days out and the deposit is refunded in full. Cancel 3 to 13 days out and the deposit becomes a credit good for 12 months, not cash. Cancel inside 72 hours and the deposit is forfeited.",
      "Call or text (254) 251-5219 to hold the date with the $100 deposit. Joe will call you back. The quote total is the package, travel, add-ons, and extra time, then 8.25% tax. The balance is due before the event.",
    ],
    href: "/policies",
    linkLabel: "Read the draft policy in plain English",
  },
  {
    id: "travel",
    home: true,
    question: "Do you charge travel in Killeen, Fort Cavazos, or Belton?",
    paragraphs: [
      "Not when the pin is within 30 miles. Killeen, Fort Cavazos, Harker Heights, Nolanville, Copperas Cove, Belton, and Kempner are free on this card.",
      "Temple, Salado, Gatesville, Lampasas, Florence, Jarrell, and Troy are the 31–45 mile band at $50. A pin at 30 miles or under is still free. Georgetown, Moody, and Burnet are 46–60 miles at $90.",
      "Waco, Round Rock, Cedar Park, Leander, and Hutto sit past 60 miles. Past 60 is a quote. There is no published minimum. Bands are measured from a Killeen home base.",
    ],
    href: "/areas",
    linkLabel: "Look up a town",
  },
  {
    id: "parking",
    home: true,
    question: "Where does the trailer park, and do you need our power?",
    paragraphs: [
      "Plan on about 50–60 feet of level space for the tow vehicle and the trailer together, clear of low branches, with a way to pull out. Apartment offices and city parks need their own permission. A pavilion reservation is not automatically a yes for a trailer.",
      "The trailer brings a 13.5 kW generator. Do not plan on a bedroom outlet or a kitchen circuit. Food, drinks, and gum stay outside. The trailer is unwrapped. Magnets or a banner are fine. It does not wear a full wrap.",
    ],
    href: "/the-rig",
    linkLabel: "See the spec sheet",
  },
  {
    id: "weather",
    home: true,
    question: "What if the weather turns?",
    paragraphs: [
      "Rain alone does not cancel. The cabin is the point of booking a trailer instead of a garage TV.",
      "Lightning, ice, winds above 35 mph, or a National Weather Service warning: free reschedule or a full credit. You pick which one.",
    ],
    href: "/policies",
    linkLabel: "Weather and cancellation rules",
  },
  {
    id: "discount",
    home: true,
    question: "Is there a military, teacher, or weekday discount?",
    paragraphs: [
      "Military, first responders, and teachers get $25 off the package price, or off the weekday hourly total, with an ID. That is a flat $25, once. It does not come off travel, add-ons, or extra time.",
      "Weekday and weekend prices are already the two columns on Skirmish, Mission, Campaign, and the full days. This is not a Department of Defense program, and the site does not use official Army insignia.",
    ],
    href: "/military",
    linkLabel: "Fort Cavazos and unit events",
  },
  {
    id: "food",
    question: "Can we bring food, drinks, or gum inside?",
    paragraphs: [
      "No. Food, drinks, and gum stay outside the trailer. The draft policy bills a $75 cleaning fee if that rule is broken. Damage inside is billed at replacement cost to the card on file.",
    ],
    href: "/policies",
    linkLabel: "Cleaning and damage",
  },
  {
    id: "ages",
    question: "What ages can play, and who picks the game ratings?",
    paragraphs: [
      "The room is built for up to 24 players. The host sets the rating limit, and the coach follows it. Say the limit when you book if younger kids will be in the mix with older ones.",
      "Younger kids use the 8 tablets for Roblox and Minecraft. A toddler zone is a $75 add-on if you want that setup called out on the booking.",
    ],
  },
  {
    id: "players",
    question: "How many players fit?",
    paragraphs: [
      "Up to 24 at a time in the trailer. A 6-hour or 8-hour full day rotates people through that same room instead of promising 100 controllers at once.",
    ],
  },
  {
    id: "lengths",
    question: "What is the difference between Skirmish, Mission, and Campaign?",
    paragraphs: [
      "They are the same trailer and the same coach. The difference is time and the weekday versus weekend price.",
      "Skirmish is 2 hours, $349 Monday–Thursday and $399 Friday–Sunday. Mission is 3 hours, $449 / $499. Campaign is 4 hours, $549 / $599. Yard games, a tournament pack, dog-tag favors, and the toddler zone are add-ons. They are not built into a longer package.",
    ],
    href: "/packages",
    linkLabel: "Compare the packages",
  },
  {
    id: "on-post",
    question: "Can you come on Fort Cavazos?",
    paragraphs: [
      "On-post events are part of the offer: unit days, FRG gatherings, BOSS events, homecomings, and PCS farewells. The travel fee on this card is $0 when the pin is within 30 miles. Getting through the gate is not.",
      "Installation access, a pass or a sponsor, and any MWR vendor steps have to be confirmed for the specific date. A booking on this site is not an endorsement by Fort Cavazos or the Department of Defense.",
    ],
    href: "/military",
    linkLabel: "Military page",
  },
  {
    id: "invoice",
    question: "Do you invoice schools, units, and nonprofits?",
    paragraphs: [
      "Yes. Verified schools, churches, units, and nonprofits can be invoiced. Draft terms are net-15, and a purchase order is fine when the organization requires one.",
      "Those organizations can also use a Monday–Thursday rate of $125 an hour with a 3-hour minimum, if they have a tax-exempt certificate or a purchase order. It is not a birthday or home-party price. Residential bookings stay on Skirmish, Mission, Campaign, or a full day.",
      "Quotes show 8.25% tax. Tax-exempt groups need a Texas exemption certificate on file. We do not mark a booking tax-exempt without it.",
    ],
    href: "/contact",
    linkLabel: "Request a group quote",
  },
];

export const homeFaqs = faqs.filter((item) => item.home);

export function faqSchema(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.paragraphs.join(" "),
      },
    })),
  };
}
