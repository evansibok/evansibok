import type { APIRoute, GetStaticPaths } from "astro";
import { renderCard, pngResponse } from "../../../lib/og";
import { publishedEssays, type Essay } from "../../../lib/writing";

export const getStaticPaths = (async () => {
  const essays = await publishedEssays();
  return essays.map((essay) => ({ params: { slug: essay.id }, props: { essay } }));
}) satisfies GetStaticPaths;

export const GET: APIRoute = async ({ props }) => {
  const { essay } = props as { essay: Essay };
  return pngResponse(await renderCard({ label: "Writing", title: essay.data.title, subtitle: essay.data.description }));
};
