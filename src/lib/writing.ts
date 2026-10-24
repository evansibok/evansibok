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

export const monthYear = (d: Date) => d.toLocaleDateString("en-GB", { month: "short", year: "numeric", timeZone: "UTC" });
export const month = (d: Date) => d.toLocaleDateString("en-GB", { month: "short", timeZone: "UTC" });
export const longDate = (d: Date) => d.toLocaleDateString("en-GB", { month: "long", year: "numeric", timeZone: "UTC" });
