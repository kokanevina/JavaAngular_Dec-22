import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Input()
  navbar=[];

  brandName="NEOSOFT";

  @Output()
  emitter=new EventEmitter<String>();

   ngOnInit(){
    console.log("lifecycle");
    
    this.emitter.emit(this.brandName);
   }
}
