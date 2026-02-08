import { test, expect } from '@playwright/test';

const BASE = '/velocity-pro';
const PAGES = [
  `${BASE}/`,
  `${BASE}/features`,
  `${BASE}/pricing`,
  `${BASE}/about`,
  `${BASE}/blog`,
];

test.describe('Dark Mode Toggle', () => {
  for (const pagePath of PAGES) {
    test(`Dark mode works on ${pagePath}`, async ({ page }) => {
      await page.goto(pagePath);
      
      // Get initial theme
      const initialTheme = await page.getAttribute('html', 'data-theme');
      
      // Find and click theme toggle
      const toggleButton = page.locator('button[aria-label*="theme" i], button[aria-label*="dark" i], button[aria-label*="light" i]').first();
      
      if (await toggleButton.count() > 0) {
        await toggleButton.click();
        await page.waitForTimeout(500);
        
        // Check theme changed
        const newTheme = await page.getAttribute('html', 'data-theme');
        expect(newTheme).not.toBe(initialTheme);
        
        // Toggle back
        await toggleButton.click();
        await page.waitForTimeout(500);
        
        const finalTheme = await page.getAttribute('html', 'data-theme');
        expect(finalTheme).toBe(initialTheme);
      }
    });
  }
  
  test('Dark mode persists across pages', async ({ page }) => {
    await page.goto(`${BASE}/`);
    
    // Enable dark mode
    const toggleButton = page.locator('button[aria-label*="theme" i], button[aria-label*="dark" i]').first();
    if (await toggleButton.count() > 0) {
      await toggleButton.click();
      await page.waitForTimeout(300);
      
      const theme = await page.getAttribute('html', 'data-theme');
      
      // Navigate to another page
      await page.goto(`${BASE}/features`);
      await page.waitForTimeout(300);
      
      // Check theme persisted
      const newPageTheme = await page.getAttribute('html', 'data-theme');
      expect(newPageTheme).toBe(theme);
    }
  });
});
