import type { APIRoute } from "astro";
import { renderCard, pngResponse } from "../../lib/og";
import { profile } from "../../data/profile";

export const GET: APIRoute = async () =>
  pngResponse(
    await renderCard({
      label: profile.name,
      title: "I build systems that prove what happened and stop what shouldn't.",
      subtitle: "Compliance and permissions around money. Guardrails for AI agents.",
    }),
  );
