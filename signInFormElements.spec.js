import { test, expect } from '@playwright/test';

test('`Sign in` form elements presence', async ({ page }) => {
 
  await page.goto('https://conduit.mate.academy/user/login');
  await expect(page.getByRole('heading', { name: 'Sign in' })).toBeVisible();
  await expect(
    page.getByRole('link', { name: 'Need an account?' }),
  ).toBeVisible();
  await expect(page.getByPlaceholder('Email')).toBeVisible();
  await expect(page.getByPlaceholder('Password')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Sign in' })).toBeVisible();
});
