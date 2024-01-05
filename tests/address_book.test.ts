import { chromium, test, expect } from "@playwright/test";
import AddressBook from "../pages/address_book";
import Loginare from "../pages/login_alin";

const newPass = "0987654";
const adresaMail = "Alin_voi@12.com";
const parola = "098765";

test.describe("teste", async () => {
  test("Login test demo", async ({ page, baseURL }) => {
    const logare = new Loginare(page);
    const adrese = new AddressBook(page);
    await page.goto(`${baseURL}route=account/login`);
    await logare.login(adresaMail, parola);
    await adrese.addressBookLinkClick();
    await adrese.newAddressBtnClick();
    await adrese.addressFirstName("kaka baka");
    await adrese.addressLastname("baka kaka");
    await adrese.addressCompanyname("Umbrella Corp");
    await adrese.addressAddress1("str. Milky Way");
    await adrese.addressAddress2("Nr 25");
    await adrese.addressCity("Bacau");
    await adrese.addressPostCode("300_12 U32");
    await adrese.addressCountryClick();
    await adrese.addressCountry("Togo");
    await adrese.addressStateClick();
    await adrese.addressState("Kara");
    await expect(adrese.addressNoDefaultAdressChecked).toBeTruthy();
    await adrese.addressContinueClick();
    await expect(
      adrese.page.locator(
        "//div[@class='alert alert-success alert-dismissible']"
      )
    ).toContainText("Your address has been successfully added");
    await expect(
      adrese.page.locator("(//td[@class='text-left p-3'])[2]")
    ).toContainText("kaka baka");
  });
});
