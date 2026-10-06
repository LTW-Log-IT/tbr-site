import { site } from "../config/site";
import { partyPackages } from "../data/pricing";

const areas = [
  "Killeen",
  "Fort Cavazos",
  "Harker Heights",
  "Nolanville",
  "Copperas Cove",
  "Belton",
  "Temple",
];

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: site.name,
    alternateName: ["Team Battle Ready", "TBR", "B4TTL3", "Battle Ready Gaming Trailer"],
    description: site.description,
    url: site.url,
    telephone: "+1-254-251-5219",
    image: `${site.url}/favicon.svg`,
    slogan: site.slogan,
    areaServed: areas.map((name) => ({
      "@type": name === "Fort Cavazos" ? "AdministrativeArea" : "City",
      name,
    })),
    priceRange: "$349–$999",
    makesOffer: partyPackages.map((pkg) => ({
      "@type": "Offer",
      name: `${pkg.name} — ${pkg.timeLabel} gaming trailer package`,
      description: pkg.summary,
      price: pkg.weekdayPrice.toFixed(2),
      priceCurrency: "USD",
      url: `${site.url}/book?pkg=${pkg.id}`,
    })),
  };
}
