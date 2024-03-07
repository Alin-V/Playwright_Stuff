import { test, expect } from "@playwright/test";
test.describe("Main page tests", () => {
  test.slow();
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
    await expect(
      page.locator("(//a[@title='Ghid turistic'])[1]")
    ).toBeVisible();
    await expect(page.locator("(//a[@title='Ghid turistic'])[1]")).toHaveText(
      "Ghid turistic"
    );
    // await page.getByRole("link", { name: "Ghid tuirstic" }).click();
    await page.locator("(//a[@title='Ghid turistic'])[1]").click();
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

  test("6. Login to main page, expect'Spre ghid' to be visible and link present and clickable", async ({
    page,
  }) => {
    await page.goto("https://romaniatravel.guide/ro/");
    await page.getByRole("button", { name: "Refuză" }).click();
    await page.locator(".oax_language_switcher_close").click();
    //await page.locator(".oax_modal_bg").click();
    //await page.getByRole("link", { name: "Despre noi" }).click();
    await expect(
      page.locator("(//div[@class='oax_marg_top_22'])[2]")
    ).toBeVisible();
    await expect(
      page.locator("(//div[@class='oax_marg_top_22'])[2]")
    ).toContainText("Spre ghid");

    await page.locator("(//div[@class='oax_marg_top_22'])[2]").click();
    await expect(page).toHaveURL("https://romaniatravel.guide/ro/");
  });

  test("test 7 ", async ({ page }) => {
    await page.goto("https://romaniatravel.guide/ro/");
    await page.getByRole("button", { name: "Refuză" }).click();
    await page.locator(".oax_language_switcher_close").click();
    await page.getByRole("link", { name: "Ghid turistic ⧽" }).click();
    await expect(page).toHaveURL(
      "https://romaniatravel.guide/ro/ghid-de-calatorie/romania/1036991/"
    );
  });

  test("test 8 ", async ({ page }) => {
    await page.goto("https://romaniatravel.guide/ro/");
    await page.getByRole("button", { name: "Refuză" }).click();
    await page.locator(".oax_language_switcher_close").click();

    await page.getByRole("link", { name: "Patrimoniu UNESCO ⧽" }).click();
    await expect(page).toHaveURL(
      "https://romaniatravel.guide/ro/list/bisericile-din-nordul-moldovei-incluse-in-patrimoniul-unesco/118692693/"
    );
  });
  test("test 8.1 ", async ({ page }) => {
    await page.goto("https://romaniatravel.guide/ro/");
    await page.getByRole("button", { name: "Refuză" }).click();
    await page.locator(".oax_language_switcher_close").click();
    await page.getByRole("link", { name: "Programul de afiliere ⧽" }).click();

    await expect(page).toHaveURL(
      "https://romaniatravel.guide/ro/p/programul-de-afiliere/62673929/"
    );
  });

  test("test 9 ", async ({ page }) => {
    await page.goto("https://romaniatravel.guide/ro/");
    await page.getByRole("button", { name: "Refuză" }).click();
    await page.locator(".oax_language_switcher_close").click();
    await expect(page.locator('[id="\\31 "] div').nth(1)).toBeVisible;
    await page
      .getByRole("link", {
        name: "Recomandare regiune de schi Stațiunea și Pârtia Semenic",
      })
      .click();
    await expect(page).toHaveURL(
      "https://romaniatravel.guide/ro/skiresort/statiunea-si-partia-semenic/34420412/"
    );
  });

  test("test 10 ", async ({ page }) => {
    await page.goto("https://romaniatravel.guide/ro/");
    await page.getByRole("button", { name: "Refuză" }).click();
    await page.locator(".oax_language_switcher_close").click();
    await page
      .getByRole("link", {
        name: "Recomandare regiune de schi Stațiunea Straja",
      })
      .click();
    await expect(page).toHaveURL(
      "https://romaniatravel.guide/ro/skiresort/statiunea-straja/35746237/"
    );
  });

  test("test 11 ", async ({ page }) => {
    await page.goto("https://romaniatravel.guide/ro/");
    await page.getByRole("button", { name: "Refuză" }).click();
    await page.locator(".oax_language_switcher_close").click();
    await page
      .getByRole("link", {
        name: "Recomandare regiune de schi Domeniul schiabil Predeal",
      })
      .click();
    await expect(page).toHaveURL(
      "https://romaniatravel.guide/ro/skiresort/domeniul-schiabil-predeal/44425658/"
    );
  });

  test("test 12 ", async ({ page }) => {
    await page.goto("https://romaniatravel.guide/ro/");
    await page.getByRole("button", { name: "Refuză" }).click();
    await page.locator(".oax_language_switcher_close").click();
    await page
      .getByRole("link", { name: "Recomandare regiune de schi C" })
      .click();
    await expect(page).toHaveURL(
      "https://romaniatravel.guide/ro/skiresort/carlibaba/44425338/"
    );
  });

  test("test 13 ", async ({ page }) => {
    await page.goto("https://romaniatravel.guide/ro/");
    await page.getByRole("button", { name: "Refuză" }).click();
    await page.locator(".oax_language_switcher_close").click();
    await page
      .getByRole("link", { name: "Drumetie de 4 zile in Retezat" })
      .click();
    await expect(page).toHaveURL(
      "https://romaniatravel.guide/ro/offer/drumetie/drumetie-de-4-zile-in-retezat/803613700/"
    );
  });

  test("test 14 ", async ({ page }) => {
    await page.goto("https://romaniatravel.guide/ro/");
    await page.getByRole("button", { name: "Refuză" }).click();
    await page.locator(".oax_language_switcher_close").click();
    await page.getByRole("link", { name: "Picnic la colibe" }).click();
    await expect(page).toHaveURL(
      "https://romaniatravel.guide/ro/offer/minte-corp-si-spirit/picnic-la-colibe/800497410/"
    );
  });

  test("test 15 ", async ({ page }) => {
    await page.goto("https://romaniatravel.guide/ro/");
    await page.getByRole("button", { name: "Refuză" }).click();
    await page.locator(".oax_language_switcher_close").click();
    await page.getByRole("link", { name: "Atelier Ceramică Corund" }).click();
    await expect(page).toHaveURL(
      "https://romaniatravel.guide/ro/offer/olarit/atelier-ceramica-corund/801139739/"
    );
  });

  test("test 16 ", async ({ page }) => {
    await page.goto("https://romaniatravel.guide/ro/");
    await page.getByRole("button", { name: "Refuză" }).click();
    await page.locator(".oax_language_switcher_close").click();
    await page
      .getByRole("link", { name: "Foraging în pădure alături de" })
      .click();
    await expect(page).toHaveURL(
      "https://romaniatravel.guide/ro/offer/minte-corp-si-spirit/foraging-in-padure-alaturi-de-un-biolog-cules-flora-spontana-si-ciuperci/800497469/"
    );
  });
  test("test 17 ", async ({ page }) => {
    await page.goto("https://romaniatravel.guide/ro/");
    await page.getByRole("button", { name: "Refuză" }).click();
    await page.locator(".oax_language_switcher_close").click();
    //   await page
    //     .locator(".oax_slide_control > .oax-icon-arrowhead-right")
    //     .first()
    //     .click();
    //   await page
    //     .locator(".oax_slide_control > .oax-icon-arrowhead-left")
    //     .first()
    //     .click();
    //   await expect(
    //     page.getByRole("img", { name: "Organizează-ți gratuit" })
    //   ).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Organizează-ți gratuit" })
    ).toBeVisible();

    await page
      .getByRole("link", { name: "Planifică acum primul traseu" })
      .click();
    await expect(page).toHaveURL("https://romaniatravel.guide/ro/tourplanner/");
  });

  test("test 18 ", async ({ page }) => {
    await page.goto("https://romaniatravel.guide/ro/");
    await page.getByRole("button", { name: "Refuză" }).click();
    await page.locator(".oax_language_switcher_close").click();
    //   await expect(
    //     page.getByRole("img", { name: "Distribuie traseele parcurse" })
    //   ).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Distribuie traseele parcurse" })
    ).toBeVisible();
  });

  test("test 19 ", async ({ page }) => {
    await page.goto("https://romaniatravel.guide/ro/");
    await page.getByRole("button", { name: "Refuză" }).click();
    await page.locator(".oax_language_switcher_close").click();
    await expect(
      page.getByRole("heading", { name: "Inspirația potrivită pentru" })
    ).toBeVisible();

    await page.getByRole("link", { name: "Destinații de neratat" }).click();
    await expect(page).toHaveURL(
      "https://romaniatravel.guide/ro/p/destinatii-de-neratat/54231123/"
    );
  });

  test("test 20 ", async ({ page }) => {
    await page.goto("https://romaniatravel.guide/ro/");
    await page.getByRole("button", { name: "Refuză" }).click();
    await page.locator(".oax_language_switcher_close").click();
    await page.getByRole("link", { name: "Vacanță în famile" }).click();
    await expect(page).toHaveURL(
      "https://romaniatravel.guide/ro/p/vacanta-in-famile/54230891/"
    );
  });
  test("test 21 ", async ({ page }) => {
    await page.goto("https://romaniatravel.guide/ro/");
    await page.getByRole("button", { name: "Refuză" }).click();
    await page.locator(".oax_language_switcher_close").click();
    await page.getByRole("link", { name: "Paradisuri mountainbike" }).click();
    await expect(page).toHaveURL(
      "https://romaniatravel.guide/ro/p/paradisuri-mountainbike/54230927/"
    );
  });

  //   await page.goto("https://romaniatravel.guide/ro/");
  //   // await page.locator('[id="\\31 0"] div').nth(1).click();
  //   await page.locator(".oax-next").click();
  //   await page.locator(".oax-prev").click();
});
