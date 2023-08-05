import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
    use: {
        headless: false, // Turn off headless mode.
        baseURL: 'https://www.mytheresa.com'    // TODO: Configure baseURL to use different environments.
    },
    reporter: [['html', { open: 'never' }]],

};

export default config;