import { test, expect } from '@playwright/test';

const BASE = '/velocity-pro';
const KEY_PAGES = [`${BASE}/`, `${BASE}/pricing`, `${BASE}/features`];

test.describe('Mobile (390×844)', () => {
  test.use({ viewport: { width: 390, height: 844 } });
  
  for (const pagePath of KEY_PAGES) {
    test(`${pagePath} renders on mobile`, async ({ page }) => {
      await page.goto(pagePath);
      await page.waitForLoadState('networkidle');
      
      // Check page has content
      const bodyText = await page.textContent('body');
      expect(bodyText?.length).toBeGreaterThan(100);
      
      // Check no horizontal scroll
      const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
      const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);
      expect(scrollWidth).toBeLessThanOrEqual(clientWidth + 20); // 20px tolerance
    });
  }
});

test.describe('Tablet (768×1024)', () => {
  test.use({ viewport: { width: 768, height: 1024 } });
  
  for (const pagePath of KEY_PAGES) {
    test(`${pagePath} renders on tablet`, async ({ page }) => {
      await page.goto(pagePath);
      await page.waitForLoadState('networkidle');
      
      const bodyText = await page.textContent('body');
      expect(bodyText?.length).toBeGreaterThan(100);
    });
  }
});

test.describe('Desktop (1920×1080)', () => {
  test.use({ viewport: { width: 1920, height: 1080 } });
  
  for (const pagePath of KEY_PAGES) {
    test(`${pagePath} renders on desktop`, async ({ page }) => {
      await page.goto(pagePath);
      await page.waitForLoadState('networkidle');
      
      const bodyText = await page.textContent('body');
      expect(bodyText?.length).toBeGreaterThan(100);
    });
  }
});
