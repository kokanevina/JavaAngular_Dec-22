
export class Employee{
    id:number;
    name:string;
    salary:number;
    experience:number[]
    constructor(id=0,name="aa",salary=0,exp:number[]){
      this.id=id;
      this.name=name;
      this.salary=salary;
      this.experience=exp;
    }
  }