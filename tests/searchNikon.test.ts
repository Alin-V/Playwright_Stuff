import { chromium, test, expect } from "@playwright/test";

test("Search for Nikon test demo", async ({ page }) => {
  await page.goto("https://ecommerce-playground.lambdatest.io/");
  await page.getByRole("button", { name: "Shop by Category" }).click();
  await page.getByRole("link", { name: "Components" }).click();
  await page
    .locator("#mz-filter-panel-0-2")
    .getByText("Mice and Trackballs")
    .click();
  await page.locator("#mz-filter-panel-0-3").getByPlaceholder("Search").click();
  await page
    .locator("#mz-filter-panel-0-3")
    .getByPlaceholder("Search")
    .fill("Nikon");
  await page
    .locator("#mz-filter-panel-0-3")
    .getByPlaceholder("Search")
    .press("Enter");
  await expect(page.locator("h1")).toContainText("Components");
  await expect(page.locator("#entry_212408")).toContainText("Nikon D300");
});
