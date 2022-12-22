class MyStack<T>{
    arr:T[];

    constructor(){
        this.arr=new Array<T>();
    }
    stackPush(ele:T){
        this.arr.push(ele);
    }
    statckPop():T | undefined{
        return this.arr.pop();
    }
}

let myStack1=new MyStack<Number>();
myStack1.stackPush(34);
myStack1.stackPush(34);
myStack1.stackPush(34);
myStack1.stackPush(34);

let el=myStack1.statckPop();

let myStack2=new MyStack<String>();
myStack2.stackPush("hi");



interface EmployeeIntf<T>{
    empId:T;
}

class NeoTrainer implements EmployeeIntf<String>{
    empId:string;
}

class NeoDeveloper implements EmployeeIntf<Number>{
    empId:number;
}