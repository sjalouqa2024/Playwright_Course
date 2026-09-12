import { test, expect } from "@playwright/test";
import { ToDoPage } from "./toDoPage";

test.use({
  launchOptions: { slowMo: 800 },
});

test("user can login", async ({ page }) => {
  const todoObject = new ToDoPage(page);
  await todoObject.open();
  await todoObject.login();
  await expect(todoObject.products).toBeVisible();
  await todoObject.logout();
});