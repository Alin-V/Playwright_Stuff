import { type Locator, type Page, expect } from "@playwright/test";

export class HomePage {
  //variables
  readonly page: Page;
  //await page.getByRole("link", { name: "Get started" }).click();
  readonly getStartedButton: Locator;
  //await expect(page).toHaveTitle(/Playwright/);
  readonly title: RegExp;
  //await page.getByRole("button", { name: "Node.js" }).hover();
  readonly nodejsHoverButton: Locator;
  //   await page
  //       .getByRole("navigation", { name: "Main" })
  //       .getByText("Java")
  //       .click();
  readonly javaButtonClick: Locator;
  //await expect(page).toHaveURL("https://playwright.dev/java/docs/intro");

  //constructor
  constructor(page: Page) {
    this.page = page;
    this.getStartedButton = page.getByRole("link", { name: "Get started" });
    this.title = /Playwright/;
    this.nodejsHoverButton = page.getByRole("button", { name: "Node.js" });
    this.javaButtonClick = page
      .getByRole("navigation", { name: "Main" })
      .getByText("Java");
  }
  //methods
  async clickGetStarted() {
    await this.getStartedButton.click();
  }

  async assertPageTitle() {
    await expect(this.page).toHaveTitle(this.title);
  }

  async assertPageUrl(pageUrl: RegExp) {
    await expect(this.page).toHaveURL(pageUrl);
  }
  async nodeHover() {
    await this.nodejsHoverButton.hover();
  }

  async javaLinkClick() {
    await this.javaButtonClick.click();
  }
}
