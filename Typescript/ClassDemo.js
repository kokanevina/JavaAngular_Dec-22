//keywords in small letters
// class name : First letter capital
// variable/ method : camel case
// constructor : constructor
// let, var, const
/*
let x:any=67;
x="hello";
var y="hi";
const pie=3.142;*/
//number, string, boolean
//Multiple constructor implementations are not allowed.
var BankAccount = /** @class */ (function () {
    function BankAccount() {
        this.accountNum = 666;
        this.custId = 111;
        this.balance = 0;
        this.accountType = "savings";
    }
    BankAccount.prototype.getDetails = function () {
        return "Account Number:" + this.accountNum + ", Customer Id:" + this.custId + ", Balance:" + this.balance + "Type :" + this.accountType;
    };
    BankAccount.prototype.getDetails1 = function () {
        return "Account Number : ".concat(this.accountNum, ", Customer Id: ").concat(this.custId);
    };
    return BankAccount;
}());
var account1;
account1 = new BankAccount(); // default constructor
console.log(account1.accountNum);
account1.accountNum = 3435;
//document.write(account1.accountNum+"");
var account2 = new BankAccount();
console.log(account2.accountNum);
account2.accountNum = 3789;
console.log(account1.accountNum);
console.log(account2.accountNum);
var details1 = account1.getDetails();
console.log(details1);
console.log(account1.getDetails1());
