import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test("should not have any automatically detectable WCAG A or AA violations", async ({
  page,
}, testInfo) => {
  await page.goto("https://romaniatravel.guide/ro/");
  await page.getByRole("button", { name: "Refuză" }).click();
  await page.locator(".oax_language_switcher_close").click();

  const accessibilityScanResults = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
    .analyze();

  await testInfo.attach("accessibility-scan-results", {
    body: JSON.stringify(accessibilityScanResults, null, 2),
    contentType: "application/json",
  });
  expect(accessibilityScanResults.violations).toEqual([]);
});

// test("should not have any automatically detectable accessibility issues", async ({
//   page,
// }, testInfo) => {
//   await page.goto("https://romaniatravel.guide/ro/");
//   await page.getByRole("button", { name: "Refuză" }).click();
//   await page.locator(".oax_language_switcher_close").click(); // 3

//   const accessibilityScanResults = await new AxeBuilder({ page }).analyze(); // 4

//   await testInfo.attach("accessibility-scan-results", {
//     body: JSON.stringify(accessibilityScanResults, null, 2),
//     contentType: "application/json",
//   });

//   expect(accessibilityScanResults.violations).toEqual([]); // 5
// });
