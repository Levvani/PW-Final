import { test, expect } from '@playwright/test';



  test('should not recognize text', async ({page}) => {
    await page.setExtraHTTPHeaders({
        "x-vercel-protection-bypass": "ayuqGFkqUzVOMlDxBcbTxEEhzFxFwivk"
      })
    await page.goto("/");
    await page. waitForTimeout(2000);
    await expect(page).toHaveURL("/");
    await expect(page.getByTestId("1")).toContainText("finance");
  });
