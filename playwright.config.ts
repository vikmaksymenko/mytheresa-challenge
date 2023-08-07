import { defineConfig, devices } from '@playwright/test';

import dotenv from 'dotenv';

dotenv.config();

const getBaseUrl = () => {
    switch (process.env.STAGE) {
        case 'pro':
            return 'https://www.mytheresa.com';
        case 'test':
            return 'https://test.mytheresa.com';
        case 'staging':
            return 'https://staging.mytheresa.com';
        case 'local':
            return 'https://local.mytheresa.com';
        default:
            throw new Error(`Unknown stage: ${process.env.STAGE}`);
    }
};

export default defineConfig({
    expect: {
        timeout: 10 * 1000,
    },
    use: {
        baseURL: getBaseUrl(),
        headless: true,
    },

    projects: [
        /* Test against desktop browsers */
        {
            name: 'chromium',
            use: { ...devices['Desktop Chrome'] },
        },
        {
            name: 'firefox',
            use: { ...devices['Desktop Firefox'] },
        },
        {
            name: 'webkit',
            use: { ...devices['Desktop Safari'] },
        },
    ],
    reporter: [['html', { open: 'never' }]],

});
