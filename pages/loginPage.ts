import { expect, test } from "@playwright/test";
import { BasePage } from "./basePage";
import { Account } from "../data/structures/account";

export class LoginPage extends BasePage {
    private readonly loginButton = this.page.locator('div').filter({ hasText: /^Log in$/ }).nth(1);

    async shouldBeOnPage() {
        await test.step(`Should be on login page`, async () => {
            await expect(this.loginButton).toBeVisible();
        });
    }

    async login(account: Account) {
        await test.step('Log in', async () => {
            const loginForm = this.page.locator('.signinform');

            await loginForm.locator('input[name="email"]').fill(account.email);
            await loginForm.locator('input[name="password"]').fill(account.password);
            await this.loginButton.click();
        });
    }
}