import { chromium, expect, test } from "@playwright/test";

const domains = [
  {
    domain: "https://romaniatravel.guide/ro/",
    title: "Descoperă frumusețile României » romaniatravel.guide",
    lista: [
      "Ghid turistic",
      "Destinații",
      "Trasee",
      "Despre noi",
      "English",
      "Deutsch",
      "InsiprațieGhid turisticEvenimenteUrmătoarea aventurăActivități în grupHartăPlanificator trasee",
      "Ghid turistic",
      "Evenimente",
      "Următoarea aventură",
      "Activități în grup",
      "Hartă",
      "Planificator trasee",
      "DescoperăRuteObiective turisticeCazareCabaneOferte",
      "Rute",
      "Obiective turistice",
      "Cazare",
      "Cabane",
      "Oferte",
      "InformațiiFacts about RomaniaSemnalăriRelatăriHărți turisticeCentre de Informare Turistică în România",
      "Facts about Romania",
      "Semnalări",
      "Relatări",
      "Hărți turistice",
      "Centre de Informare Turistică în România",
    ],
  },
  {
    domain: "https://romaniatravel.guide/de/",
    title: "Entdecken Sie das malerische Rumänien » romaniatravel.guide",
    lista: [
      "Reiseführer",
      "Reiseziele",
      "Touren",
      "Über uns",
      "English",
      "română",
      "InspirationReiseführerVeranstaltungenDas nächste AbenteuerGemeinsame TourenKarteTourenplaner",
      "Reiseführer",
      "Veranstaltungen",
      "Das nächste Abenteuer",
      "Gemeinsame Touren",
      "Karte",
      "Tourenplaner",
      "EntdeckenTourenPunkteUnterkünfteHüttenAngebote",
      "Touren",
      "Punkte",
      "Unterkünfte",
      "Hütten",
      "Angebote",
      "InformationenFakten über RumänienBedingungenGeschichtenTouristische KartenZentren für Touristische Auskunft in Rumänien",
      "Fakten über Rumänien",
      "Bedingungen",
      "Geschichten",
      "Touristische Karten",
      "Zentren für Touristische Auskunft in Rumänien",
    ],
  },
  {
    domain: "https://romaniatravel.guide/en/",
    title: "Discover a fairy tale Romania » romaniatravel.guide",
    lista: [
      "Travel Guide",
      "Destinations",
      "Tours",
      "About us",
      "română",
      "Deutsch",
      "InspirationGuideEventsNext AdventureJoint tripsMapRoute Planner",
      "Guide",
      "Events",
      "Next Adventure",
      "Joint trips",
      "Map",
      "Route Planner",
      "DiscoverRoutesPointsAccommodationMountain hutsOffers",
      "Routes",
      "Points",
      "Accommodation",
      "Mountain huts",
      "Offers",
      "InformationsFacts about RomaniaConditionsStoriesTourist mapsTourism Information Centers in Romania",
      "Facts about Romania",
      "Conditions",
      "Stories",
      "Tourist maps",
      "Tourism Information Centers in Romania",
    ],
  },
];

test.describe("Ghid calatorie page tests", () => {
  // test.slow();
  domains.forEach(async ({ domain, title, lista }) => {
    test(`Renders correct title for ${domain}`, async ({ page }) => {
      await page.goto(domain);
      await expect(page).toHaveTitle(title);
      // await expect(page.locator("ul > li")).toContainText(lista);
    });

    test(`Renders correct main menu for ${domain}`, async ({ page }) => {
      await page.goto(domain);
      await expect(page.locator("ul > li")).toContainText(lista);
    });
  });
});
