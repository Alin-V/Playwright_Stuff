import { chromium, test, expect } from "@playwright/test";

test("login test demo", async ({ page }) => {
  await page.goto("https://ecommerce-playground.lambdatest.io/");
  await page.hover(
    "//a[@role='button']//span[@class='title'][normalize-space()='My account']"
  );
  await page.click("text=Login");
  await expect(page.getByPlaceholder("E-Mail Address")).toBeVisible();
  await page.fill("//input[@id='input-email']", "alin_voicau@yahoo.com");
  await page.fill("//input[@type='password']", "12345678");
  await page.click("input[value='Login']");
  await page.waitForTimeout(5000);
});

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
