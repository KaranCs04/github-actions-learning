import  {test, expect} from '@playwright/test';

test('GitHub homepage has correct title', async ({ page }) => {
  // Go to GitHub
  await page.goto('https://github.com');
  
  // Check the page title contains "GitHub"
  await expect(page).toHaveTitle(/GitHub/);
});

test('GitHub homepage has a sign-in link', async ({ page }) => {
  await page.goto('https://github.com');
  
  // Find the sign-in link and check it's visible
  const signInLink = page.getByRole('link', { name: 'Sign in' }).first();
  await expect(signInLink).toBeVisible();
});