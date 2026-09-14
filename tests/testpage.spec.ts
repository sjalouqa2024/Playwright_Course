import { test, expect } from "@playwright/test";
import { LoginPage} from "./LoginPage";

test.use({
  launchOptions: { slowMo: 800 },
});

test("user can login", async ({ page }) => {
  const loginPage  = new LoginPage (page);
  await loginPage .open();
  await loginPage .login();
  await expect(loginPage.products).toBeVisible();
  await loginPage.logout();
});