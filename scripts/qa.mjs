import { chromium } from '@playwright/test';
import fs from 'node:fs';

const OUT = process.env.QA_OUT || './qa-shots';
const BASE = process.env.QA_BASE || 'http://localhost:3000';
const LOCALES = ['ru', 'en', 'tr'];
fs.mkdirSync(OUT, { recursive: true });

const LAUNCH = { args: ['--disable-dev-shm-usage', '--force-color-profile=srgb'] };

async function safeShot(page, opts) {
  for (let i = 0; i < 3; i++) {
    try {
      await page.waitForTimeout(300);
      await page.screenshot({ timeout: 40000, ...opts });
      return true;
    } catch (e) {
      if (i === 2) {
        console.log('  ! shot failed:', opts.path, String(e).slice(0, 60));
        return false;
      }
      await page.waitForTimeout(700);
    }
  }
}

async function scrollThrough(page) {
  await page.evaluate(
    () =>
      new Promise((resolve) => {
        let y = 0;
        let n = 0;
        const step = () => {
          window.scrollTo(0, y);
          y += window.innerHeight * 0.8;
          n += 1;
          if (y < document.body.scrollHeight && n < 40) setTimeout(step, 80);
          else {
            window.scrollTo(0, document.body.scrollHeight);
            setTimeout(resolve, 400);
          }
        };
        step();
      }),
  );
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(500);
}

const stripCanvas = (page) =>
  page.evaluate(() => document.querySelectorAll('canvas').forEach((c) => c.remove()));

async function withBrowser(fn) {
  const browser = await chromium.launch(LAUNCH);
  try {
    await fn(browser);
  } finally {
    await browser.close();
  }
}

// One fresh browser per locale => GPU released between runs (no accumulation).
for (const loc of LOCALES) {
  await withBrowser(async (browser) => {
    const ctx = await browser.newContext({
      viewport: { width: 1440, height: 900 },
      deviceScaleFactor: 1,
      reducedMotion: 'reduce',
    });
    const page = await ctx.newPage();
    await page.goto(`${BASE}/${loc}`, { waitUntil: 'domcontentloaded', timeout: 60000 });
    await page.waitForTimeout(2200);
    await safeShot(page, { path: `${OUT}/${loc}-hero.png` });
    await scrollThrough(page);
    await stripCanvas(page);
    await safeShot(page, { path: `${OUT}/${loc}-full.png`, fullPage: true, animations: 'disabled' });
    await page.getByTestId('chat-launcher').click({ timeout: 8000 }).catch(() => {});
    await page.getByTestId('chat-panel').waitFor({ state: 'visible', timeout: 5000 }).catch(() => {});
    await safeShot(page, { path: `${OUT}/${loc}-chat.png` });
    console.log(`[${loc}] done`);
  });
}

// animated hero (motion on) — its own browser
await withBrowser(async (browser) => {
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 });
  const page = await ctx.newPage();
  await page.goto(`${BASE}/en`, { waitUntil: 'domcontentloaded', timeout: 60000 });
  await page.waitForTimeout(4200);
  await safeShot(page, { path: `${OUT}/en-hero-animated.png` });
  console.log('animated hero done');
});

// mobile — its own browser
await withBrowser(async (browser) => {
  const ctx = await browser.newContext({
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 2,
    isMobile: true,
    reducedMotion: 'reduce',
  });
  const page = await ctx.newPage();
  await page.goto(`${BASE}/en`, { waitUntil: 'domcontentloaded', timeout: 60000 });
  await page.waitForTimeout(2000);
  await scrollThrough(page);
  await stripCanvas(page);
  await safeShot(page, { path: `${OUT}/en-mobile-full.png`, fullPage: true, animations: 'disabled' });
  console.log('mobile done');
});

console.log('QA DONE');
