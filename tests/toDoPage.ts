
import{test, type Locator,type Page} from "@playwright/test";
import { BasePage } from "./basePage.ts";

test.use(
{
    launchOptions: {slowMo:800},}
);
export class ToDoPage extends BasePage {
public readonly userName: Locator;
public readonly password: Locator;
public readonly logInButton : Locator;
public readonly products: Locator;
public readonly burgerMenu: Locator;
    constructor (page:Page)
    {
        super(page);
        this.userName = page.getByRole("textbox", { name: "Username" });
        this.password = page.getByRole("textbox", { name: "Password" });
        this.logInButton = page.getByRole("button", { name: "Login" });
        this.products = page.getByText("Products");
        this.burgerMenu = page.getByRole("button", { name: "Open Menu" });

    }
    override async open() :Promise<void>
    {
        await super.open();
        await this.userName.waitFor();
        await this.password.waitFor();
        await this.logInButton.waitFor();


    }
async login():Promise<void>{
    await this.userName.fill("standard_user");
    await this.password.fill("secret_sauce");
    await this.logInButton.click();
}

async logout():Promise<void>{
    await this.burgerMenu.click();
    await this.page.getByRole("link", { name: "Logout" }).click();
}
}