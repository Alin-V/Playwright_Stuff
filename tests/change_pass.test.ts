import { chromium, test, expect } from "@playwright/test";
import ChangePassword from "../pages/charge_pass";
import Loginare from "../pages/login_alin";
const newPass = "098765";
const adresaMail = "Alin_voi@12.com";
const parola = "09876";

test.describe("teste", async () => {
  test.skip("Login test demo", async ({ page, baseURL }) => {
    const logare = new Loginare(page);
    const changePass = new ChangePassword(page);
    await page.goto(`${baseURL}route=account/login`);
    // await logare.insertEmail(adresaMail);
    // await logare.insertPass(parola);
    // await logare.clickLoginButton();
    await logare.login(adresaMail, parola);
    await logare.page.waitForTimeout(5000);
    await changePass.passwordClick();
    await changePass.newPassword(newPass);
    await changePass.newPasswordConfirm(newPass);
    await changePass.continueClick();
    await expect(
      changePass.page.locator(
        "//div[@class='alert alert-success alert-dismissible']"
      )
    ).toContainText("Success: Your password has been successfully updated.");
  });
});

//   test("Change pass test demo", async ({ page, baseURL }) => {
//     const changePass = new ChangePassword(page);
//     await changePass.page.goto(`${baseURL}route=account/password`);
//     await changePass.passwordClick();
//     await changePass.newPassword(newPass);
//     await changePass.newPasswordConfirm(newPass);
//     await changePass.continueClick();
//     await expect(
//       changePass.page.locator(
//         "//div[@class='alert alert-success alert-dismissible']"
//       )
//     ).toContainText("Success: Your password has been successfully updated.");
//   });
// });
