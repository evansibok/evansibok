import rss from "@astrojs/rss";
import type { APIRoute } from "astro";
import { publishedEssays, essayUrl } from "../lib/writing";
import { profile } from "../data/profile";

export const GET: APIRoute = async ({ site }) =>
  rss({
    title: `${profile.name}: Writing`,
    description: profile.description,
    site: site!,
    items: (await publishedEssays()).map((e) => ({
      title: e.data.title,
      description: e.data.description,
      pubDate: e.data.date,
      link: essayUrl(e),
    })),
  });
