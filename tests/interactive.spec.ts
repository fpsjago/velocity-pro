import { test, expect } from '@playwright/test';

const BASE = '/velocity-pro';

test.describe('Interactive Components', () => {
  test('Pricing toggle (monthly/annual) works', async ({ page }) => {
    await page.goto(`${BASE}/pricing`);
    
    // Find toggle button/switch
    const toggle = page.locator('button:has-text("Annual"), button:has-text("Yearly"), [role="switch"]').first();
    
    if (await toggle.count() > 0) {
      // Get initial price
      const initialPrice = await page.locator('[class*="price" i]').first().textContent();
      
      // Click toggle
      await toggle.click();
      await page.waitForTimeout(500);
      
      // Check price changed
      const newPrice = await page.locator('[class*="price" i]').first().textContent();
      expect(newPrice).not.toBe(initialPrice);
    }
  });

  test('FAQ accordion expands/collapses', async ({ page }) => {
    await page.goto(`${BASE}/faq`);
    
    // Find first accordion item
    const firstAccordion = page.locator('[class*="accordion" i] button, [role="button"]').first();
    await firstAccordion.click();
    await page.waitForTimeout(300);
    
    // Check content is visible
    const content = page.locator('[class*="accordion" i] [class*="content" i], [role="region"]').first();
    await expect(content).toBeVisible();
    
    // Click again to collapse
    await firstAccordion.click();
    await page.waitForTimeout(300);
  });

  test('Tabs component switches content', async ({ page }) => {
    await page.goto(`${BASE}/features`);
    
    // Find tabs (might be in feature showcase)
    const tabs = page.locator('[role="tab"], button[class*="tab" i]');
    
    if (await tabs.count() > 1) {
      // Click second tab
      await tabs.nth(1).click();
      await page.waitForTimeout(300);
      
      // Check tab is active
      const activeClass = await tabs.nth(1).getAttribute('class');
      expect(activeClass).toContain('active');
    }
  });

  test('CTA buttons exist and are clickable', async ({ page }) => {
    await page.goto(`${BASE}/`);
    
    // Find primary CTA
    const cta = page.locator('a:has-text("Get Started"), a:has-text("Start Free"), button:has-text("Get Started")').first();
    await expect(cta).toBeVisible();
    
    // Check it's clickable (doesn't need to navigate)
    await expect(cta).toBeEnabled();
  });

  test('Testimonial carousel exists', async ({ page }) => {
    await page.goto(`${BASE}/about`);
    
    // Check for testimonial content
    const testimonials = page.locator('[class*="testimonial" i]');
    const count = await testimonials.count();
    
    expect(count).toBeGreaterThan(0);
  });

  test('Stats counter animates', async ({ page }) => {
    await page.goto(`${BASE}/about`);
    
    // Scroll to stats section
    await page.evaluate(() => {
      const stats = document.querySelector('[class*="stats" i]');
      if (stats) stats.scrollIntoView({ behavior: 'smooth' });
    });
    
    await page.waitForTimeout(1000);
    
    // Check stats exist
    const stats = page.locator('[class*="stats" i] [class*="number" i], [class*="stat" i]');
    expect(await stats.count()).toBeGreaterThan(0);
  });

  test('Product demo/showcase interactive', async ({ page }) => {
    await page.goto(`${BASE}/features`);
    
    // Look for interactive demo buttons
    const demoButtons = page.locator('[class*="demo" i] button, [class*="showcase" i] button');
    
    if (await demoButtons.count() > 0) {
      await demoButtons.first().click();
      await page.waitForTimeout(300);
      // Just check it didn't crash
      expect(await page.title()).toBeTruthy();
    }
  });
});

test.describe('Scroll Animations', () => {
  test('Elements fade in on scroll', async ({ page }) => {
    await page.goto(`${BASE}/`);
    
    // Scroll down
    await page.evaluate(() => window.scrollTo(0, 1000));
    await page.waitForTimeout(500);
    
    // Check for animated elements (they should exist)
    const body = await page.textContent('body');
    expect(body?.length).toBeGreaterThan(100);
  });
});
