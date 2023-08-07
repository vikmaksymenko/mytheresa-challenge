import { test } from '../fixtures/default.fixture';
import { AccountOverviewPage } from '../pages/accountOverviewPage';
import { LoginPage } from '../pages/loginPage';
import { MenPage } from '../pages/menPage';
import { AccountProvider } from '../utils/accountProvider';


test.describe('2 Test Case', () => {

    test('As a customer, I want to verify I can log in to /men page', async ({ page }) => {
        const account = AccountProvider.getAccount('registered');

        const menPage = new MenPage(page);
        await menPage.open();

        await menPage.goToLoginPage();
        const loginPage = new LoginPage(page);    
        await loginPage.shouldBeOnPage();
        await loginPage.login(account);   

        const accountOverviewPage = new AccountOverviewPage(page);
        await accountOverviewPage.shouldBeOnPage();
        await accountOverviewPage.validateAccountInfo(account);
        
    });
});
