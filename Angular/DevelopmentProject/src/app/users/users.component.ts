
import { Component } from '@angular/core';
import { JsonCrudService } from '../crud/json-crud.service';
import { User } from '../crud/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  userArray:User[];
  columnsToDisplay=[
    'fullName'
  ];
  
  constructor(private jsoncrud :JsonCrudService){}
  ngOnInit() {
    this.jsoncrud.getAllUsers().subscribe({
      next:result=>this.userArray=result as User[],
      error:err=>console.log(err)     
    });
}
}
