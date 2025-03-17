import { test, expect } from '@playwright/test';



  test('should not recognize text', async ({page}) => {
    await page.setExtraHTTPHeaders({
        "x-vercel-protection-bypass": "0XNFmIFSO7oCtirtYS6QsSZZ1AnbKZXw"
      })
    await page.goto("/");
    await page. waitForTimeout(2000);
    await expect(page).toHaveURL("/");
    await expect(page.getByTestId("1")).toContainText("finance");
  });
