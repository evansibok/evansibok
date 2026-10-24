// llms.txt: a plain summary of the site and its pages for AI tools (https://llmstxt.org).
import type { APIRoute } from "astro";
import { profile } from "../data/profile";
import { publishedEssays } from "../lib/writing";

export const GET: APIRoute = async ({ site }) => {
  const abs = (path: string) => new URL(path, site).href;
  const essays = await publishedEssays();
  const thesis = `${profile.thesis.before}${profile.thesis.highlight}${profile.thesis.after}`;

  const lines = [
    `# ${profile.name}`,
    "",
    `> ${profile.description}`,
    "",
    `${profile.role}. In his words: "${thesis}"`,
    "",
    "## Projects",
    "",
    ...profile.projects.map((p) => `- [${p.name}](${p.links[0]?.href}) (${p.status}): ${p.body}`),
    "",
    "## Work",
    "",
    ...profile.work.map(
      (r) => `- ${r.company}${r.companyNote ? ` ${r.companyNote}` : ""}, ${r.title} (${r.when}): ${r.summary}`,
    ),
    "",
    ...(essays.length
      ? [
          "## Writing",
          "",
          ...essays.map((e) => `- [${e.data.title}](${abs(`/writing/${e.id}.md`)})${e.data.description ? `: ${e.data.description}` : ""}`),
          "",
        ]
      : []),
    "## Contact",
    "",
    `- Email: ${profile.contact.email}`,
    ...profile.links.map((l) => `- ${l.label}: ${l.href}`),
    "",
  ];

  return new Response(lines.join("\n"), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};
