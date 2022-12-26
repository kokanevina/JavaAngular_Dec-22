import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 

  collectData(logForm){
    console.log(logForm);
    console.log(logForm.value.username);
    
  }
}
