import { Component } from '@angular/core';
import { MathCalcService } from '../maths/math-calc.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  /* providers:[MathCalcService] */
})
export class LoginComponent {
 cc=this.mathS.counter;
  constructor(private mathS:MathCalcService){

  }

  collectData(logForm){
    console.log(logForm);
    console.log(logForm.value.username);
    
  }
  getC(){
       this.cc= this.mathS.addCounter();
  }
}
