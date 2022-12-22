// extended interfaces

interface A{
    test():void;
}

interface B extends A{
    demo():void;
}

class XYZ implements B{
    demo(): void {
        
    }
    test(): void {
        
    }
    
}


class Father{
    dream(){
        return "Doctor";
    }
}
class Mother{
    dream (){
        return "Engineer";

    }
}
// multiple inheritance not supported
class Child extends Father, Mother{
    callDream(){
        this.dream();
    }
}


interface FatherIntf{
    dream();
}
interface MotherIntf{
    dream();
}

interface ChildIntf extends FatherIntf, MotherIntf{
    goal();
}


class Child2 implements FatherIntf,MotherIntf{
    dream() {
        return "Lawyer";
    }
}


// inner classes, inner interfaces not allowed in typescript