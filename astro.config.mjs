import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://evns.fyi",
  trailingSlash: "ignore",
  integrations: [sitemap()],
});
