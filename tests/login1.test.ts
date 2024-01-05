import { test, expect } from "@playwright/test";

test("Login and edit account", async ({ page }) => {
  await page.goto("https://ecommerce-playground.lambdatest.io/");
  await page.hover(
    "//a[@role='button']//span[@class='title'][normalize-space()='My account']"
  );
  await expect(page.getByRole("link", { name: "Login" })).toBeVisible();
  await page.getByRole("link", { name: "Login" }).click();
  await expect(page.getByPlaceholder("E-Mail Address")).toBeVisible();
  await page.getByPlaceholder("E-Mail Address").click();
  await page.getByPlaceholder("E-Mail Address").fill("alin_voicau@yahoo.com");
  await page.getByPlaceholder("E-Mail Address").press("Tab");
  await page.getByPlaceholder("Password").fill("12345678");
  await page.getByPlaceholder("Password").press("Tab");
  await page
    .getByRole("link", { name: "Forgotten Password", exact: true })
    .press("Tab");
  await page.getByRole("button", { name: "Login" }).click();
  await expect(
    page.getByRole("link", { name: " Edit your account" })
  ).toBeVisible();
  await page.getByRole("link", { name: " Edit your account" }).click();
  await page.getByPlaceholder("Telephone").click();
  await page.getByPlaceholder("Telephone").fill("000112333");
  await page.getByPlaceholder("Telephone").press("Tab");
  await page.getByRole("link", { name: " Back" }).press("Tab");
  await page.getByRole("button", { name: "Continue" }).click();
  await expect(page.locator("#account-account")).toContainText(
    "Success: Your account has been successfully updated."
  );
});
