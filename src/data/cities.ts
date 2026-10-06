export interface CityPage {
  slug: string;
  name: string;
  title: string;
  description: string;
  lede: string;
  local: string[];
}

export const cities: CityPage[] = [
  {
    slug: "killeen",
    name: "Killeen",
    title: "The game trailer, parked in Killeen.",
    description:
      "Gaming trailer rental in Killeen, Texas. Travel is free. Weekday parties start at $349. Birthdays, schools, churches, and family days.",
    lede:
      "Killeen is one of the four usual cities, with Copperas Cove, Harker Heights, and Nolanville. Travel is free. The trailer is stored in Killeen. Weekday Skirmish starts at $349.",
    local: [
      "Most bookings are a driveway or a side street at a house. The truck and trailer need level space, about 50–60 feet until the measured length is published. Confirm the spot before the date.",
      "Apartments need a yes from the office before the trailer rolls in. A clubhouse reservation is not permission to park on their lot.",
      "City parks follow City of Killeen rules. Reserve the park with the city, then text us. We do not book pavilions.",
      "Birthdays use Skirmish, Mission, or Campaign. Schools and churches can ask about the weekday organization rate. Military family days and homecomings are driveway bookings here. Fort Hood itself is outside this free list and is by exception.",
    ],
  },
  {
    slug: "copperas-cove",
    name: "Copperas Cove",
    title: "The game trailer, parked in Copperas Cove.",
    description:
      "Gaming trailer rental in Copperas Cove, Texas. Travel is free with Killeen. Weekday parties start at $349.",
    lede:
      "Copperas Cove is west of Killeen and still in the free-travel list. A Cove address does not add a travel fee. Weekday Skirmish starts at $349.",
    local: [
      "Book it for a birthday, a school or church event, or a family day. The trailer parks at a driveway or a side street where it can legally sit, on level ground.",
      "If the street cannot hold the truck and trailer, text us and we will look at another option. We do not treat a Cove park reservation as an automatic yes.",
      "Same packages as Killeen: Skirmish, Mission, Campaign, or a full day. An on-site attendant stays the whole time. Wi-Fi is available for online multiplayer. The generator means no outlet is needed.",
    ],
  },
  {
    slug: "harker-heights",
    name: "Harker Heights",
    title: "The game trailer, parked in Harker Heights.",
    description:
      "Gaming trailer rental in Harker Heights, Texas. Travel is free. Weekday parties start at $349.",
    lede:
      "Harker Heights sits next to Killeen and is one of the four usual cities. Travel is free. Weekday Skirmish starts at $349.",
    local: [
      "Birthdays and family days are the usual ask: a house with a driveway or side street long enough for the truck and trailer, on level ground.",
      "Schools and churches book the same way. The spot still has to be a place the trailer can legally park.",
      "Fort Hood is a different trip. A Heights address is free travel. A Fort Hood address is by exception, quoted by text, and a 4-hour minimum may apply.",
    ],
  },
  {
    slug: "nolanville",
    name: "Nolanville",
    title: "The game trailer, parked in Nolanville.",
    description:
      "Gaming trailer rental in Nolanville, Texas. Travel is free. Weekday parties start at $349. Belton is outside that list.",
    lede:
      "Nolanville is east of Killeen and still one of the four free-travel cities. Weekday Skirmish starts at $349.",
    local: [
      "A Nolanville address is free travel. Belton is the next town over and is not on that list. A Belton booking is by exception, quoted by text, and a 4-hour minimum may apply.",
      "Parties here are driveway and side-street bookings: birthdays, family days, and a school or church that has a legal place to park.",
      "Text the date, the address, and the package. We confirm availability, then the $100 Square deposit holds the day.",
    ],
  },
];

export function findCity(slug: string) {
  return cities.find((city) => city.slug === slug);
}
