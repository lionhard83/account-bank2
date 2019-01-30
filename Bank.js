"use strict";
exports.__esModule = true;
var incrementalId = 0;
var Account_1 = require("./Account");
var Bank = /** @class */ (function () {
    function Bank(name, commission) {
        this.name = name;
        this.commission = commission;
        this.budget = 0;
        this.accounts = [];
        this.id = incrementalId++;
    }
    Bank.prototype.addAccount = function (budget) {
        var account = new Account_1.Account(budget, this.id);
        this.accounts.push(account);
        return account;
    };
    Bank.prototype.sendMoney = function (a1, a2, amount) {
        var red = 100;
        var sameBank = a1.bankId === a2.bankId;
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
    };
    Bank.prototype.getAmountBank = function () {
        var sum = this.budget;
        for (var _i = 0, _a = this.accounts; _i < _a.length; _i++) {
            var account = _a[_i];
            sum += account.budget;
        }
        return sum;
    };
    return Bank;
}());
exports.Bank = Bank;
