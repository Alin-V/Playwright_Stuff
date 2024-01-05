import { chromium, test, expect } from "@playwright/test";

test.skip("positive test", async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://ecommerce-playground.lambdatest.io/");
  await page.hover(
    "//a[@role='button']//span[@class='title'][normalize-space()='My account']"
  );
  await page.getByRole("link", { name: "Register" }).click();
  await page.getByPlaceholder("First Name").click();
  await page.getByPlaceholder("First Name").fill("cucu1");
  await page.getByPlaceholder("Last Name").click();
  await page.getByPlaceholder("Last Name").fill("bau");
  await page.getByPlaceholder("Last Name").press("Tab");
  await page.getByPlaceholder("E-Mail").fill("ali_@yahoo.com");
  await page.getByPlaceholder("E-Mail").press("Tab");
  await page.getByPlaceholder("Telephone").fill("000112331");
  await page.getByPlaceholder("Telephone").press("Tab");
  await page.getByPlaceholder("Password", { exact: true }).fill("12345678");
  await page.getByPlaceholder("Password", { exact: true }).press("Tab");
  await page.getByPlaceholder("Password Confirm").fill("12345678");
  await page.waitForTimeout(3000);
  await page.getByText("I have read and agree to the").click();
  await page.getByRole("button", { name: "Continue" }).click();
  await page.waitForTimeout(5000);
 // await page.getByRole("link", { name: "Continue" }).click();
});

test("negative test", async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://ecommerce-playground.lambdatest.io/");
  await page.hover(
    "//a[@role='button']//span[@class='title'][normalize-space()='My account']"
  );
  await page.getByRole("link", { name: "Register" }).click();
  await page.getByPlaceholder("First Name").click();
  await page.getByPlaceholder("First Name").fill("cucu1");
  await page.getByPlaceholder("Last Name").click();
  await page.getByPlaceholder("Last Name").fill("bau");
  await page.getByPlaceholder("Last Name").press("Tab");
  await page.getByPlaceholder("E-Mail").fill("ali_@yahoo.com");
  await page.getByPlaceholder("E-Mail").press("Tab");
  await page.getByPlaceholder("Telephone").fill("000112331");
  await page.getByPlaceholder("Telephone").press("Tab");
  await page.getByPlaceholder("Password", { exact: true }).fill("12345678");
  await page.getByPlaceholder("Password", { exact: true }).press("Tab");
  await page.getByPlaceholder("Password Confirm").fill("12345678");
  await page.waitForTimeout(3000);
  await page.getByText("I have read and agree to the").click();
  await page.getByRole("button", { name: "Continue" }).click();
  //await page.getByRole("link", { name: "Continue" }).click();

  await page.waitForTimeout(5000);
  await expect(page.locator("div.alert.alert-danger.alert-dismissible"))
    .toBeVisible;
  await expect(
    page.locator("div.alert.alert-danger.alert-dismissible")
  ).toContainText("Warning: E-Mail Address is already registered!");
});
