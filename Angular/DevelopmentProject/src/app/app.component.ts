import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DevelopmentProject';
  addition=0;
  inputType="password";
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
}
