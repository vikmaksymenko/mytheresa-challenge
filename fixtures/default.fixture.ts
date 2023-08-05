import { BrowserContext, test as base } from '@playwright/test';

export const test = base.extend<{ context: BrowserContext }>({
    context: async ({ context }, use) => {

        await context.addCookies([
            // Bypassing captcha
            {
                name: 'mt_csf',
                value: '15340000',
                domain: '.mytheresa.com',
                path: '/'
            }, 
            // Bypassing cookies dialog
            {
                name: 'TC_PRIVACY',
                value: '123123',
                domain: '.mytheresa.com',
                path: '/'
            }, {
                name: 'TCPID',
                value: '123123',
                domain: '.mytheresa.com',
                path: '/'
            }, {
                name: 'TC_PRIVACY_CENTER',
                value: '123123',
                domain: '.mytheresa.com',
                path: '/'
            }]);
        await use(context);
    },
});

export { expect, request } from '@playwright/test';
