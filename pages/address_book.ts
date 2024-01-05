import { type Locator, type Page, expect } from "@playwright/test";

export default class AddressBook {
  //constructor
  constructor(public page: Page) {}

  async addressBookLinkClick() {
    await this.page.locator("//a[contains(.,'Address Book')]").click();
  }

  async newAddressBtnClick() {
    await this.page.locator("//a[contains(text(),'New Address')]").click();
  }

  async addressLastname(lastName: string) {
    await this.page.locator("//input[@id='input-lastname']").fill(lastName);
  }

  async addressFirstName(firstName: string) {
    await this.page.locator("input[placeholder='First Name']").fill(firstName);
  }

  async addressCompanyname(companyName: string) {
    await this.page.locator("//input[@id='input-company']").fill(companyName);
  }

  async addressAddress1(addressOne: string) {
    await this.page.locator("//input[@id='input-address-1']").fill(addressOne);
  }
  async addressAddress2(addressTwo: string) {
    await this.page.locator("//input[@id='input-address-2']").fill(addressTwo);
  }
  async addressCity(city: string) {
    await this.page.locator("//input[@id='input-city']").fill(city);
  }

  async addressPostCode(postCode: string) {
    await this.page.locator("//input[@id='input-postcode']").fill(postCode);
  }

  async addressCountryClick() {
    await this.page.locator("//select[@id='input-country']").click();
  }
  async addressCountry(country: string) {
    await this.page
      .locator("//select[@id='input-country']")
      .selectOption(country);
  }

  async addressStateClick() {
    await this.page.locator("//select[@id='input-zone']").click();
  }
  async addressState(state: string) {
    await this.page.locator("//select[@id='input-zone']").selectOption(state);
  }

  async addressNoDefaultAdressChecked() {
    await this.page.locator("//label[normalize-space()='No']").isChecked();
  }
  async addressContinueClick() {
    await this.page.locator("//input[@value='Continue']").click();
  }
}
