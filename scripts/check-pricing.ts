import { buildEstimate, money, taxOnCents } from "../src/data/pricing.ts";

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
close(skirmish!.subtotal, 464, "skirmish weekend discount travel addon");
close(skirmish!.total, taxed(464), "skirmish total");
close(skirmish!.deposit, 100, "skirmish deposit");
assert(skirmish!.lines.some((line) => line.amount === -25), "flat 25 discount");
assert(skirmish!.lines.some((line) => line.amount === 50 && line.label.includes("Temple")), "temple travel 50");

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
close(waco!.subtotal, 799, "past 60 excludes travel");
assert(waco!.notes.some((note) => note.includes("quote")), "waco quote note");

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
close(extra!.subtotal, 999 + 50 + 90, "full day extra half outer travel");
close(extra!.total, taxed(1139), "full day taxed");
close(extra!.deposit, 100, "deposit stays 100 on the long day");

const discountedTravel = buildEstimate({
  packageId: "skirmish",
  townId: "temple",
  discount: "community",
  addonIds: [],
  date: "2026-10-06",
});
close(discountedTravel!.subtotal, 374, "discount does not touch the 50 travel fee");
close(discountedTravel!.tax, 30.86, "tax on 374");

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
