import { test, expect } from '@playwright/test';


  test('should not recognize text', async ({page}) => {
    await page.goto("https://pw-final-opal.vercel.app/");
    await page. waitForTimeout(2000);
    expect(await page.getByRole('heading', { name: 'Overview' }).isVisible()).toBeTruthy();
  });
