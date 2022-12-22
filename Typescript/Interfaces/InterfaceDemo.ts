interface StackIntf{
    size:number;
    defaultSize?:number;
    push(ele:any):void;
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


function add(a:number,b?:number,c?:number){
   return a+b+c;
}

add(12,34,56);
add(12,45);
add(12);