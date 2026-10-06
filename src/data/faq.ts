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
    id: "book",
    home: true,
    question: "How do I book?",
    paragraphs: [
      "Text your date, address, and package to (254) 251-5219. We confirm availability. Pay the $100 Square deposit to hold the date.",
      "The gaming trailer is still under construction. Rental availability is limited until it is complete.",
    ],
    href: "/book",
    linkLabel: "Booking page",
  },
  {
    id: "cost",
    home: true,
    question: "How much does a party cost?",
    paragraphs: [
      "Starts at $349. Skirmish is 2 hours at $349. Mission is 3 hours at $449. Campaign is 4 hours at $549. A 6-hour full day is $749. An 8-hour full day is $949. The price is the same every day. Extra time is $50 per 30 minutes when the next slot is open.",
      "Prices on the card exclude tax. The booking quote adds 8.25%.",
      "Travel is free in Killeen, Copperas Cove, Harker Heights, and Nolanville. Outside that area, including Fort Hood, trips are by exception only. They have to be approved ahead of time. The trip is quoted by text. Prices vary. A minimum of 4 hours may be required.",
    ],
    href: "/packages",
    linkLabel: "See packages",
  },
  {
    id: "deposit",
    home: true,
    question: "What is the deposit?",
    paragraphs: [
      "The deposit is a flat $100. Pay it with the Square deposit link to hold the date after we confirm availability. Package length does not change the deposit.",
      "The balance after that $100 is not a published due date yet. Confirm the balance when you book.",
    ],
    href: "/book#pay",
    linkLabel: "Square deposit link",
  },
  {
    id: "cancel",
    home: true,
    question: "What if we need to cancel or reschedule?",
    paragraphs: [
      "Cancellation and reschedule rules are not set on this site yet. Ask when you book. There is no published cutoff.",
    ],
    href: "/policies",
    linkLabel: "What is written down so far",
  },
  {
    id: "parking",
    home: true,
    question: "Where does the trailer park?",
    paragraphs: [
      "The truck and trailer need a driveway or a side street where they can legally park, with level space. Plan on about 50–60 feet until the measured length is published. Confirm the spot before the date.",
      "If parking will not work, call or text (254) 251-5219 and we will figure out another option.",
    ],
    href: "/the-rig",
    linkLabel: "Parking notes",
  },
  {
    id: "power",
    question: "Do you need an outlet?",
    paragraphs: [
      "No. The trailer is self-powered with a 13.5 kW generator. No household outlet is needed.",
    ],
  },
  {
    id: "wifi",
    question: "Is there Wi-Fi?",
    paragraphs: [
      "Yes. Wi-Fi is available for online multiplayer.",
    ],
  },
  {
    id: "attendant",
    question: "Does someone stay with the trailer?",
    paragraphs: [
      "Yes. A game coach stays on site for the whole booking. The host sets the game-rating limit, and the attendant follows it.",
    ],
  },
  {
    id: "weather",
    question: "What about weather and the cabin temperature?",
    paragraphs: [
      "Weather rules are not published yet. Ask when you book.",
      "Climate control (A/C and heat) is being installed as part of the build. It is not live yet. The trailer is still under construction.",
    ],
  },
  {
    id: "food",
    question: "Can we bring food and drinks inside?",
    paragraphs: [
      "Food, drinks, and gum stay outside the trailer.",
    ],
    href: "/policies",
    linkLabel: "House rules",
  },
  {
    id: "ages",
    question: "What ages can play, and who picks the game ratings?",
    paragraphs: [
      "The host sets the game-rating limit and tells us when booking. The on-site attendant follows that limit.",
      "Younger kids can use the 8 stand-alone 8-inch tablets.",
    ],
  },
  {
    id: "ahead",
    question: "How far ahead should we book?",
    paragraphs: [
      "Text the date you want. We confirm whether that day is open. There is no published lead-time rule yet.",
      "The gaming trailer is still under construction. Rental availability is limited until it is complete.",
    ],
  },
  {
    id: "pay",
    question: "How do we pay?",
    paragraphs: [
      "Call or text (254) 251-5219. Square links on the booking page take the $100 deposit or a full package price. Those package links charge the full price. Call or text to apply the $25 discount if Square cannot adjust it.",
    ],
    href: "/book#pay",
    linkLabel: "Pay with Square",
  },
  {
    id: "balance",
    question: "When is the balance due?",
    paragraphs: [
      "Confirm the balance when you book. A due date is not published on this site yet.",
    ],
  },
  {
    id: "travel",
    question: "Do you charge travel in Killeen, Copperas Cove, Harker Heights, or Nolanville?",
    paragraphs: [
      "No. Those four cities are the usual area. Travel there is free.",
      "Fort Hood, Belton, Kempner, Temple, and every other town are outside that area. Those trips are by exception only. They have to be approved ahead of time. The trip is quoted by text. Prices vary. A minimum of 4 hours may be required.",
    ],
    href: "/areas",
    linkLabel: "Look up a town",
  },
  {
    id: "discount",
    question: "Is there a military, teacher, or first responder discount?",
    paragraphs: [
      "Thank you for your service. Active duty, veterans, first responders, and teachers get $25 off the package price, or off the organization hourly total, with an ID. That is a flat $25, once. Discounts do not stack. It does not come off travel or extra time. Square charges the full package price. Call or text to apply the $25. Skirmish is $349 − $25 = $324.",
    ],
    href: "/military",
    linkLabel: "Military discount",
  },
  {
    id: "players",
    question: "What gear is on the trailer?",
    paragraphs: [
      "Six dedicated gaming stations, each with a 27-inch monitor, a gaming chair, and a console (Xbox Series S/X, PS5, or Nintendo Switch). Certain games are 4-player multiplayer. Wi-Fi is available for online multiplayer. Also about 4 Xbox, 3 PS5s, and 8 stand-alone 8-inch tablets. A game coach stays on site the whole booking.",
    ],
  },
  {
    id: "lengths",
    question: "What is the difference between Skirmish, Mission, and Campaign?",
    paragraphs: [
      "Same trailer, same attendant, same Wi-Fi. The difference is time. The price is the same every day.",
      "Skirmish is 2 hours at $349. Mission is 3 hours at $449. Campaign is 4 hours at $549.",
    ],
    href: "/packages",
    linkLabel: "Compare the packages",
  },
  {
    id: "groups",
    question: "Who can use the $125 hourly rate?",
    paragraphs: [
      "Verified schools, churches, units, and nonprofits can use $125 an hour on Monday–Thursday with a 3-hour minimum, if they have a tax-exempt certificate or a purchase order. It is not a birthday or home-party price. Residential bookings stay on Skirmish, Mission, Campaign, or a full day.",
      "Quotes show 8.25% tax. Tax-exempt groups need a Texas exemption certificate on file.",
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
