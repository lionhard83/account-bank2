"use strict";
exports.__esModule = true;
var incrementalId = 0;
var Account = /** @class */ (function () {
    function Account(budget, bankId) {
        this.budget = budget;
        this.bankId = bankId;
        this.id = incrementalId++;
        this.iban = bankId + "-" + this.id;
    }
    return Account;
}());
exports.Account = Account;
