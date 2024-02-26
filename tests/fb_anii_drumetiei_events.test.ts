import { test, expect } from "@playwright/test";
import fs from "fs";

test("get the events content", async ({ page }) => {
  await page.goto("https://www.facebook.com/anii.drumetiei/events/");

  await expect(
    page.locator("//div[@class='x1yztbdb']/following-sibling::div[1]")
  ).toBeVisible();

  const eventTextContent1 = await page
    .locator("//div[@class='x1yztbdb']/following-sibling::div[1]")
    .allTextContents();
  const eventTextContent = eventTextContent1.join("\n");
  // Split the text content by "Event by Anii Drumeției" to separate each event
  const eventsArray = eventTextContent
    .split("Event by Anii Drumeției")
    .map((event) => event.trim())
    .filter((event) => event !== "");

  // Save event content to a JSON file
  const data = { events: eventsArray };
  const jsonData = JSON.stringify(data, null, 2);

  fs.writeFileSync("events.json", jsonData);

  console.log("Events content saved to events.json");
});
