import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CanActiveGuardService } from '../guards/can-active-guard.service';
import { MathCalcService } from '../maths/math-calc.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  /* providers:[MathCalcService] */
})
export class LoginComponent {
 cc=this.mathS.counter;
  constructor(private mathS:MathCalcService, private guardService:CanActiveGuardService, private route:ActivatedRoute){

  }
  ngOnInit(){
    console.log(this.route.url);
  }
  collectData(logForm){
    console.log(logForm);
    console.log(logForm.value.username);
    
  }
  getC(){
       this.cc= this.mathS.addCounter();
  }
}
