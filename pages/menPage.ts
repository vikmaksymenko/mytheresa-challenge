import { Page, expect, test } from "@playwright/test";
import { BasePage } from "./basePage";

export class MenPage extends BasePage {
    constructor(page: Page, listenConsoleLog?: boolean) {
        super(page, '/de/en/men', listenConsoleLog);
    }

    async shouldBeOnPage() {
        await test.step(`Should be on ${this.url} page`, async () => {
            const manPageNav = this.page.getByRole('link', { name: 'Men', exact: true });
            expect(manPageNav).toBeVisible();
            expect(manPageNav).toHaveAttribute('aria-current', 'page');
        });
    }
}