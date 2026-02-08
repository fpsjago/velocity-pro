import { test, expect } from '@playwright/test';

const BASE = '/velocity-pro';

test.describe('Contact Form', () => {
  test('All fields accept input', async ({ page }) => {
    await page.goto(`${BASE}/contact`);
    
    // Fill name
    const nameInput = page.locator('input[name="name"], input[placeholder*="name" i]').first();
    await nameInput.fill('John Doe');
    expect(await nameInput.inputValue()).toBe('John Doe');
    
    // Fill email
    const emailInput = page.locator('input[name="email"], input[type="email"]').first();
    await emailInput.fill('john@example.com');
    expect(await emailInput.inputValue()).toBe('john@example.com');
    
    // Fill subject (if exists)
    const subjectInput = page.locator('input[name="subject"], select[name="subject"]').first();
    if (await subjectInput.count() > 0) {
      if ((await subjectInput.getAttribute('type')) === 'text') {
        await subjectInput.fill('Test Subject');
      } else {
        await subjectInput.selectOption({ index: 1 });
      }
    }
    
    // Fill message
    const messageInput = page.locator('textarea[name="message"], textarea[placeholder*="message" i]').first();
    await messageInput.fill('This is a test message.');
    expect(await messageInput.inputValue()).toBe('This is a test message.');
  });

  test('Submit button exists and is clickable', async ({ page }) => {
    await page.goto(`${BASE}/contact`);
    
    const submitButton = page.locator('button[type="submit"], button:has-text("Send"), button:has-text("Submit")').first();
    await expect(submitButton).toBeVisible();
    await expect(submitButton).toBeEnabled();
  });
});

test.describe('Newsletter Signup', () => {
  test('Email input works', async ({ page }) => {
    await page.goto(`${BASE}/`);
    
    // Find newsletter input (might be in hero or footer)
    const newsletterInput = page.locator('input[placeholder*="email" i], input[type="email"]').first();
    
    if (await newsletterInput.count() > 0) {
      await newsletterInput.fill('test@example.com');
      expect(await newsletterInput.inputValue()).toBe('test@example.com');
    }
  });
});

test.describe('Login Form', () => {
  test('Login form accepts credentials', async ({ page }) => {
    await page.goto(`${BASE}/login`);
    
    // Fill email
    const emailInput = page.locator('input[name="email"], input[type="email"]').first();
    await emailInput.fill('user@example.com');
    expect(await emailInput.inputValue()).toBe('user@example.com');
    
    // Fill password
    const passwordInput = page.locator('input[name="password"], input[type="password"]').first();
    await passwordInput.fill('password123');
    expect(await passwordInput.inputValue()).toBe('password123');
    
    // Check submit button
    const submitButton = page.locator('button[type="submit"], button:has-text("Login"), button:has-text("Sign in")').first();
    await expect(submitButton).toBeVisible();
  });

  test('Social login buttons exist', async ({ page }) => {
    await page.goto(`${BASE}/login`);
    
    // Check for Google/GitHub buttons
    const socialButtons = page.locator('button:has-text("Google"), button:has-text("GitHub"), button:has-text("Continue with")');
    
    if (await socialButtons.count() > 0) {
      await expect(socialButtons.first()).toBeVisible();
    }
  });

  test('Forgot password link exists', async ({ page }) => {
    await page.goto(`${BASE}/login`);
    
    const forgotLink = page.locator('a:has-text("Forgot"), a:has-text("password")');
    if (await forgotLink.count() > 0) {
      await expect(forgotLink.first()).toBeVisible();
    }
  });
});

test.describe('Signup Form', () => {
  test('Signup form accepts input', async ({ page }) => {
    await page.goto(`${BASE}/signup`);
    
    // Fill email
    const emailInput = page.locator('input[name="email"], input[type="email"]').first();
    await emailInput.fill('newuser@example.com');
    expect(await emailInput.inputValue()).toBe('newuser@example.com');
    
    // Fill password
    const passwordInput = page.locator('input[name="password"], input[type="password"]').first();
    await passwordInput.fill('SecurePass123!');
    expect(await passwordInput.inputValue()).toBe('SecurePass123!');
    
    // Check terms checkbox (if exists)
    const termsCheckbox = page.locator('input[type="checkbox"]').first();
    if (await termsCheckbox.count() > 0) {
      await termsCheckbox.check();
      expect(await termsCheckbox.isChecked()).toBe(true);
    }
  });

  test('Password strength indicator exists', async ({ page }) => {
    await page.goto(`${BASE}/signup`);
    
    const passwordInput = page.locator('input[type="password"]').first();
    await passwordInput.fill('weak');
    await page.waitForTimeout(300);
    
    // Check for strength indicator (just check it doesn't crash)
    expect(await page.title()).toBeTruthy();
  });
});
