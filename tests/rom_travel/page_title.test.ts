import { chromium, expect, test } from "@playwright/test";

const domains = [
  {
    domain: "https://romaniatravel.guide/ro/",
    title: "Descoperă frumusețile României » romaniatravel.guide",
    li: "Ghid turistic",
  },
  {
    domain: "https://romaniatravel.guide/de/",
    title: "Entdecken Sie das malerische Rumänien » romaniatravel.guide",
  },
  {
    domain: "https://romaniatravel.guide/en/",
    title: "Discover a fairy tale Romania » romaniatravel.guide",
  },
];

test.describe("Ghid calatorie page tests", () => {
  test.slow();
  domains.forEach(async ({ domain, title }) => {
    test(`Renders correct title for ${domain}`, async ({ page }) => {
      await page.goto(domain);
      await expect(page).toHaveTitle(title);
    });
  });
});
