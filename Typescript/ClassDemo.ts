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

function abc(){

}

let xyz=function(){

}

let pqr= ()=>{

}

// 
class BankAccount{
    accountNum:number;
    custId:number;
    balance:number;
    accountType:string;
    dd:any;

    constructor(){
        this.accountNum=666
        this.custId=111
        this.balance=0; this.accountType="savings";
       
    }

    getDetails():string{
        return "Account Number:"+this.accountNum+", Customer Id:"+this.custId+", Balance:"+this.balance+"Type :"+this.accountType;
    }
    getDetails1():string{
        return `Account Number : ${this.accountNum}, Customer Id: ${this.custId}`;
    }

   
}
let account1:BankAccount;
account1=new BankAccount(); // default constructor
console.log(account1.accountNum);
account1.accountNum=3435;
//document.write(account1.accountNum+"");
let account2=new BankAccount();
console.log(account2.accountNum);
account2.accountNum=3789;
console.log(account1.accountNum);
console.log(account2.accountNum);
let details1=account1.getDetails();
console.log(details1);
console.log(account1.getDetails1());



