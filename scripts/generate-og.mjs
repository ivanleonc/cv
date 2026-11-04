// scripts/generate-og.mjs
// Genera public/og-image.png (1200x630) para Open Graph / Twitter Cards.
// Uso: npm run og
import { readFile, writeFile } from 'node:fs/promises';
import sharp from 'sharp';

const name = 'Iván León Capote';
const role = 'Development Engineer';
const stack = ['Vue.js', 'TypeScript', 'JavaScript', 'PHP', 'WebSockets', 'Pinia'];
const location = 'Piendamó, Cauca · Colombia';
const handles = ['github.com/ivanleonc', 'linkedin.com/in/ivanleoncapote'];

const pills = stack
  .map((tech, i) => {
    const x = 80 + i * 165;
    return `
      <rect x="${x}" y="452" width="150" height="38" rx="19"
        fill="rgba(99,102,241,0.12)" stroke="rgba(129,140,248,0.35)" />
      <text x="${x + 75}" y="477" font-family="Arial, Helvetica, sans-serif"
        font-size="17" fill="#a5b4fc" text-anchor="middle">${tech}</text>`;
  })
  .join('');

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <radialGradient id="orb1" cx="0.15" cy="0.2" r="0.55">
      <stop offset="0%" stop-color="#6366f1" stop-opacity="0.28"/>
      <stop offset="100%" stop-color="#6366f1" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="orb2" cx="0.9" cy="0.85" r="0.5">
      <stop offset="0%" stop-color="#4f46e5" stop-opacity="0.22"/>
      <stop offset="100%" stop-color="#4f46e5" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="bar" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#818cf8"/>
      <stop offset="100%" stop-color="#4f46e5"/>
    </linearGradient>
  </defs>

  <rect width="1200" height="630" fill="#080d1a"/>
  <rect width="1200" height="630" fill="url(#orb1)"/>
  <rect width="1200" height="630" fill="url(#orb2)"/>

  <!-- Retícula sutil -->
  <g stroke="#6366f1" stroke-opacity="0.06" stroke-width="1">
    ${Array.from({ length: 19 }, (_, i) => `<line x1="${i * 67}" y1="0" x2="${i * 67}" y2="630"/>`).join('')}
    ${Array.from({ length: 10 }, (_, i) => `<line x1="0" y1="${i * 67}" x2="1200" y2="${i * 67}"/>`).join('')}
  </g>

  <!-- Barra de acento -->
  <rect x="0" y="0" width="8" height="630" fill="url(#bar)"/>

  <!-- Etiqueta superior -->
  <circle cx="86" cy="122" r="6" fill="#34d399"/>
  <text x="104" y="129" font-family="Arial, Helvetica, sans-serif" font-size="19"
    fill="#94a3b8">Disponible para nuevas oportunidades</text>

  <!-- Nombre -->
  <text x="80" y="238" font-family="Arial Black, Arial, Helvetica, sans-serif"
    font-size="74" font-weight="900" fill="#f1f5f9" letter-spacing="-2">${name.split(' ')[0]}</text>
  <text x="80" y="318" font-family="Arial Black, Arial, Helvetica, sans-serif"
    font-size="74" font-weight="900" fill="#818cf8" letter-spacing="-2">${name.split(' ').slice(1).join(' ')}</text>

  <!-- Rol -->
  <text x="80" y="376" font-family="Arial, Helvetica, sans-serif" font-size="30"
    fill="#cbd5e1">${role} · Frontend Developer · AI</text>

  <!-- Ubicación -->
  <text x="80" y="416" font-family="Arial, Helvetica, sans-serif" font-size="20"
    fill="#64748b">${location}</text>

  <!-- Stack -->
  ${pills}

  <!-- Monograma -->
  <circle cx="1000" cy="315" r="132" fill="rgba(99,102,241,0.1)" stroke="rgba(129,140,248,0.35)" stroke-width="2"/>
  <text x="1000" y="360" font-family="Arial Black, Arial, Helvetica, sans-serif"
    font-size="92" font-weight="900" fill="#a5b4fc" text-anchor="middle" letter-spacing="-4">ILC</text>

  <!-- Handles -->
  <text x="80" y="566" font-family="Arial, Helvetica, sans-serif" font-size="18"
    fill="#94a3b8">${handles[0]}</text>
  <text x="80" y="596" font-family="Arial, Helvetica, sans-serif" font-size="18"
    fill="#94a3b8">${handles[1]}</text>

  <!-- Acento inferior -->
  <rect x="0" y="622" width="1200" height="8" fill="url(#bar)"/>
</svg>`;

try {
  await writeFile('scripts/og-source.svg', svg, 'utf8');
  await sharp(Buffer.from(svg)).png({ quality: 90 }).toFile('public/og-image.png');
  console.log('✓ public/og-image.png generada (1200x630)');
  await readFile('public/og-image.png');
} catch (error) {
  console.error('No se pudo generar la imagen OG:', error);
  process.exitCode = 1;
}
