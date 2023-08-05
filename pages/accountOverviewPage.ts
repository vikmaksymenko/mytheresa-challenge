import { expect, test } from "@playwright/test";
import { BasePage } from "./basePage";
import { Account } from "../data/accounts";

export class AccountOverviewPage extends BasePage {
    async shouldBeOnPage() {
        await test.step(`Should be on account overview page`, async () => {
            await expect(this.page.getByText('My Account').nth(1)).toBeVisible({ timeout: 20 * 1000});
        });
    }

    async validateAccountInfo(account: Account) {
        await test.step(`Validate account info`, async () => {
            await expect.soft(this.page.locator('.overview__title')).toHaveText(`Welcome ${account.firstName}`);
            await expect.soft(this.page.locator('//div[text()="Name:"]/following-sibling::div')).toHaveText(`${account.firstName} ${account.lastName}`);
            await expect.soft(this.page.locator('//div[text()="Email:"]/following-sibling::div')).toHaveText(`${account.email}`);
            expect(test.info().errors, 'One or more validations failed').toHaveLength(0);
        });
    }
}