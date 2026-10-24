import type { APIRoute } from "astro";
import { profile } from "../data/profile";

export const GET: APIRoute = () =>
  Response.json({
    name: profile.name,
    short_name: "evns.fyi",
    description: profile.description,
    start_url: "/",
    display: "browser",
    background_color: "#f1f4ff",
    theme_color: "#f1f4ff",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
      { src: "/favicon.svg", sizes: "any", type: "image/svg+xml" },
    ],
  });
