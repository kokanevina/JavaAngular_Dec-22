import { Component } from '@angular/core';
import { Employee } from 'src/classes/Employee';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DevelopmentProject';
  addition=0;
  inputType="password";
  age=0;
  stationArray=['AIROLI','RABALE','GHANSOLI','KOPARKH','TURBHE'];
  constructor(){
    this.display();
  }
  demo(){
    console.log(this.title);
    
  }
  add(num1:string,num2:string){
    this.addition=parseFloat(num1)+parseFloat(num2);
  }
  showhide(ev:any){
    if(ev.target.checked)
    this.inputType="text";
    else
    this.inputType="password";
  }
  test(){
    console.log("field focused");
  }


   employee:Employee=new Employee(33,"Krupa",67000,[4,4]);

empArray:Employee[]=[
  new Employee(33,"Krupa",57000,[23,12,2]),
  new Employee(13,"Rupa",67350,[23,0]),
  new Employee(35,"Krupali",97000,[0,34]),
  new Employee(23,"Krupan",68000,[1,1])
]

  display(){
    console.log(this.employee.id);
    console.log(this.employee.name);
    console.log(this.employee.salary);
    for(let key in this.employee)
      console.log(this.employee[key]);
    
  }
label="APPLY FONT";
styleArray=['colorClass'];
myStyle={
  color:'red',
  backgroundColor:'pink',
  fontSize:'12px',
  padding:'20px'
}
fontLogic(){
  this.myStyle.color="yellow";
  this.myStyle.backgroundColor="gray";
  if(this.label=="APPLY FONT"){
      this.styleArray.push('fontClass');
      this.label="REMOVE FONT"
  }
  else{
    this.styleArray.pop();
    this.label="APPLY FONT";
  }
}


}
