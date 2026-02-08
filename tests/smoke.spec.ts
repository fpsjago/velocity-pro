import { test, expect } from '@playwright/test';

const BASE = '/velocity-pro';
const PAGES = [
  { path: `${BASE}/`, name: 'Home' },
  { path: `${BASE}/features`, name: 'Features' },
  { path: `${BASE}/pricing`, name: 'Pricing' },
  { path: `${BASE}/about`, name: 'About' },
  { path: `${BASE}/contact`, name: 'Contact' },
  { path: `${BASE}/faq`, name: 'FAQ' },
  { path: `${BASE}/blog`, name: 'Blog' },
  { path: `${BASE}/case-studies`, name: 'Case Studies' },
  { path: `${BASE}/changelog`, name: 'Changelog' },
  { path: `${BASE}/login`, name: 'Login' },
  { path: `${BASE}/signup`, name: 'Signup' },
  { path: `${BASE}/docs/getting-started`, name: 'Docs' },
];

test.describe('Smoke Tests - All Pages Load', () => {
  for (const page of PAGES) {
    test(`${page.name} page loads without errors`, async ({ page: p }) => {
      const errors: string[] = [];
      p.on('console', (msg) => {
        if (msg.type() === 'error') {
          // Filter out 404 errors for fonts/images (non-critical)
          const text = msg.text();
          if (!text.includes('404') && !text.includes('Failed to load resource')) {
            errors.push(text);
          }
        }
      });

      await p.goto(page.path);
      await p.waitForLoadState('networkidle');
      
      // Check page loaded (has content)
      const bodyText = await p.textContent('body');
      expect(bodyText?.length).toBeGreaterThan(100);
      
      // Check no console errors (excluding 404s)
      expect(errors).toHaveLength(0);
    });
  }
});

test.describe('Performance Checks', () => {
  test('Home page loads in <3s', async ({ page }) => {
    const startTime = Date.now();
    await page.goto(`${BASE}/`);
    await page.waitForLoadState('load');
    const loadTime = Date.now() - startTime;
    
    expect(loadTime).toBeLessThan(3000);
  });
});
