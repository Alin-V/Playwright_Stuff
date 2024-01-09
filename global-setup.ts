import { Browser, chromium, test, expect, Page } from "@playwright/test";

async function globalSetup() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();
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
  await page.context().storageState({ path: "./LoginAuth.json" });
  await browser.close();
}
export default globalSetup;
