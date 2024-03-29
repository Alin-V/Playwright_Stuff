import { chromium, test, expect } from "@playwright/test";
import Registration from "../pages/register_alin";
import { isReadable } from "stream";
import Loginare from "../pages/login_alin";

const adresaMail = "Alin_voi@12.com";
const parola = "1234567890";

test.describe("teste", async () => {
  test("Logout and registration test demo", async ({ page, baseURL }) => {
    await page.goto("https://ecommerce-playground.lambdatest.io/");
    const inregistrat = new Registration(page);
    await page.hover(
      "//a[@role='button']//span[@class='title'][normalize-space()='My account']"
    );
    await expect(
      page.locator("//span[text()[normalize-space()='Dashboard']]")
    ).toBeVisible();
    await page.locator("//span[text()[normalize-space()='Logout']]").click();

    await inregistrat.page.goto(`${baseURL}route=account/register`);
    await expect(page.locator("//input[@id='input-firstname']")).toBeVisible();
    await inregistrat.insertFirstName("Alin");
    await inregistrat.insertLastName("Alin");
    await inregistrat.insertEmail(adresaMail);
    await inregistrat.insertPhone("1234512345");
    await inregistrat.insertPass(parola);
    await inregistrat.confirmPass(parola);
    await expect(inregistrat.noNewsletterSunscriptionChecked()).toBeTruthy;
    await inregistrat.termsChecked();
    await inregistrat.clickContinue();
    await inregistrat.page.waitForTimeout(5000);
  });

  test.skip("Login test demo", async ({ page, baseURL }) => {
    const logare = new Loginare(page);
    await logare.page.goto(`${baseURL}route=account/login`);
    await logare.insertEmail(adresaMail);
    await logare.insertPass(parola);
    await logare.clickLoginButton();
    await logare.page.waitForTimeout(5000);
  });
});
