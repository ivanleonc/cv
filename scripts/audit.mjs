// scripts/audit.mjs
// Auditoría de accesibilidad (axe-core) + capturas responsive.
// Requiere el servidor de desarrollo en http://localhost:4321/cv/
// Uso: npm run audit
import { mkdir } from 'node:fs/promises';
import puppeteer from 'puppeteer-core';
import { AxePuppeteer } from '@axe-core/puppeteer';

const url = process.env.AUDIT_URL || 'http://localhost:4321/cv/';
const executablePath =
  process.env.CHROME_PATH ||
  'C:/Program Files/Google/Chrome/Application/chrome.exe';
const outDir = 'scripts/audit-output';

await mkdir(outDir, { recursive: true });

const browser = await puppeteer.launch({
  executablePath,
  headless: 'new',
  args: ['--no-sandbox', '--disable-gpu'],
});

const viewports = [
  { name: 'desktop', width: 1440, height: 900 },
  { name: 'tablet', width: 768, height: 1024, isMobile: false, hasTouch: true },
  {
    name: 'mobile',
    width: 390,
    height: 844,
    isMobile: true,
    hasTouch: true,
    deviceScaleFactor: 2,
  },
];

let totalViolations = 0;

for (const viewport of viewports) {
  const page = await browser.newPage();
  await page.setViewport(viewport);
  await page.goto(url, { waitUntil: 'networkidle0' });

  // Recorrer la página para disparar las animaciones y cargar todo
  await page.evaluate(async () => {
    await new Promise((resolve) => {
      let y = 0;
      const step = () => {
        y += window.innerHeight * 0.8;
        window.scrollTo(0, y);
        if (y < document.body.scrollHeight) {
          requestAnimationFrame(step);
        } else {
          window.scrollTo(0, 0);
          setTimeout(resolve, 400);
        }
      };
      step();
    });
  });

  // Asegurar que todas las secciones estén visibles en la captura (las animaciones
  // de entrada no se disparan al hacer scroll programático en headless)
  await page.evaluate(() => {
    document
      .querySelectorAll('[data-animate]')
      .forEach((el) => el.classList.add('visible'));
    document
      .querySelectorAll('.skill-bar')
      .forEach((el) => el.classList.add('animated'));
  });
  await new Promise((resolve) => setTimeout(resolve, 800));

  await page.screenshot({
    path: `${outDir}/${viewport.name}.png`,
    fullPage: true,
  });

  const results = await new AxePuppeteer(page).analyze();
  totalViolations += results.violations.length;

  console.log(`\n=== ${viewport.name} (${viewport.width}px) ===`);
  console.log(`Violaciones: ${results.violations.length}`);

  for (const violation of results.violations) {
    console.log(
      `- [${violation.impact}] ${violation.id}: ${violation.help} (${violation.nodes.length} nodos)`,
    );
    console.log(
      '  targets:',
      violation.nodes
        .slice(0, 4)
        .map((node) => node.target.join(' '))
        .join(' | '),
    );
  }

  await page.close();
}

// Layout de impresión A4 (96 dpi ≈ 794×1123)
const printPage = await browser.newPage();
await printPage.setViewport({ width: 794, height: 1123 });
await printPage.goto(url, { waitUntil: 'networkidle0' });
await printPage.emulateMediaType('print');
await new Promise((resolve) => setTimeout(resolve, 500));
await printPage.screenshot({
  path: `${outDir}/print-layout.png`,
  fullPage: true,
});
console.log('\nLayout de impresión capturado en scripts/audit-output/print-layout.png');

await browser.close();

if (totalViolations > 0) {
  console.log(`\nTotal de violaciones: ${totalViolations}`);
} else {
  console.log('\n✓ Sin violaciones detectadas por axe-core');
}
