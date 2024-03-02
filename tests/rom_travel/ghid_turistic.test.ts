import { test, expect } from "@playwright/test";
test.describe("Ghid turistic page tests", () => {
  test("1.Go to Ghid Turistic page, verify destinatii in romania is visble", async ({
    page,
  }) => {
    await page.goto(
      "https://romaniatravel.guide/ro/ghid-de-calatorie/romania/1036991/"
    );

    await page.getByRole("button", { name: "Refuză" }).click();
    await page.locator(".oax_language_switcher_close").click();

    // expect (await page.locator("div.oax_logo_head").toBeVisible());
    await expect(page.locator("div#oax-module-destinations>h2")).toContainText(
      "Destinații în România"
    );

    await expect(
      page.locator("div#oax-module-destinations>div:nth-of-type(2)>div>h3")
    ).toContainText("Regiuni");

    // const x = page.locator(
    //   "div[id='oax-module-natureregions'] h3[class='oax_h oax_custom_font oax_h3_travelguide'"
    // );
    // // await x.scrollIntoViewIfNeeded();
    // await expect(
    //   page.locator(
    //     "div[id='oax-module-natureregions'] h3[class='oax_h oax_custom_font oax_h3_travelguide'"
    //   )
    // ).toBeVisible();
    // await expect(page.locator("#oax-module-natureregions")).toHaveText(
    //   "Atracții și rezervații naturale"
    // );

    //toContainText("Atracții și rezervații naturale");

    await expect(
      page.locator("div#oax-module-activities>div>h2")
    ).toContainText("Activități în România");

    await expect(page.locator("div#oax-module-inspiration>h2")).toContainText(
      "Activități și locuri de văzut în România"
    );

    await expect(page.locator("div#oax-module-discover>h3")).toContainText(
      "Descoperă regiunea"
    );

    await expect(
      page.locator("div[id='2'] div h3[class='oax_h oax_custom_font oax_h3']")
    ).toContainText(
      "Sunt de văzut și de făcut în România cât pentru o viață întreagă"
    );
  });
});
