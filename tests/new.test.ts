import { test, expect } from "@playwright/test";

  test("1.Login to main page, expect Romania Travel Guide logo to be visible", async ({
    page,
  }) => {
    await page.goto("https://romaniatravel.guide/ro/");
    // expect (await page.locator("div.oax_logo_head").toBeVisible());
    await expect(page.locator("div.oax_logo_head")).toBeVisible();
  });