import { Bank } from './Bank';

const bnl = new Bank('bnl', 3);
const account1 = bnl.addAccount(100);
const account2 = bnl.addAccount(200);
bnl.sendMoney(account1, account2, 150);

const unicredit = new Bank('unicredit', 2);
const account3 = unicredit.addAccount(300);

bnl.sendMoney(account2, account3, 200);
unicredit.sendMoney(account3, account1, 20);

console.log(bnl);
console.log(bnl.getAmountBank());
console.log(unicredit);