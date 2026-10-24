import { getCollection, type CollectionEntry } from "astro:content";

export type Essay = CollectionEntry<"writing">;

// Published essays, newest first. Drafts never reach the site.
export async function publishedEssays(): Promise<Essay[]> {
  const all = await getCollection("writing", ({ data }) => !data.draft);
  return all.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export function essayUrl(essay: Essay): string {
  return `/writing/${essay.id}/`;
}

// Publish dates, always with the day: "24 Oct 2026", "24 Oct" (under a year heading), "24 October 2026".
const fmt = (opts: Intl.DateTimeFormatOptions) => (d: Date) =>
  d.toLocaleDateString("en-GB", { day: "numeric", timeZone: "UTC", ...opts });
export const shortDate = fmt({ month: "short", year: "numeric" });
export const dayMonth = fmt({ month: "short" });
export const longDate = fmt({ month: "long", year: "numeric" });
// For <time datetime>: the full calendar date.
export const isoDate = (d: Date) => d.toISOString().slice(0, 10);
