import { test, expect } from "@playwright/test";
test.describe("Ghid calatorie page tests", () => {
  test.slow();
  test("test1", async ({ page }) => {
    await page.goto(
      "https://romaniatravel.guide/ro/ghid-de-calatorie/romania/1036991/"
    );
    await page.getByRole("button", { name: "Refuză" }).click();
    await page.locator(".oax_language_switcher_close").click();

    await expect(page.getByRole("heading", { name: "Regiuni" })).toBeVisible();
    await page
      .getByRole("link", { name: "Banat Banatul este o destinaț" })
      .click();
    await expect(page).toHaveURL(
      "https://romaniatravel.guide/ro/ghid-de-calatorie/romania/banat/33306071/"
    );
  });

  test("test2", async ({ page }) => {
    await page.goto(
      "https://romaniatravel.guide/ro/ghid-de-calatorie/romania/1036991/"
    );
    await page.getByRole("button", { name: "Refuză" }).click();
    await page.locator(".oax_language_switcher_close").click();
    await page.getByRole("link", { name: "Crișana Numeroase cetăți," }).click();
    await expect(page).toHaveURL(
      "https://romaniatravel.guide/ro/ghid-de-calatorie/romania/crisana/33306073/"
    );
  });

  test("test3", async ({ page }) => {
    await page.goto(
      "https://romaniatravel.guide/ro/ghid-de-calatorie/romania/1036991/"
    );
    await page.getByRole("button", { name: "Refuză" }).click();
    await page.locator(".oax_language_switcher_close").click();
    await page
      .getByRole("link", { name: "Maramureș Peisaje pitorești," })
      .click();
    await expect(page).toHaveURL(
      "https://romaniatravel.guide/ro/ghid-de-calatorie/romania/maramures/33306075/"
    );
  });

  test("test4", async ({ page }) => {
    await page.goto(
      "https://romaniatravel.guide/ro/ghid-de-calatorie/romania/1036991/"
    );
    await page.getByRole("button", { name: "Refuză" }).click();
    await page.locator(".oax_language_switcher_close").click();
    await page
      .getByRole("link", { name: "Oltenia Oltenia surprinde cu" })
      .click();
    await expect(page).toHaveURL(
      "https://romaniatravel.guide/ro/ghid-de-calatorie/romania/oltenia/33306078/"
    );
  });

  test("test5", async ({ page }) => {
    await page.goto(
      "https://romaniatravel.guide/ro/ghid-de-calatorie/romania/1036991/"
    );
    await page.getByRole("button", { name: "Refuză" }).click();
    await page.locator(".oax_language_switcher_close").click();
    await page
      .getByRole("link", { name: "Bucovina Fie că ești iubitor" })
      .click();
    await expect(page).toHaveURL(
      "https://romaniatravel.guide/ro/ghid-de-calatorie/romania/bucovina/33306072/"
    );
  });

  test("test6", async ({ page }) => {
    await page.goto(
      "https://romaniatravel.guide/ro/ghid-de-calatorie/romania/1036991/"
    );
    await page.getByRole("button", { name: "Refuză" }).click();
    await page.locator(".oax_language_switcher_close").click();
    await page
      .getByRole("link", { name: "Dobrogea Dobrogea însumează o" })
      .click();
    await expect(page).toHaveURL(
      "https://romaniatravel.guide/ro/ghid-de-calatorie/romania/dobrogea/33306074/"
    );
  });

  test("test7", async ({ page }) => {
    await page.goto(
      "https://romaniatravel.guide/ro/ghid-de-calatorie/romania/1036991/"
    );
    await page.getByRole("button", { name: "Refuză" }).click();
    await page.locator(".oax_language_switcher_close").click();
    await page
      .getByRole("link", { name: "Muntenia Muntenia poate fi o" })
      .click();
    await expect(page).toHaveURL(
      "https://romaniatravel.guide/ro/ghid-de-calatorie/romania/muntenia/33306077/"
    );
  });

  test("test8", async ({ page }) => {
    await page.goto(
      "https://romaniatravel.guide/ro/ghid-de-calatorie/romania/1036991/"
    );
    await page.getByRole("button", { name: "Refuză" }).click();
    await page.locator(".oax_language_switcher_close").click();
    await page
      .getByRole("link", { name: "Moldova Moldova a devenit de" })
      .click();
    await expect(page).toHaveURL(
      "https://romaniatravel.guide/ro/ghid-de-calatorie/romania/moldova/33306076/"
    );
  });

  test("test9", async ({ page }) => {
    await page.goto(
      "https://romaniatravel.guide/ro/ghid-de-calatorie/romania/1036991/"
    );
    await page.getByRole("button", { name: "Refuză" }).click();
    await page.locator(".oax_language_switcher_close").click();
    await page.getByRole("link", { name: "Transilvania Așezată în" }).click();
    await expect(page).toHaveURL(
      "https://romaniatravel.guide/ro/ghid-de-calatorie/romania/transilvania/33306079/"
    );
  });

  test("test10", async ({ page }) => {
    await page.goto(
      "https://romaniatravel.guide/ro/ghid-de-calatorie/romania/1036991/"
    );
    await page.getByRole("button", { name: "Refuză" }).click();
    await page.locator(".oax_language_switcher_close").click();
    //   await expect(
    //     page.getByRole("heading", { name: "Atracții și rezervații" })
    //   ).toBeVisible();

    //   await expect(
    //     page.getByRole("heading", { name: "Activități în România" })
    //   ).toBeVisible();
    await page.getByRole("link", { name: "drumeţii" }).scrollIntoViewIfNeeded();
    await page.getByRole("link", { name: "drumeţii" }).click();
    await expect(page).toHaveURL(
      "https://romaniatravel.guide/ro/drumetii/romania/drumetii-in-romania/3595689/"
    );
  });

  test("test11", async ({ page }) => {
    await page.goto(
      "https://romaniatravel.guide/ro/ghid-de-calatorie/romania/1036991/"
    );
    await page.getByRole("button", { name: "Refuză" }).click();
    await page.locator(".oax_language_switcher_close").click();
    await page
      .getByRole("link", { name: "trasee de bicicletă" })
      .scrollIntoViewIfNeeded();
    await page.getByRole("link", { name: "trasee de bicicletă" }).click();
    await expect(page).toHaveURL(
      "https://romaniatravel.guide/ro/trasee-de-bicicleta/romania/trasee-de-bicicleta-in-romania/6852978/"
    );
  });

  test("test12", async ({ page }) => {
    await page.goto(
      "https://romaniatravel.guide/ro/ghid-de-calatorie/romania/1036991/"
    );
    await page.getByRole("button", { name: "Refuză" }).click();
    await page.locator(".oax_language_switcher_close").click();
    await page
      .getByRole("link", { name: "trasee de creastă" })
      .scrollIntoViewIfNeeded();
    await page.getByRole("link", { name: "trasee de creastă" }).click();
    await expect(page).toHaveURL(
      "https://romaniatravel.guide/ro/trasee-de-creasta/romania/drumetie-montana-in-romania/2527903/"
    );
  });

  test("test13", async ({ page }) => {
    await page.goto(
      "https://romaniatravel.guide/ro/ghid-de-calatorie/romania/1036991/"
    );
    await page.getByRole("button", { name: "Refuză" }).click();
    await page.locator(".oax_language_switcher_close").click();
    await page
      .getByRole("link", { name: "Sporturi acvatice" })
      .scrollIntoViewIfNeeded();
    await page.getByRole("link", { name: "Sporturi acvatice" }).click();
    await expect(page).toHaveURL(
      "https://romaniatravel.guide/ro/sporturi-acvatice/romania/sporturi-nautice-in-romania/14526086/"
    );
  });

  test("test14", async ({ page }) => {
    await page.goto(
      "https://romaniatravel.guide/ro/ghid-de-calatorie/romania/1036991/"
    );
    await page.getByRole("button", { name: "Refuză" }).click();
    await page.locator(".oax_language_switcher_close").click();
    //   await expect(
    //     page.getByRole("heading", { name: "Activități și locuri de văzut" })
    //   ).toBeVisible;
    await page
      .getByRole("link", { name: "Concedii în familie" })
      .scrollIntoViewIfNeeded();
    await page.getByRole("link", { name: "Concedii în familie" }).click();
    await expect(page).toHaveURL(
      "https://romaniatravel.guide/ro/concedii-in-familie/romania/vacante-pentru-familii-in-romania/202376195/"
    );
  });

  test("test15", async ({ page }) => {
    await page.goto(
      "https://romaniatravel.guide/ro/ghid-de-calatorie/romania/1036991/"
    );
    await page.getByRole("button", { name: "Refuză" }).click();
    await page.locator(".oax_language_switcher_close").click();
    await page
      .getByRole("link", { name: "castele/conace" })
      .scrollIntoViewIfNeeded();
    await page.getByRole("link", { name: "castele/conace" }).click();
    await expect(page).toHaveURL(
      "https://romaniatravel.guide/ro/castele-conace/romania/cetati-castele-si-alte-fortificatii-din-romania/126346014/"
    );
  });

  test("test16", async ({ page }) => {
    await page.goto(
      "https://romaniatravel.guide/ro/ghid-de-calatorie/romania/1036991/"
    );
    await page.getByRole("button", { name: "Refuză" }).click();
    await page.locator(".oax_language_switcher_close").click();
    await page
      .getByRole("link", { name: "Destinații unde poți lua și c" })
      .scrollIntoViewIfNeeded();
    await page
      .getByRole("link", { name: "Destinații unde poți lua și c" })
      .click();
    await expect(page).toHaveURL(
      "https://romaniatravel.guide/ro/destinatii-unde-poti-lua-si-cainele/romania/locatii-pet-friendly-in-romania/202376194/"
    );
  });

  test("test17", async ({ page }) => {
    await page.goto(
      "https://romaniatravel.guide/ro/ghid-de-calatorie/romania/1036991/"
    );
    await page.getByRole("button", { name: "Refuză" }).click();
    await page.locator(".oax_language_switcher_close").click();
    await page.getByRole("link", { name: "cabane" }).scrollIntoViewIfNeeded();
    await page.getByRole("link", { name: "cabane" }).click();
    await expect(page).toHaveURL(
      "https://romaniatravel.guide/ro/cabane/romania/cabane-din-romania/11941124/"
    );
  });

  test("test18", async ({ page }) => {
    await page.goto(
      "https://romaniatravel.guide/ro/ghid-de-calatorie/romania/1036991/"
    );
    await page.getByRole("button", { name: "Refuză" }).click();
    await page.locator(".oax_language_switcher_close").click();
    await page
      .getByRole("link", { name: "Locuri fascinante din România" })
      .scrollIntoViewIfNeeded();
    await page
      .getByRole("link", { name: "Locuri fascinante din România" })
      .click();
    await expect(page).toHaveURL(
      "https://romaniatravel.guide/ro/p/locuri-fascinante-din-romania-muntii-carpati/66680385/"
    );
  });

  test("test19", async ({ page }) => {
    await page.goto(
      "https://romaniatravel.guide/ro/ghid-de-calatorie/romania/1036991/"
    );
    await page.getByRole("button", { name: "Refuză" }).click();
    await page.locator(".oax_language_switcher_close").click();
    await page
      .getByRole("link", { name: "Via Transilvanica" })
      .scrollIntoViewIfNeeded();
    await page.getByRole("link", { name: "Via Transilvanica" }).click();
    await expect(page).toHaveURL(
      "https://romaniatravel.guide/ro/p/via-transilvanica/800056341/"
    );
  });

  test("test20", async ({ page }) => {
    await page.goto(
      "https://romaniatravel.guide/ro/ghid-de-calatorie/romania/1036991/"
    );
    await page.getByRole("button", { name: "Refuză" }).click();
    await page.locator(".oax_language_switcher_close").click();
    await page
      .getByRole("link", { name: "Cu bicicleta pe EuroVelo 6 -" })
      .scrollIntoViewIfNeeded();
    await page
      .getByRole("link", { name: "Cu bicicleta pe EuroVelo 6 -" })
      .click();
    await expect(page).toHaveURL(
      "https://romaniatravel.guide/ro/p/cu-bicicleta-pe-eurovelo-6-segmentul-romanesc/800449827/"
    );
  });

  test("test21", async ({ page }) => {
    await page.goto(
      "https://romaniatravel.guide/ro/ghid-de-calatorie/romania/1036991/"
    );
    await page.getByRole("button", { name: "Refuză" }).click();
    await page.locator(".oax_language_switcher_close").click();
    await page
      .getByRole("link", { name: "Bisericile din nordul" })
      .scrollIntoViewIfNeeded();
    await page.getByRole("link", { name: "Bisericile din nordul" }).click();
    await expect(page).toHaveURL(
      "https://romaniatravel.guide/ro/list/bisericile-din-nordul-moldovei-incluse-in-patrimoniul-unesco/118692693/"
    );
  });

  test("test22", async ({ page }) => {
    await page.goto(
      "https://romaniatravel.guide/ro/ghid-de-calatorie/romania/1036991/"
    );
    await page.getByRole("button", { name: "Refuză" }).click();
    await page.locator(".oax_language_switcher_close").click();
    await page
      .getByRole("link", { name: "Cetăţile Dacice din Munţii Or" })
      .scrollIntoViewIfNeeded();
    await page
      .getByRole("link", { name: "Cetăţile Dacice din Munţii Or" })
      .click();
    await expect(page).toHaveURL(
      "https://romaniatravel.guide/ro/list/cetatile-dacice-din-muntii-orastiei/118859264/"
    );
  });

  test("test23", async ({ page }) => {
    await page.goto(
      "https://romaniatravel.guide/ro/ghid-de-calatorie/romania/1036991/"
    );
    await page.getByRole("button", { name: "Refuză" }).click();
    await page.locator(".oax_language_switcher_close").click();
    await page
      .getByRole("link", { name: "Vacanță în famile" })
      .scrollIntoViewIfNeeded();
    await page.getByRole("link", { name: "Vacanță în famile" }).click();
    await expect(page).toHaveURL(
      "https://romaniatravel.guide/ro/p/vacanta-in-famile/54230891/"
    );
  });

  test("test24", async ({ page }) => {
    await page.goto(
      "https://romaniatravel.guide/ro/ghid-de-calatorie/romania/1036991/"
    );
    await page.getByRole("button", { name: "Refuză" }).click();
    await page.locator(".oax_language_switcher_close").click();
    await page
      .getByRole("link", { name: " Colecții Centre de echitație" })
      .scrollIntoViewIfNeeded();
    await page
      .getByRole("link", { name: " Colecții Centre de echitație" })
      .click();
    await expect(page).toHaveURL(
      "https://romaniatravel.guide/ro/list/centre-de-echitatie/176231195/"
    );
  });

  test("test25", async ({ page }) => {
    await page.goto(
      "https://romaniatravel.guide/ro/ghid-de-calatorie/romania/1036991/"
    );
    await page.getByRole("button", { name: "Refuză" }).click();
    await page.locator(".oax_language_switcher_close").click();
    await page
      .getByRole("link", { name: " Colecții Parcuri de distrac" })
      .scrollIntoViewIfNeeded();
    await page
      .getByRole("link", { name: " Colecții Parcuri de distrac" })
      .click();
    await expect(page).toHaveURL(
      "https://romaniatravel.guide/ro/list/parcuri-de-distractii-si-aventura/179090672/"
    );
  });

  test("test26", async ({ page }) => {
    await page.goto(
      "https://romaniatravel.guide/ro/ghid-de-calatorie/romania/1036991/"
    );
    await page.getByRole("button", { name: "Refuză" }).click();
    await page.locator(".oax_language_switcher_close").click();
    // await page.getByRole("heading", { name: "Destinația ideală de concediu" }).scrollIntoViewIfNeeded();
    //   await expect(
    //     page.getByRole("heading", { name: "Destinația ideală de concediu" })
    //   ).toBeVisible();
    await page
      .getByRole("link", { name: "România Transilvania" })
      .scrollIntoViewIfNeeded();
    await page.getByRole("link", { name: "România Transilvania" }).click();
    await expect(page).toHaveURL(
      "https://romaniatravel.guide/ro/ghid-de-calatorie/romania/transilvania/33306079/"
    );
  });

  test("test27", async ({ page }) => {
    await page.goto(
      "https://romaniatravel.guide/ro/ghid-de-calatorie/romania/1036991/"
    );
    await page.getByRole("button", { name: "Refuză" }).click();
    await page.locator(".oax_language_switcher_close").click();
    await page
      .getByRole("link", { name: "România Dobrogea" })
      .scrollIntoViewIfNeeded();
    await page.getByRole("link", { name: "România Dobrogea" }).click();
    await expect(page).toHaveURL(
      "https://romaniatravel.guide/ro/ghid-de-calatorie/romania/dobrogea/33306074/"
    );
  });

  test("test28", async ({ page }) => {
    await page.goto(
      "https://romaniatravel.guide/ro/ghid-de-calatorie/romania/1036991/"
    );
    await page.getByRole("button", { name: "Refuză" }).click();
    await page.locator(".oax_language_switcher_close").click();
    await page
      .getByRole("link", { name: "România Oltenia" })
      .scrollIntoViewIfNeeded();
    await page.getByRole("link", { name: "România Oltenia" }).click();
    await expect(page).toHaveURL(
      "https://romaniatravel.guide/ro/ghid-de-calatorie/romania/oltenia/33306078/"
    );
  });

  test("test29", async ({ page }) => {
    await page.goto(
      "https://romaniatravel.guide/ro/ghid-de-calatorie/romania/1036991/"
    );
    await page.getByRole("button", { name: "Refuză" }).click();
    await page.locator(".oax_language_switcher_close").click();
    await page
      .getByRole("link", { name: "România Crișana" })
      .scrollIntoViewIfNeeded();
    await page.getByRole("link", { name: "România Crișana" }).click();
    await expect(page).toHaveURL(
      "https://romaniatravel.guide/ro/ghid-de-calatorie/romania/crisana/33306073/"
    );
  });

  test("test30", async ({ page }) => {
    await page.goto(
      "https://romaniatravel.guide/ro/ghid-de-calatorie/romania/1036991/"
    );
    await page.getByRole("button", { name: "Refuză" }).click();
    await page.locator(".oax_language_switcher_close").click();
    await page
      .getByRole("link", { name: "România Banat" })
      .scrollIntoViewIfNeeded();
    await page.getByRole("link", { name: "România Banat" }).click();
    await expect(page).toHaveURL(
      "https://romaniatravel.guide/ro/ghid-de-calatorie/romania/banat/33306071/"
    );
  });

  test("test31", async ({ page }) => {
    await page.goto(
      "https://romaniatravel.guide/ro/ghid-de-calatorie/romania/1036991/"
    );
    await page.getByRole("button", { name: "Refuză" }).click();
    await page.locator(".oax_language_switcher_close").click();
    await page
      .getByRole("link", { name: "România Maramureș" })
      .scrollIntoViewIfNeeded();
    await page.getByRole("link", { name: "România Maramureș" }).click();
    await expect(page).toHaveURL(
      "https://romaniatravel.guide/ro/ghid-de-calatorie/romania/maramures/33306075/"
    );
  });

  test("test32", async ({ page }) => {
    await page.goto(
      "https://romaniatravel.guide/ro/ghid-de-calatorie/romania/1036991/"
    );
    await page.getByRole("button", { name: "Refuză" }).click();
    await page.locator(".oax_language_switcher_close").click();
    await page
      .getByRole("link", { name: "România Muntenia" })
      .scrollIntoViewIfNeeded();
    await page.getByRole("link", { name: "România Muntenia" }).click();
    await expect(page).toHaveURL(
      "https://romaniatravel.guide/ro/ghid-de-calatorie/romania/muntenia/33306077/"
    );
  });

  test("test33", async ({ page }) => {
    await page.goto(
      "https://romaniatravel.guide/ro/ghid-de-calatorie/romania/1036991/"
    );
    await page.getByRole("button", { name: "Refuză" }).click();
    await page.locator(".oax_language_switcher_close").click();
    await page
      .getByRole("link", { name: "România Bucovina" })
      .scrollIntoViewIfNeeded();
    await page.getByRole("link", { name: "România Bucovina" }).click();
    await expect(page).toHaveURL(
      "https://romaniatravel.guide/ro/ghid-de-calatorie/romania/bucovina/33306072/"
    );
  });
});
