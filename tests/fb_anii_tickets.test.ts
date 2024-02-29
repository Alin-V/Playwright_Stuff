import { test, expect, Locator } from "@playwright/test";
import myuserdata from "../events.json";

test("Read JSON Array Name", async ({ page }) => {
  test.slow();
  await page.goto("https://www.facebook.com/");
  await page.getByTestId("cookie-policy-manage-dialog-decline-button").click();
  await page.getByTestId("royal_email").click();
  await page.getByTestId("royal_email").fill("blackotta@gmail.com");
  await page.getByTestId("royal_pass").click();
  await page.getByTestId("royal_pass").fill("rumburak1");
  await page.getByTestId("royal_login_button").click();

  await page.goto("https://www.facebook.com/anii.drumetiei/events/");
  // if (page.getByRole("button", { name: "Decline optional cookies" })) {
  //   //expect(
  //   //   await page.getByRole("button", { name: "Decline optional cookies" })
  //   // ).toBeVisible();
  //   await page
  //     .getByRole("button", { name: "Decline optional cookies" })
  //     .click();
  // }

  if (page.getByLabel("Close")) {
    await page.getByLabel("Close").isVisible();
    await page.getByLabel("Close").click();
  }
  const fs = require("fs");
  if (fs.existsSync("tickets.json")) {
    fs.unlinkSync("tickets.json");
  }
  for (let i = 0; i < myuserdata.eventLinks.length; i++) {
    // Navigate to the event page
    //await page.goto(myuserdata.eventLinks[i]);
    if (myuserdata.eventLinks[i] != myuserdata.eventLinks[i - 1]) {
      console.log(myuserdata.eventLinks[i]);
      await page.goto(myuserdata.eventLinks[i]);
      if (page.getByLabel("Close")) {
        await page.getByLabel("Close").isVisible();
        await page.getByLabel("Close").click();
      }
      // Find and click on the first link in the event page
      const firstLink = await (
        await page.locator("a").filter({ hasText: "Tickets\n" }).allInnerTexts()
      ).map((link) => link.replace("Tickets\n", "https://"));
      console.log(firstLink);

      // const fs = require("fs");
      let jsonData = {};

      // Check if tickets.json exists, and if so, delete it

      if (fs.existsSync("tickets.json")) {
        // If it exists, read the content and parse it
        const existingData = fs.readFileSync("tickets.json", "utf8");
        jsonData = JSON.parse(existingData);
      }

      // Add the new firstLink to existing data
      jsonData["ticketLink"] = jsonData["ticketLink"] || [];
      jsonData["ticketLink"].push(...firstLink);

      // Write the updated data to tickets.json
      const data = JSON.stringify(jsonData, null, 2);
      fs.writeFileSync("tickets.json", data);

      // const data = JSON.stringify({ firstLink });
      // fs.("tickets.json", data);
    }
    //page.close();
    // await page.getByLabel("Close").click();
    // // Wait for navigation to complete
    // // await page.waitForNavigation();

    // // // Find the element containing the text "booktes"
    // const locatorContainingBooktes = await page.locator(
    //   'page.locator:has-text("booktes")'
    // );

    // if (locatorContainingBooktes) {
    //   // Get the text content of the locator
    //   const text = await locatorContainingBooktes.textContent();
    //   console.log(text);
    //   // Write the text content to tickets.json
    //   // await page.evaluate((text) => {
    //   //   const fs = require("fs");
    //   //   const data = JSON.stringify({ ticket: text });
    //   //   fs.writeFileSync("tickets.json", data);
    //   // }, text);
    // }
    // Go back to the event page
  }
  page.close();
});

/*
test("get the tickets content", async ({ page }) => {
  //await page.goto("https://www.facebook.com/anii.drumetiei/events/");
  // Launch browser

  await page.goto("events.json");

  // Extract eventLinks from the JSON file
  const eventData = await page.evaluate(() => {
    const data = JSON.parse(document.querySelector("body").textContent);
    return {
      events: data.events,
      eventLinks: data.eventLinks,
    };
  });

  for (let i = 0; i < eventData.eventLinks.length; i++) {
    // Navigate to the event page
    await page.goto(eventData.eventLinks[i]);

    // Find and click on the first link in the event page
    const firstLink = await page.$("a");
    await firstLink.click();

    // Wait for navigation to complete
    await page.waitForNavigation();

    // Find the element containing the text "booktes"
    const locatorContainingBooktes = await page.$(
      'page.locator:has-text("booktes")'
    );

    if (locatorContainingBooktes) {
      // Get the text content of the locator
      const text = await locatorContainingBooktes.textContent();

      // Write the text content to tickets.json
      await page.evaluate((text: string) => {
        const fs = require("fs");
        const data = JSON.stringify({ ticket: text });
        fs.writeFileSync("tickets.json", data);
      }, text);
    }

    // Go back to the event page
    await page.goBack();
  }

  // Close the brow;
  
});
*/
