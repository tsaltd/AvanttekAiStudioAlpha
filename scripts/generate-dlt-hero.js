import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const width = 2100;
const height = 900;

// Panel configurations in 2100x900 coordinate system
const panels = [
  { id: 1, name: 'Panel 1 (coral, far left)', x: 410, y: 70, w: 230, h: 330, color: '#E4503A' },
  { id: 2, name: 'Panel 2 (violet, top center-left)', x: 745, y: 60, w: 230, h: 330, color: '#7C5CE6' },
  { id: 3, name: 'Panel 3 (amber, top center-right)', x: 1080, y: 60, w: 230, h: 330, color: '#F5B400' },
  { id: 4, name: 'Panel 4 (sky, top right)', x: 1420, y: 70, w: 230, h: 330, color: '#3B9BE8' },
  { id: 5, name: 'Panel 5 (amber, bottom center)', x: 915, y: 470, w: 230, h: 330, color: '#F5B400' },
  { id: 6, name: 'Panel 6 (violet, bottom right)', x: 1250, y: 470, w: 230, h: 330, color: '#7C5CE6' },
];

// Nodes & Network lines
const networkNodes = [
  { x: 300, y: 220, color: '#E4503A' },
  { x: 525, y: 235, color: '#E4503A' },
  { x: 860, y: 225, color: '#7C5CE6' },
  { x: 1195, y: 225, color: '#F5B400' },
  { x: 1535, y: 235, color: '#3B9BE8' },
  { x: 1780, y: 240, color: '#3B9BE8' },
  { x: 1030, y: 635, color: '#F5B400' },
  { x: 1365, y: 635, color: '#7C5CE6' },
  { x: 1680, y: 600, color: '#7C5CE6' },
  { x: 700, y: 640, color: '#E4503A' },
];

const networkEdges = [
  [0, 1], [1, 2], [2, 3], [3, 4], [4, 5],
  [1, 9], [2, 6], [3, 6], [3, 7], [4, 7], [4, 8],
  [6, 7], [7, 8], [9, 6]
];

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}">
  <defs>
    <!-- Background gradient -->
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFFFFF" />
      <stop offset="60%" stop-color="#FAF7F4" />
      <stop offset="100%" stop-color="#F5EFEA" />
    </linearGradient>

    <!-- Ambient glow filters -->
    <filter id="cardShadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="12" stdDeviation="16" flood-color="#1F2328" flood-opacity="0.06" />
      <feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="#E4503A" flood-opacity="0.03" />
    </filter>

    <radialGradient id="meshGlow" cx="65%" cy="45%" r="50%">
      <stop offset="0%" stop-color="#E4503A" stop-opacity="0.06" />
      <stop offset="50%" stop-color="#7C5CE6" stop-opacity="0.03" />
      <stop offset="100%" stop-color="#FAF7F4" stop-opacity="0" />
    </radialGradient>
  </defs>

  <!-- Canvas Background -->
  <rect width="${width}" height="${height}" fill="url(#bgGrad)" />

  <!-- Ambient background glow behind galaxy mesh -->
  <ellipse cx="1100" cy="420" rx="800" ry="380" fill="url(#meshGlow)" />

  <!-- Network Interconnection Lines -->
  <g opacity="0.45">
    ${networkEdges.map(([from, to]) => {
      const n1 = networkNodes[from];
      const n2 = networkNodes[to];
      return `<line x1="${n1.x}" y1="${n1.y}" x2="${n2.x}" y2="${n2.y}" stroke="#5B6470" stroke-width="2" stroke-dasharray="6 6" />`;
    }).join('\n    ')}
  </g>

  <!-- Network Nodes -->
  <g>
    ${networkNodes.map((n) => `
      <circle cx="${n.x}" cy="${n.y}" r="14" fill="${n.color}" fill-opacity="0.15" />
      <circle cx="${n.x}" cy="${n.y}" r="6" fill="${n.color}" stroke="#FFFFFF" stroke-width="2" />
    `).join('\n    ')}
  </g>

  <!-- 6 Ledger Cards -->
  ${panels.map((p) => {
    const cardClipId = `card-clip-${p.id}`;
    const lineHeight = (p.h - 50) / 4;
    return `
    <g filter="url(#cardShadow)">
      <!-- Card background -->
      <rect x="${p.x}" y="${p.y}" width="${p.w}" height="${p.h}" rx="18" ry="18" fill="#FFFFFF" stroke="#E9E3DD" stroke-width="2" />
      
      <!-- Card Header Colored Band -->
      <clipPath id="${cardClipId}">
        <rect x="${p.x}" y="${p.y}" width="${p.w}" height="${p.h}" rx="18" ry="18" />
      </clipPath>
      <g clip-path="url(#${cardClipId})">
        <rect x="${p.x}" y="${p.y}" width="${p.w}" height="42" fill="${p.color}" />
        <!-- Subtle ticket dots in header -->
        <circle cx="${p.x + 20}" cy="${p.y + 21}" r="4" fill="#FFFFFF" fill-opacity="0.7" />
        <rect x="${p.x + 36}" y="${p.y + 17}" width="40" height="8" rx="4" fill="#FFFFFF" fill-opacity="0.7" />
        <circle cx="${p.x + p.w - 20}" cy="${p.y + 21}" r="4" fill="#FFFFFF" fill-opacity="0.7" />
      </g>

      <!-- 4 Ruled Lines -->
      <line x1="${p.x + 14}" y1="${p.y + 42 + lineHeight * 1}" x2="${p.x + p.w - 14}" y2="${p.y + 42 + lineHeight * 1}" stroke="#E9E3DD" stroke-width="1.5" />
      <line x1="${p.x + 14}" y1="${p.y + 42 + lineHeight * 2}" x2="${p.x + p.w - 14}" y2="${p.y + 42 + lineHeight * 2}" stroke="#E9E3DD" stroke-width="1.5" />
      <line x1="${p.x + 14}" y1="${p.y + 42 + lineHeight * 3}" x2="${p.x + p.w - 14}" y2="${p.y + 42 + lineHeight * 3}" stroke="#E9E3DD" stroke-width="1.5" />
      <line x1="${p.x + 14}" y1="${p.y + 42 + lineHeight * 4}" x2="${p.x + p.w - 14}" y2="${p.y + 42 + lineHeight * 4}" stroke="#E9E3DD" stroke-width="1.5" />
    </g>`;
  }).join('\n  ')}
</svg>`;

async function run() {
  const assetsDir = path.resolve('public/assets');
  if (!fs.existsSync(assetsDir)) {
    fs.mkdirSync(assetsDir, { recursive: true });
  }

  const svgPath = path.join(assetsDir, 'dlt-hero.svg');
  const pngPath = path.join(assetsDir, 'dlt-hero.png');

  fs.writeFileSync(svgPath, svg, 'utf-8');
  console.log(`Saved SVG to ${svgPath}`);

  await sharp(Buffer.from(svg))
    .png({ quality: 95 })
    .toFile(pngPath);
  console.log(`Saved PNG to ${pngPath}`);
}

run().catch(console.error);
