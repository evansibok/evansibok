// PNG versions of the site mark for browsers and devices that don't take SVG icons.
import type { APIRoute, GetStaticPaths } from "astro";
import { Resvg } from "@resvg/resvg-js";
import { iconSvg } from "../lib/icon";
import { pngResponse } from "../lib/og";

const icons = {
  "favicon-32": { size: 32, background: undefined },
  // Home-screen icons get the paper colour behind them; iOS fills transparency with black.
  "apple-touch-icon": { size: 180, background: "#f1f4ff" },
  "icon-192": { size: 192, background: "#f1f4ff" },
  "icon-512": { size: 512, background: "#f1f4ff" },
} as const;

export const getStaticPaths = (() =>
  Object.keys(icons).map((icon) => ({ params: { icon } }))) satisfies GetStaticPaths;

export const GET: APIRoute = ({ params }) => {
  const { size, background } = icons[params.icon as keyof typeof icons];
  // Home-screen icons get a margin, centred on the tile plus its shadow (x/y 3–58 in the 64-unit mark).
  const svg = background ? iconSvg.replace('viewBox="0 0 64 64"', 'viewBox="-7.5 -7.5 76 76"') : iconSvg;
  const png = new Resvg(svg, { fitTo: { mode: "width", value: size }, background, font: { loadSystemFonts: false } })
    .render()
    .asPng();
  return pngResponse(png);
};
