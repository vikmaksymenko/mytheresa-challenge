import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
    expect: {
        timeout: 10 * 1000,
    },
    use: {
        headless: false, // Turn off headless mode.
        baseURL: 'https://www.mytheresa.com'    // TODO: Configure baseURL to use different environments.
    },
    reporter: [['html', { open: 'never' }]],

};

export default config;