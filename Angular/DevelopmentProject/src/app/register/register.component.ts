import { Component } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerForm:FormGroup;
  constructor(){
    this.registerForm=new FormGroup(
      {
        fullName:new FormControl("abc"),
        emailId:new FormControl("vvv"),
        mobileNo:new FormControl(),
        userName:new FormControl(),
        password:new FormControl(),
        confirmPass:new FormControl(),
      }
     
    );
  }
}
