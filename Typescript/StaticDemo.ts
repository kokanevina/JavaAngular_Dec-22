class NeoEmployee{
    empId:number;
    empName:string;
    empSalary:number;
    static companyName:string;
    private static counter=0;
    constructor(id=0,name="aaa",salary=0){
        this.empId=id;this.empName=name; this.empSalary=salary;
        console.log(this.empId);
        console.log(NeoEmployee.companyName);
        NeoEmployee.counter++;
    }
    showDetails():string{
        return `id: ${this.empId}, name: ${this.empName}, salary: ${this.empSalary}`;
    }

    static getCounter():number{
        return NeoEmployee.counter;
    }
    static test(e:NeoEmployee){
        console.log(e.empId);
        console.log(NeoEmployee.counter);
        
    }
}

NeoEmployee.companyName="Neosoft"
//console.log(NeoEmployee.counter);
console.log(NeoEmployee.getCounter());

let emp1=new NeoEmployee(45,"hari",67000);

let emp2=new NeoEmployee(12,"Rupa",56000);

let emp3=new NeoEmployee(67,"kiran",56000);
//console.log(NeoEmployee.counter);
console.log(NeoEmployee.getCounter());

NeoEmployee.test(emp1);