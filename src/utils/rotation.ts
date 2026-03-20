const ANCHOR_ISO_UTC = '2026-03-20T00:00:00.000Z';
const MS_PER_DAY = 24 * 60 * 60 * 1000;
const PERIOD_DAYS = 21;
const VARIANT_COUNT = 3;

function mod(n: number, m: number) {
  return ((n % m) + m) % m;
}

export function getRotationIndex(date: Date = new Date()): number {
  const anchorMs = Date.parse(ANCHOR_ISO_UTC);
  const dateMs = Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
  const daysSinceAnchor = Math.floor((dateMs - anchorMs) / MS_PER_DAY);
  return mod(Math.floor(daysSinceAnchor / PERIOD_DAYS), VARIANT_COUNT);
}

export function getRotationLabel(rotationIndex: number): string {
  // 0 -> "Cycle A", 1 -> "Cycle B", 2 -> "Cycle C"
  const letters = ['A', 'B', 'C'] as const;
  return `Cycle ${letters[mod(rotationIndex, VARIANT_COUNT)]}`;
}

