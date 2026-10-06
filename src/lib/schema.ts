import { site } from "../config/site";
import { partyPackages } from "../data/pricing";

const areas = [
  "Killeen",
  "Copperas Cove",
  "Harker Heights",
  "Nolanville",
  "Fort Hood",
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
    sameAs: site.instagram.map((account) => account.href),
    image: `${site.url}${site.logo.chrome}`,
    slogan: site.slogan,
    areaServed: areas.map((name) => ({
      "@type": name === "Fort Hood" ? "AdministrativeArea" : "City",
      name,
    })),
    priceRange: "$349–$949",
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
