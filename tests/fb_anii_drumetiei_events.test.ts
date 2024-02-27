import { test, expect } from "@playwright/test";
import fs from "fs";

test("get the events content", async ({ page }) => {
  await page.goto("https://www.facebook.com/anii.drumetiei/events/");
  await page.getByRole("button", { name: "Decline optional cookies" }).click();
  await page.getByLabel("Close").click();

  await expect(
    page.locator("//div[@class='x1yztbdb']/following-sibling::div[1]")
  ).toBeVisible();

  // Find the locator containing events and their children
  const eventsLocator = page.locator(
    "//div[@class='x1yztbdb']/following-sibling::div[1]"
  );

  const eventTextContent1 = await page
    .locator("//div[@class='x1yztbdb']/following-sibling::div[1]")
    .allTextContents();
  const eventTextContent = eventTextContent1.join("\n");
  // Split the text content by "Event by Anii Drumeției" to separate each event
  const eventsArray = eventTextContent
    .split("Event by Anii Drumeției")
    .map((event) => event.trim())
    .filter((event) => event !== "");
  // Find all links in the event elements
  async function getEventLinks(page) {
    const hrefs = await page.evaluate(() => {
      const links = Array.from(
        document.querySelectorAll('a[href*="/events/"]') // Include links with "/events"
      );

      return links.map((link) => link.href as string);
    });
    return hrefs;
  }

  const eventLinks = await getEventLinks(page);

  // Save event content to a JSON file
  const data = { events: eventsArray, eventLinks };
  const jsonData = JSON.stringify(data, null, 2);

  fs.writeFileSync("events.json", jsonData);

  console.log("Events content saved to events.json");
});
