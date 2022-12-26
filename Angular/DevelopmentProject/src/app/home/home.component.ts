import { Component } from '@angular/core';
import { MathCalcService } from '../maths/math-calc.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  
})
export class HomeComponent {
  addition=0;
  count=this.mathService.counter;
  constructor(private mathService:MathCalcService){

  }
  addNums(addForm){
    this.addition= this.mathService.mathAdd(addForm.value.num1,addForm.value.num2);
  }
  getCounter(){
    this.count=this.mathService.addCounter();
  }
}
