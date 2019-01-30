let incrementalId: number = 0;
import { Account } from './Account';

export class Bank {
    public budget: number = 0;
    public id: number;
    public accounts: Account[] = [];
    constructor(public name: string, public commission: number){
        this.id = incrementalId++;
    }

    addAccount(budget: number): Account {
        let account = new Account(budget, this.id);
        this.accounts.push(account);
        return account;
    }

    sendMoney(a1: Account, a2: Account, amount: number){
        let red = 100;
        const sameBank: boolean = a1.bankId === a2.bankId;
        if (!sameBank) {
            red += this.commission;
        }
        if (a1.bankId === this.id && (a1.budget + red) >= amount) {
            a1.budget -= amount;
            a2.budget += amount;
            if (!sameBank) {
                // questa è la commissione di un euro;
                a1.budget -= this.commission;
                this.budget += this.commission;
            }
        }
    }

    getAmountBank(): number {
        let sum = this.budget;
        for(let account of this.accounts) {
            sum += account.budget;
        }
        return sum;
    }
}