import { Component } from '@angular/core';
import { FormGroup,FormControl, Validators} from '@angular/forms';
import { JsonCrudService } from '../crud/json-crud.service';
import { User } from '../crud/User';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerForm:FormGroup;
  constructor(private jsoncrud:JsonCrudService){
    this.registerForm=new FormGroup(
      {
        fullName:new FormControl("",[Validators.required, Validators.pattern("^[A-Za-z ]*$")]),
        emailId:new FormControl("",[Validators.required,Validators.email]),
        mobileNo:new FormControl("",[Validators.required,Validators.minLength(10),Validators.maxLength(10), Validators.pattern("^[0-9]*$")]),
        userName:new FormControl("",[Validators.required, Validators.minLength(3),Validators.maxLength(7)]),
        password:new FormControl("",[Validators.required,Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[ -/:-@\[-`{-~]).{6,12}$')]),
        confirmPass:new FormControl("",[Validators.required])
     
      },
      this.matchPassword
    );
  }

  get fulln(){
    return this.registerForm.get("fullName");
  }
 get uname(){
  return  this.registerForm.get("userName");
 }

 get pass(){
  return  this.registerForm.get("password");
 }
 get cpass(){
  return  this.registerForm.get("confirmPass");
 }
  collectData():void{
    console.log(this.registerForm);
    let user = new User(this.registerForm.value.fullName,this.registerForm.value.emailId,this.registerForm.value.mobileNo,this.registerForm.value.userName,this.registerForm.value.password);
   
    this.jsoncrud.addUser(user).subscribe(
      {
        next:result=>console.log(result),
        error:err=>console.log(err)
      }
    );;
  }

  matchPassword(regForm:FormGroup){
   
    if(regForm.value.password==regForm.value.confirmPass)
    return null
    else 
      return {matchfail:true}
  }
}

