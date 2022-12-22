interface StackIntf{
    size:number;
    defaultSize?:number; // optionak variable
    push(ele:any):void;
    display?():void;  // optional method
}
class NumberStack implements StackIntf{
    size:number;
    array:number[];
    push(ele:number):void{
            // own impl
    }
}
class StringStack implements StackIntf{
    size:number;
    defaultSize:number;
    push(ele:string):void{
        // own impl
    }
}

let stack1=new NumberStack();
stack1.push(56);


let stack2=new StringStack();
stack2.push("hi");


function add(a:number,b?:number,c?:number){
    if(c!=undefined && b!=undefined)
      return a+b+c;
    else if (b!=undefined)
     return a+b;
    else
     return a;
}   

let r1=add(12,34,56);
console.log(r1);
let r2=add(12,45);
console.log(r2);
let r3=add(12);
console.log(r3);