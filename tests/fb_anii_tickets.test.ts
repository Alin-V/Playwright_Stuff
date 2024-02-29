import { test, expect, Locator } from "@playwright/test";
import myuserdata from "../events.json";

test("Read JSON Array Name", async ({ page }) => {
  test.slow();
  await page.goto("https://www.facebook.com/");
  await page.getByTestId("cookie-policy-manage-dialog-decline-button").click();
  await page.getByTestId("royal_email").click();
  await page.getByTestId("royal_email").fill("xxxxxx@gmail.com");
  await page.getByTestId("royal_pass").click();
  await page.getByTestId("royal_pass").fill("zzzzzzzzzz");
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
    }
  
  }
  page.close();
});
