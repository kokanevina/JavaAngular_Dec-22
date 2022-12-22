//multiple inh not allowed
class Employee{
    empId:number;
    empName:string;
    empSalary:number;
    // add constr,
    // add some methods
    showEmpDetails():string{
        return `id: ${this.empId}, name: ${this.empName}, salary: ${this.empSalary}`;
    }
}
class Manager extends Employee{
    brachName:string;
    extraPay:number;

    test(){
        console.log(this.empId); // property
        this.showEmpDetails(); // method call
    }
    showMgrDetails():string{
        return `branch: ${this.brachName}, extra pay: ${this.extraPay}`;
    }
}
let manager1=new Manager();
manager1.empId=444;
manager1.empName="Vina";
manager1.empSalary=96000;
manager1.brachName="HR";
manager1.extraPay=20000;
manager1.showEmpDetails();
manager1.showMgrDetails();







class Animal{
  demo(){
    let  emp=new Employee();
    // empId : protected: accessible only in subclasses
    emp.empId=234;
  }   
}