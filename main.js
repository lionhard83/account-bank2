"use strict";
exports.__esModule = true;
var Bank_1 = require("./Bank");
var bnl = new Bank_1.Bank('bnl', 3);
var account1 = bnl.addAccount(100);
var account2 = bnl.addAccount(200);
bnl.sendMoney(account1, account2, 150);
var unicredit = new Bank_1.Bank('unicredit', 2);
var account3 = unicredit.addAccount(300);
bnl.sendMoney(account2, account3, 200);
unicredit.sendMoney(account3, account1, 20);
console.log(bnl);
console.log(bnl.getAmountBank());
console.log(unicredit);
