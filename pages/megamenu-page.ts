import { type Locator, type Page, expect } from "@playwright/test";

export default class Megamenu {
  //constructor
  constructor(public page: Page) {}

  async megamenuHover() {
    await this.page.locator("//span[normalize-space()='Mega Menu']").hover();
  }
  async desktopClick() {
    await this.page.locator("a[title='Desktop']").click();
  }
  async pcClick() {
    await this.page
      .locator("(//img[@class='figure-img img-fluid'])[1]")
      .click();
  }

  async firstProduceHover() {
    await this.page.locator("(//img[@class='lazy-load'])[1]").hover();
  }
  async addToCartVisible() {
    await this.page
      .locator("(//button[@title='Add to Cart']//i)[1]")
      .waitFor({ state: "visible" });
    //await this.page.locator("(//button[@title='Add to Cart']//i)[1]").click();
  }
  async addToCartClick() {
    // await this.page
    //   .locator("(//i[@class='fas fa-shopping-cart'])[1]")
    //   .waitFor({ state: "visible" });
    await this.page.locator("(//button[@title='Add to Cart']//i)[1]").click();
  }
  async visibleToastCart() {
    const toast = this.page.locator("//a[contains(.,'View Cart')]");
    await toast.waitFor({ state: "visible" });
    return toast;
  }

  async viewCartButtonClick() {
    await this.page.locator("//a[contains(.,'View Cart')]").click();
    // await Promise.all([
    //   await this.page.waitForURL(
    //     `https://ecommerce-playground.lambdatest.io/index.php?route=checkoutcart/`
    //   ),
    //   await this.page.locator("#notification-box-top").click(),
    // ]);
  }
}
