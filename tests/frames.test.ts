import { chromium, test, expect } from "@playwright/test";

test("login test demo", async ({ page }) => {
  await page.goto("https://letcode.in/frame");
  await page.getByLabel("Do not consent", { exact: true }).click();
  const allFrames = page.frames();
  console.log("nr of frames is " + allFrames.length);

  const myFirstFrame = page.frame("firstFr");
  await myFirstFrame?.fill("input[name='fname']", "Alin");
  await myFirstFrame?.fill("input[name='lname']", "Voicau");
  await page.waitForTimeout(3000);
  expect(
    await myFirstFrame
      ?.locator("//p[@class='title has-text-info']")
      .textContent()
  ).toContain("Alin Voicau");
});
