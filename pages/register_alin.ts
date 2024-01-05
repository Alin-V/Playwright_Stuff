import { type Locator, type Page, expect } from "@playwright/test";

export default class Registration {
  //constructor
  constructor(public page: Page) {}

  async insertFirstName(firstName: string) {
    await this.page.locator("//input[@id='input-firstname']").fill(firstName);
  }

  async insertLastName(lastName: string) {
    await this.page.locator("//input[@id='input-lastname']").fill(lastName);
  }

  async insertEmail(email: string) {
    await this.page.locator("//input[@id='input-email']").fill(email);
  }

  async insertPhone(phone: string) {
    await this.page.locator("//input[@id='input-telephone']").fill(phone);
  }

  async insertPass(pass: string) {
    await this.page.locator("//input[@id='input-password']").fill(pass);
  }

  async confirmPass(pass: string) {
    await this.page.locator("//input[@id='input-confirm']").fill(pass);
  }

  async noNewsletterSunscriptionChecked() {
    await this.page.locator("label[for='input-newsletter-no']").isChecked();
  }

  async termsChecked() {
    await this.page.locator("//label[@for='input-agree']").click();
  }
  async clickContinue() {
    await this.page.locator("input[value='Continue']").click();
  }
}
