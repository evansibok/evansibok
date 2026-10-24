// Renders 1200×630 sharing images (Open Graph / X cards) in the site's sticker style, at build time.
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import satori from "satori";
import { Resvg } from "@resvg/resvg-js";
import { iconDataUri } from "./icon";

const C = {
  paper: "#f1f4ff",
  dot: "#d6dbf0",
  ink: "#1c1b33",
  muted: "#4d4b6b",
  surface: "#ffffff",
  sun: "#ffd447",
  coral: "#ff8a65",
};

const fontFile = (pkg: string, file: string) => readFile(join(process.cwd(), "node_modules", pkg, "files", file));

let fonts: Promise<Parameters<typeof satori>[1]["fonts"]> | undefined;
function loadFonts() {
  fonts ??= Promise.all([
    fontFile("@fontsource/bricolage-grotesque", "bricolage-grotesque-latin-800-normal.woff"),
    fontFile("@fontsource/schibsted-grotesk", "schibsted-grotesk-latin-500-normal.woff"),
    fontFile("@fontsource/schibsted-grotesk", "schibsted-grotesk-latin-600-normal.woff"),
  ]).then(([display, sans, sansBold]) => [
    { name: "Bricolage", data: display, weight: 800, style: "normal" },
    { name: "Schibsted", data: sans, weight: 500, style: "normal" },
    { name: "Schibsted", data: sansBold, weight: 600, style: "normal" },
  ]);
  return fonts;
}

// Satori takes a React-like element tree; this keeps it readable without JSX.
type Node = { type: string; props: Record<string, unknown> };
const h = (type: string, style: Record<string, unknown>, ...children: unknown[]): Node => ({
  type,
  props: { style, children: children.length === 1 ? children[0] : children },
});

const dots = `data:image/svg+xml;base64,${Buffer.from(
  `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630"><defs><pattern id="d" width="36" height="36" patternUnits="userSpaceOnUse"><circle cx="18" cy="18" r="2.2" fill="${C.dot}"/></pattern></defs><rect width="1200" height="630" fill="${C.paper}"/><rect width="1200" height="630" fill="url(#d)"/></svg>`,
).toString("base64")}`;

export interface Card {
  label: string;
  title: string;
  subtitle?: string;
}

export async function renderCard({ label, title, subtitle }: Card): Promise<Buffer> {
  const titleSize = title.length > 60 ? 60 : title.length > 36 ? 70 : 84;

  const tree = h(
    "div",
    {
      position: "relative",
      width: 1200,
      height: 630,
      display: "flex",
      padding: "44px 58px 58px 44px",
      fontFamily: "Schibsted",
    },
    { type: "img", props: { src: dots, width: 1200, height: 630, style: { position: "absolute", top: 0, left: 0 } } },
    h(
      "div",
      {
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        // Fixed size so long titles wrap instead of widening the card. Satori sizes the content box,
        // so subtract the outer padding, this padding and the 5px borders from the canvas.
        width: 1200 - (44 + 58) - 56 * 2 - 10,
        height: 630 - (44 + 58) - (44 + 36) - 10,
        padding: "44px 56px 36px",
        backgroundColor: C.surface,
        border: `5px solid ${C.ink}`,
        borderRadius: 36,
        boxShadow: `14px 14px 0 ${C.ink}`,
      },
      h(
        "div",
        { display: "flex", flexDirection: "column", gap: 22 },
        h(
          "div",
          {
            display: "flex",
            alignSelf: "flex-start",
            padding: "8px 18px",
            fontFamily: "Bricolage",
            fontSize: 26,
            color: C.ink,
            backgroundColor: C.sun,
            border: `4px solid ${C.ink}`,
            borderRadius: 12,
            transform: "rotate(-2deg)",
          },
          label,
        ),
        h(
          "div",
          { display: "flex", fontFamily: "Bricolage", fontSize: titleSize, lineHeight: 1.04, letterSpacing: -2, color: C.ink },
          title,
        ),
        ...(subtitle ? [h("div", { display: "flex", fontSize: 29, lineHeight: 1.4, color: C.muted, maxWidth: 980 }, subtitle)] : []),
      ),
      h(
        "div",
        { display: "flex", alignItems: "center", gap: 16, fontSize: 27, fontWeight: 600, color: C.ink },
        { type: "img", props: { src: iconDataUri, width: 52, height: 52 } },
        "Evans Ibok",
        h("div", { display: "flex", color: C.coral }, "·"),
        h("div", { display: "flex", fontWeight: 500, color: C.muted }, "evns.fyi"),
      ),
    ),
  );

  const svg = await satori(tree as never, { width: 1200, height: 630, fonts: await loadFonts() });
  return new Resvg(svg, { fitTo: { mode: "width", value: 1200 } }).render().asPng();
}

export function pngResponse(png: Buffer): Response {
  return new Response(new Uint8Array(png), { headers: { "Content-Type": "image/png" } });
}
