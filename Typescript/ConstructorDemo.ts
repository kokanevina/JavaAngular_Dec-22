
class BankAccount{
    accountNum:number;
    custId:number;
    balance:number;
    accountType:string;
    constructor(accNum=111111,cid=1111,balance=0,accType="current"){
        this.accountNum=accNum;
        this.custId=cid;
        this.balance=balance; 
        this.accountType=accType; 
    }

    getDetails():string{
        return "Account Number:"+this.accountNum+", Customer Id:"+this.custId+", Balance:"+this.balance+"Type :"+this.accountType;
    }
    deposit(amount:number){
        this.balance=this.balance+amount;
    }
    withodraw(amount:number){
        if(amount<=this.balance)
            this.balance=this.balance-amount;
        else
            console.log("Insufficient funds");
            
    }
}
let account1:BankAccount;
account1=new BankAccount(565636,1111,1000,"savings"); 
let details1=account1.getDetails();
console.log(details1);
let account2=new BankAccount(232312,2222,2000,"savings");
let details2=account2.getDetails();
console.log(details2);
console.log(account1.accountNum);

let account3=new BankAccount();
console.log(account3.getDetails());

account1.deposit(3000);
console.log(account1.balance);








