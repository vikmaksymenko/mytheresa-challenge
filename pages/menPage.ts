import { Page } from "@playwright/test";
import { BasePage } from "./basePage";

export class MenPage extends BasePage {

    constructor(page: Page, listenConsoleLog?: boolean) {
        super(page, '/de/en/men', listenConsoleLog);
    }

}