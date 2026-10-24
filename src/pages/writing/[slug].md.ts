// A plain-Markdown copy of each essay, linked from the page head, for AI tools that read Markdown better than HTML.
import type { APIRoute, GetStaticPaths } from "astro";
import { publishedEssays, longDate, essayUrl, type Essay } from "../../lib/writing";
import { profile } from "../../data/profile";

export const getStaticPaths = (async () => {
  const essays = await publishedEssays();
  return essays.map((essay) => ({ params: { slug: essay.id }, props: { essay } }));
}) satisfies GetStaticPaths;

export const GET: APIRoute = ({ props, site }) => {
  const { essay } = props as { essay: Essay };
  const url = new URL(essayUrl(essay), site);
  const text = `# ${essay.data.title}\n\nBy ${profile.name}, ${longDate(essay.data.date)}. ${url}\n\n${essay.body?.trim() ?? ""}\n`;
  return new Response(text, { headers: { "Content-Type": "text/markdown; charset=utf-8" } });
};
