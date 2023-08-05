import { test, APIResponse } from '@playwright/test';
import fs from 'fs/promises';
import path from 'path';

test.describe('3 Test Case', () => {

    test('As a product owner, I want to see how many open pull requests are there for our product', async ({ request }) => {
        let pullRequests: APIResponse;
        let i = 1;
        let csv = '';

        do {
            pullRequests = await request.get('https://api.github.com/repos/appwrite/appwrite/pulls', {
                params: {
                    state: 'open',
                    per_page: 100,
                    page: i++
                },
            });

            const data = await pullRequests.json();

            console.log(data);

            csv += data.reduce((acc: string, curr: object) => {
                return acc + `${curr['title']},${curr['created_at']},${curr['user']['login']}\n`;
            }, '');
        } while ('link' in pullRequests.headers() && pullRequests.headers()['link'].includes('rel="next"'));

        console.log(csv);

        await fs.writeFile(path.resolve(__dirname, '../test-results/prs.csv'), csv);
    });
});
