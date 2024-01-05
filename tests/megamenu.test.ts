import { chromium, test, expect } from "@playwright/test";
import Megamenu from "../pages/megamenu-page";

test.describe("teste", async () => {
  test("Registration test demo", async ({ page, baseURL }) => {
    const mMenu = new Megamenu(page);
    await mMenu.page.goto(`${baseURL}route=account/login`);
    await mMenu.megamenuHover();
    await mMenu.desktopClick();
    await mMenu.pcClick();
    await mMenu.firstProduceHover();
    await mMenu.addToCartClick();
    await mMenu.viewCartButtonClick();
  });
});
