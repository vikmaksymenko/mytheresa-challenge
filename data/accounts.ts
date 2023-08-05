export class Account {
    readonly email: string;
    readonly password: string;
    readonly firstName: string;
    readonly lastName: string;
    readonly salutation: string;

    constructor(username: string, password: string, firtsName: string, lastName: string, salutation: string) {
        this.email = username;
        this.password = password;
        this.firstName = firtsName;
        this.lastName = lastName;
        this.salutation = salutation;
    }
}

export const accounts = {
    registered: new Account('rumplethump@maildrop.cc', 'e{:R.}y<-D7*ynQv', 'Rumple', 'Thump', 'Mr.'),
}