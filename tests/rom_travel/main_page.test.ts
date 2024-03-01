import { test, expect } from "@playwright/test";
test.describe("Main page tests", () => {
  test("1.Login to main page, expect Romania Travel Guide logo to be visible", async ({
    page,
  }) => {
    await page.goto("https://romaniatravel.guide/ro/");
    // expect (await page.locator("div.oax_logo_head").toBeVisible());
    await expect(page.locator("div.oax_logo_head")).toBeVisible();
  });

  test("2. Login to main page, expect Ghid turistic to be visible and link present and clickable", async ({
    page,
  }) => {
    await page.goto("https://romaniatravel.guide/ro/");
    await page.getByRole("button", { name: "Refuză" }).click();
    await page.locator(".oax_language_switcher_close").click();
    // expect (await page.locator("div.oax_logo_head").toBeVisible());
    await expect(page.locator("a[title='Ghid tuirstic']")).toBeVisible();
    await expect(page.locator("a[title='Ghid tuirstic']")).toHaveText(
      "Ghid tuirstic"
    );
    // await page.getByRole("link", { name: "Ghid tuirstic" }).click();
    await page.locator("//a[contains(text(),'Ghid tuirstic')]").click();
    await expect(page).toHaveURL(
      "https://romaniatravel.guide/ro/ghid-de-calatorie/romania/1036991/"
    );
  });

  test("3. Login to main page, expect Destinatii to be visible and link present and clickable", async ({
    page,
  }) => {
    await page.goto("https://romaniatravel.guide/ro/");
    await page.getByRole("button", { name: "Refuză" }).click();
    await page.locator(".oax_language_switcher_close").click();
    await expect(page.locator("a[title='Destinații']")).toBeVisible();
    await page.locator("//a[contains(text(),'Destinații')]").click();
    await expect(page).toHaveURL("https://romaniatravel.guide/ro/pois/");
    //await page.getByRole("link", { name: "Destinații Destinații" }).click();

    //   await page.getByRole('link', { name: 'English' }).click();
    //   await page.getByRole('link', { name: 'română' }).click();
  });

  test("4. Login to main page, expect Trasee to be visible and link present and clickable", async ({
    page,
  }) => {
    await page.goto("https://romaniatravel.guide/ro/");
    await page.getByRole("button", { name: "Refuză" }).click();
    await page.locator(".oax_language_switcher_close").click();
    await expect(page.locator("a[title='Trasee']")).toBeVisible();
    //await page.getByRole("link", { name: "Trasee Trasee" }).click();
    await page.locator("//a[contains(text(),'Trasee')]").click();
    await expect(page).toHaveURL("https://romaniatravel.guide/ro/tours/");
  });

  test("5. Login to main page, expect Despre noi to be visible and link present and clickable", async ({
    page,
  }) => {
    await page.goto("https://romaniatravel.guide/ro/");
    await page.getByRole("button", { name: "Refuză" }).click();
    await page.locator(".oax_language_switcher_close").click();
    //await page.locator(".oax_modal_bg").click();

    await expect(page.locator("a[title='Despre noi']")).toBeVisible();
    //await page.getByRole("link", { name: "Despre noi" }).click();
    await page.locator("//a[contains(text(),'Despre noi')]").click();
    await expect(page).toHaveURL(
      "https://romaniatravel.guide/ro/source/romaniatravel.guide/33680816/"
    );
  });
});
