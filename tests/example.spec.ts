import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/community/welcome');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
  const timestamp = Date.now();
  await page.screenshot({path:`test-results/screenshots/screenshot-${timestamp}.png`,fullPage: true})
});

/*test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});*/
