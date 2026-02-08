import { test, expect } from '@playwright/test';

const BASE = '/velocity-pro';

test.describe('Desktop Navigation', () => {
  test('Navbar links work', async ({ page }) => {
    await page.goto(`${BASE}/`);
    
    // Click Features
    await page.click('nav a[href*="features"]');
    await expect(page).toHaveURL(new RegExp('features'));
    
    // Click Pricing
    await page.click('nav a[href*="pricing"]');
    await expect(page).toHaveURL(new RegExp('pricing'));
    
    // Click Blog
    await page.click('nav a[href*="blog"]');
    await expect(page).toHaveURL(new RegExp('blog'));
  });

  test('Theme toggle works', async ({ page }) => {
    await page.goto(`${BASE}/`);
    
    // Get initial theme
    const initialTheme = await page.getAttribute('html', 'data-theme');
    
    // Click theme toggle
    await page.click('button[aria-label*="theme" i], button[aria-label*="dark" i], button[aria-label*="light" i]');
    await page.waitForTimeout(500);
    
    // Check theme changed
    const newTheme = await page.getAttribute('html', 'data-theme');
    expect(newTheme).not.toBe(initialTheme);
  });
});

test.describe('Mobile Navigation', () => {
  test.use({ viewport: { width: 390, height: 844 } });
  
  test('Mobile menu opens and closes', async ({ page }) => {
    await page.goto(`${BASE}/`);
    
    // Open mobile menu
    const menuButton = page.locator('button[aria-label*="menu" i], button[aria-label*="navigation" i]').first();
    await menuButton.click();
    await page.waitForTimeout(500);
    
    // Check menu is visible
    const mobileMenu = page.locator('[class*="mobile" i][class*="menu" i], [class*="drawer" i]').first();
    await expect(mobileMenu).toBeVisible();
    
    // Click a link
    await page.click('a[href*="features"]');
    await expect(page).toHaveURL(new RegExp('features'));
  });
});

test.describe('Footer Navigation', () => {
  test('Footer links are valid', async ({ page }) => {
    await page.goto(`${BASE}/`);
    
    // Scroll to footer
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(500);
    
    // Check footer has links
    const footerLinks = await page.locator('footer a').count();
    expect(footerLinks).toBeGreaterThan(5);
    
    // Click About link in footer
    await page.click('footer a[href*="about"]');
    await expect(page).toHaveURL(new RegExp('about'));
  });
});
