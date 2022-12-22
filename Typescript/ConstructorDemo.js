var BankAccount = /** @class */ (function () {
    function BankAccount(accNum, cid, balance, accType) {
        if (accNum === void 0) { accNum = 111111; }
        if (cid === void 0) { cid = 1111; }
        if (balance === void 0) { balance = 0; }
        if (accType === void 0) { accType = "current"; }
        this.accountNum = accNum;
        this.custId = cid;
        this.balance = balance;
        this.accountType = accType;
    }
    BankAccount.prototype.getDetails = function () {
        return "Account Number:" + this.accountNum + ", Customer Id:" + this.custId + ", Balance:" + this.balance + "Type :" + this.accountType;
    };
    BankAccount.prototype.deposit = function (amount) {
        this.balance = this.balance + amount;
    };
    BankAccount.prototype.withodraw = function (amount) {
        if (amount <= this.balance)
            this.balance = this.balance - amount;
        else
            console.log("Insufficient funds");
    };
    return BankAccount;
}());
var account1;
account1 = new BankAccount(565636, 1111, 1000, "savings");
var details1 = account1.getDetails();
console.log(details1);
var account2 = new BankAccount(232312, 2222, 2000, "savings");
var details2 = account2.getDetails();
console.log(details2);
console.log(account1.accountNum);
var account3 = new BankAccount();
console.log(account3.getDetails());
account1.deposit(-3000);
console.log(account1.balance);
