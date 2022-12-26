import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  subHeading="Led By Technology";
  brand="";
  navArray=[
    {
      navlabel:"HOME",
      navLink:"home"
    },
    {
      navlabel:"LOGIN/REGISTER",
      navLink:"login"
    },
    {
      navlabel:"SHOW USERS",
      navLink:"showusers"
    }
  ]
constructor(){
  setTimeout(()=>this.subHeading="Made by Neo", 10000);
}
test():void{
  console.log(this.subHeading);
}
parentfun(ev){
 this.brand=ev;
}
}
