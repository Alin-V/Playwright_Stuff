import { type Locator, type Page, expect } from "@playwright/test";

export default class Loginare {
  //constructor
  constructor(public page: Page) {}

  
  async login(email: string, password: string) {
    await this.insertEmail(email);
    await this.insertPass(password);
    await this.clickLoginButton();
    //await this.page.locator("//input[@id='input-email']").fill(email);
  }

  async insertEmail(email: string) {
    await this.page.locator("//input[@id='input-email']").fill(email);
  }

  async insertPass(password: string) {
    await this.page.locator("//input[@id='input-password']").fill(password);
  }

  async clickLoginButton() {
    await this.page.locator("//input[@value='Login']").click();
  }
}
