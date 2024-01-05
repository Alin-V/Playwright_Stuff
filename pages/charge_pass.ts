import { type Locator, type Page, expect } from "@playwright/test";

export default class ChangePassword {
  //constructor
  constructor(public page: Page) {}

  async passwordClick() {
    await this.page.locator("//a[contains(.,'Password')]").click();
  }

  async newPassword(newPass: string) {
    await this.page.locator("input[placeholder='Password']").fill(newPass);
  }

  async newPasswordConfirm(newPass: string) {
    await this.page
      .locator("input[placeholder='Password Confirm']")
      .fill(newPass);
  }
  async continueClick() {
    await this.page.locator("input[value='Continue']").click();
  }
}
