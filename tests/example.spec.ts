import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "containing" a substring.
  await expect(page).toHaveTitle(/Playwright/);
  console.log("made a change");
});


test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  console.log("made a change 2");
  console.log("made a change 3");

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
