import { accounts } from '../data/accounts';
import { test } from '../fixtures/default.fixture';
import { AccountOverviewPage } from '../pages/accountOverviewPage';
import { LoginPage } from '../pages/loginPage';
import { MenPage } from '../pages/menPage';


test.describe('2 Test Case', () => {

    test('As a customer, I want to verify I can log in to /men page', async ({ page }) => {
        const menPage = new MenPage(page);
        await menPage.open();

        await menPage.goToLoginPage();
        const loginPage = new LoginPage(page);    
        await loginPage.shouldBeOnPage();
        await loginPage.login(accounts.registered);   

        const accountOverviewPage = new AccountOverviewPage(page);
        await accountOverviewPage.shouldBeOnPage();
        await accountOverviewPage.validateAccountInfo(accounts.registered);
        
    });
});
