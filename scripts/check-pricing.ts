import { buildEstimate, money, packages, partyPackages, taxOnCents, towns } from "../src/data/pricing.ts";

function assert(condition: boolean, message: string) {
  if (!condition) {
    console.error("FAIL", message);
    process.exitCode = 1;
  }
}

function close(actual: number, expected: number, label: string) {
  assert(Math.abs(actual - expected) < 0.001, `${label}: expected ${expected}, got ${actual} (${money(actual)})`);
}

function taxed(subtotal: number): number {
  const cents = Math.round(subtotal * 100);
  return (cents + taxOnCents(cents)) / 100;
}

assert(taxOnCents(44900) === 3704, "8.25% of $449 is $37.04");
assert(taxOnCents(37400) === 3086, "8.25% of $374 rounds to $30.86");

const mission = buildEstimate({
  packageId: "mission",
  townId: "killeen",
  discount: "none",
  addonIds: [],
  date: "2026-10-06",
});
assert(mission !== null && mission.available, "mission weekday");
close(mission!.subtotal, 449, "mission subtotal");
close(mission!.tax, 37.04, "mission tax");
close(mission!.total, 486.04, "mission total");
close(mission!.deposit, 100, "mission deposit");
close(mission!.balance, 386.04, "mission balance");

const skirmish = buildEstimate({
  packageId: "skirmish",
  townId: "temple",
  discount: "community",
  addonIds: ["tournament"],
  date: "2026-10-10",
});
close(skirmish!.subtotal, 414, "skirmish weekend discount addon, no published travel");
close(skirmish!.total, taxed(414), "skirmish total");
close(skirmish!.deposit, 100, "skirmish deposit");
assert(skirmish!.lines.some((line) => line.amount === -25), "flat 25 discount");
assert(!skirmish!.lines.some((line) => line.label.includes("Temple") && line.amount !== 0), "temple travel not priced");
assert(skirmish!.notes.some((note) => note.includes("approved ahead")), "temple needs approval");

const campaign = buildEstimate({
  packageId: "campaign",
  townId: "killeen",
  discount: "none",
  addonIds: [],
});
close(campaign!.subtotal, 599, "unset date uses weekend rate");
assert(campaign!.notes.some((note) => note.includes("549")), "weekday price noted");
assert(campaign!.notes.some((note) => note.includes("8.25%")), "tax note");

const bumped = buildEstimate({
  packageId: "group",
  townId: "killeen",
  discount: "none",
  addonIds: [],
  groupHours: 2,
  date: "2026-10-08",
});
close(bumped!.subtotal, 375, "group minimum 3 hours");
assert(bumped!.notes.some((note) => note.includes("3-hour")), "minimum note");
assert(bumped!.notes.some((note) => note.includes("Verified organizations")), "org-only note");
assert(bumped!.notes.some((note) => note.includes("Not for residential")), "not a home-party rate");
assert(partyPackages.every((pkg) => pkg.hourly !== true), "party card has no hourly rate");
assert(!packages.some((pkg) => pkg.weekdayPrice === 299 || pkg.weekendPrice === 299), "no 299 menu price");

const group = buildEstimate({
  packageId: "group",
  townId: "belton",
  discount: "community",
  addonIds: ["yard"],
  groupHours: 4,
  date: "2026-10-06",
});
close(group!.subtotal, 500, "4 hr group before discount and addon");
assert(group!.lines.some((line) => line.amount === -25), "group discount");
assert(group!.lines.some((line) => line.amount === 25 && line.label.includes("Yard")), "yard addon");
close(group!.subtotal, 500, "500 after -25 +25");

const weekendGroup = buildEstimate({
  packageId: "group",
  townId: "killeen",
  discount: "none",
  addonIds: [],
  groupHours: 4,
  date: "2026-10-10",
});
assert(weekendGroup!.available === false, "no weekend hourly");
close(weekendGroup!.total, 0, "weekend hourly has no total");
close(weekendGroup!.deposit, 100, "deposit still named");

const waco = buildEstimate({
  packageId: "full-6",
  townId: "waco",
  discount: "none",
  addonIds: [],
  date: "2026-10-11",
});
close(waco!.subtotal, 799, "beyond 30 excludes travel");
assert(waco!.notes.some((note) => note.includes("approved ahead")), "waco approval note");
assert(waco!.notes.some((note) => note.includes("4 hours")), "waco minimum note");

const favors = buildEstimate({
  packageId: "skirmish",
  townId: "killeen",
  discount: "none",
  addonIds: ["dogtag"],
  date: "2026-10-06",
});
close(favors!.subtotal, 379, "dog tags are a flat 30");

const extra = buildEstimate({
  packageId: "full-8",
  townId: "georgetown",
  discount: "none",
  addonIds: [],
  extraHalfHours: 1,
  date: "2026-10-09",
});
close(extra!.subtotal, 999 + 50, "full day extra half, travel not priced");
close(extra!.total, taxed(1049), "full day taxed");
assert(extra!.notes.some((note) => note.includes("Prices vary")), "georgetown prices vary");
close(extra!.deposit, 100, "deposit stays 100 on the long day");

const discountedTravel = buildEstimate({
  packageId: "skirmish",
  townId: "temple",
  discount: "community",
  addonIds: [],
  date: "2026-10-06",
});
close(discountedTravel!.subtotal, 324, "discount does not invent a travel fee");
close(discountedTravel!.tax, 26.73, "tax on 324");
const usual = ["killeen", "copperas-cove", "harker-heights", "nolanville"];
assert(usual.every((id) => towns.find((town) => town.id === id)?.fee === 0), "four usual cities are free");
assert(towns.filter((town) => town.fee === 0).length === 4, "only the four usual cities are free");
assert(towns.find((town) => town.id === "fort-hood")?.fee === null, "fort hood is outside the usual cities");
assert(towns.every((town) => town.fee === 0 || town.fee === null), "no published outside fee");

assert(buildEstimate({
  packageId: "nope",
  townId: "killeen",
  discount: "none",
  addonIds: [],
}) === null, "unknown package");

if (process.exitCode) {
  console.error("Pricing checks failed");
} else {
  console.log("Pricing checks passed");
}
