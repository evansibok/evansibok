// The site mark: E\ on a mint sticker tile with an ink outline and hard shadow.
// One SVG is the source for the favicon, the app icons and the mark on sharing images.

const INK = "#1c1b33";

export const iconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <rect x="10" y="10" width="46" height="46" rx="12" fill="${INK}"/>
  <rect x="5" y="5" width="46" height="46" rx="12" fill="#8de4bf" stroke="${INK}" stroke-width="4"/>
  <g fill="${INK}" transform="translate(-5 -4)">
    <rect x="18" y="18" width="7" height="28" rx="2"/>
    <rect x="18" y="18" width="19" height="7" rx="2"/>
    <rect x="18" y="28.5" width="15" height="7" rx="2"/>
    <rect x="18" y="39" width="19" height="7" rx="2"/>
  </g>
  <line x1="36" y1="15" x2="43" y2="41" stroke="${INK}" stroke-width="7" stroke-linecap="round"/>
</svg>`;

export const iconDataUri = `data:image/svg+xml;base64,${Buffer.from(iconSvg).toString("base64")}`;
