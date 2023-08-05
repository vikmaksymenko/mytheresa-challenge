import { APIRequestContext, ConsoleMessage, Page, expect, test } from '@playwright/test';

export abstract class BasePage {
    readonly page: Page;
    readonly url: string;

    private consoleLog: ConsoleMessage[];

    constructor(page: Page, url?: string, listenConsoleLog?: boolean) {
        this.page = page;

        if (url) {
            this.url = url;
        }

        if (listenConsoleLog) {
            this.consoleLog = [];
            page.on('console', msg => this.consoleLog.push(msg));
        }
    }

    abstract shouldBeOnPage(): Promise<void>;

    async open() {
        await test.step(`Open ${this.url}`, async () => {
            await this.page.goto(this.url);
        });
    }

    async validateLinks(request: APIRequestContext) {
        await test.step(`Fetch each link on ${this.url} and verify that it returns 200 or 30x status codes`, async () => {
            const linkEls = await this.page.locator('//a[@href and string-length(@href) > 0]').all();
            const links = await Promise.all(linkEls.map(async link => await link.getAttribute('href')));
            const uniqueLinks = [...new Set(links)].filter(link => !link?.startsWith('mailto:')); // Removing duplicates and mailto links    

            // The approach for UI validation. 
            // However, there's about 200 links on the page, so this is time consuming.
            // Also 40x pages may differ for different resources
            // for(const link of uniqueLinks) {
            //     await this.page.goto(link!);
            //     await this.page.waitForLoadState();
            // }

            // The approach for validation using HTTP requests and checking status codes
            const responses = await Promise.all(uniqueLinks.map(async link => await request.get(link!)));
            const failed = responses.filter(response => !response.ok()).map(response => `${response.status()} ${response.url()}`);
            expect(failed, `Failed links: \n${failed.join('\n')}`).toHaveLength(0);
        });
    }

    async checkJSErrors() {
        await test.step(`Check if there is no JavaScript errors on ${this.url}`, async () => {
            const errorMessages = this.consoleLog.filter(msg => msg.type() === 'error').map(msg => msg.text());
            expect(errorMessages, `JavaScript errors on ${this.url}: \n${JSON.stringify(errorMessages, null, 2)}`).toHaveLength(0);
        });
    }

    async goToLoginPage() {
        await test.step('Go to login page', async () => {
            await this.page.locator('.headerdesktop').locator('//a[contains(@href, "/account/login")]').click();
        });
    }
}