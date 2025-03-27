import { test, expect } from "@playwright/test";

test("check that url is correct", async ({ page }) => {
  await page.setExtraHTTPHeaders({
    "x-vercel-protection-bypass": "ayuqGFkqUzVOMlDxBcbTxEEhzFxFwivk",
  });
  await page.goto(
    "https://pw-final-61clpvlad-levans-projects-ecb3e91e.vercel.app"
  );
  await page.waitForTimeout(2000);
  await expect(page).toHaveURL(
    "https://pw-final-61clpvlad-levans-projects-ecb3e91e.vercel.app"
  );
});
