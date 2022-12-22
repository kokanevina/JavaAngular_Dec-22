//multiple inh not allowed
class Employee{
    empId:number;
    empName:string;
    empSalary:number;
    // add constr,
    // add some methods
    showDetails():string{
        return `id: ${this.empId}, name: ${this.empName}, salary: ${this.empSalary}`;
    }
}
class Manager extends Employee{
    brachName:string;
    extraPay:number;

    test(){
        console.log(this.empId); // property
        this.showDetails(); // method call
    }
    showDetails():string{
        return super.showDetails()+`branch: ${this.brachName}, extra pay: ${this.extraPay}`;
    }
}
let manager1=new Manager();
manager1.empId=444;
manager1.empName="Vina";
manager1.empSalary=96000;
manager1.brachName="HR";
manager1.extraPay=20000;
console.log(manager1.showDetails());
console.log(manager1.showDetails());


let emp:Employee;
emp=new Employee();
emp.empId=11; emp.empName="hari", emp.empSalary=56000;
console.log(emp.showDetails()); // super class method

emp=new Manager();  // upcasting
emp.empId=333; emp.empName="Priya", emp.empSalary=89000;
console.log(emp.showDetails()); // overriding method
// downcasting

class A{
     test():Employee{
       return new Employee();
    }
}

class B extends A{
     test(): Manager {
       return new Manager();
    }
}
// scope : same or increased
//return : same , but super class method is void then subclass can have any return type
// co variants