import { test, expect } from '@playwright/test';
import { MenPage } from '../pages/menPage';


test.describe('1 Test Case', () => {

    test('As a tester, I want to make sure no JavaScript errors when you visit /men page', async ({ page, request }) => {
        const menPage = new MenPage(page, true);
        await menPage.open();
        await menPage.checkJSErrors();
    });

    // The test failes, presumably because it submits a lot of requests and the server blocks them
    // It's probably OK for production, but should be discussed with the team for testing and CI
    test('As a tester, I want to check if a page is returning the expected status code', async ({ page, request }) => {
        const menPage = new MenPage(page)
        await menPage.open();
        await menPage.validateLinks(request);
    });
});
