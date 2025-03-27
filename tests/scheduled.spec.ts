import { test, expect } from "@playwright/test";

test("check that url is correct", async ({ page }) => {
  await page.setExtraHTTPHeaders({
    "x-vercel-protection-bypass": "ayuqGFkqUzVOMlDxBcbTxEEhzFxFwivk",
  });
  await page.goto("/");
  await page.waitForTimeout(2000);
  await expect(page).toHaveURL("/");
});
