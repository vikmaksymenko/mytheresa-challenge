import { Account } from "../data/structures/account";
import fs from 'fs';
import path from 'path';

export class AccountProvider {
    private static accounts: Account[];

    private static readonly file = `../data/env/${process.env.STAGE}.json`;

    static getAccount(name: string): Account {
        if(!this.accounts) {
            this.readAccounts();
        }

        if(name in this.accounts) {
            return this.accounts[name];
        } else {
            throw new Error(`Account "${name}" was not found in file ${AccountProvider.file}`);
        }
    }

    private static readAccounts() {
        const content = fs.readFileSync(path.resolve(__dirname, AccountProvider.file), 'utf8');
        const data = JSON.parse(content);

        if('accounts' in data) {
            this.accounts = data.accounts;
        } else {
            throw new Error(`No accounts found in JSON file`);
        }
    }
}