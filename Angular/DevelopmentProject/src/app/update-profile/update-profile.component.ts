import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JsonCrudService } from '../crud/json-crud.service';
import { User } from '../crud/User';
@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent {
  useruId="";
  searchUser:User;
  constructor(private routeService:ActivatedRoute, private jsoncrud:JsonCrudService){
  }
  ngOnInit(){
    this.useruId=this.routeService.snapshot.paramMap.get('userId');
   this.jsoncrud.getUserById(parseInt(this.useruId)).subscribe({
    next:data=>this.searchUser=data as User,
    error:er=>console.log(er)
   });
  }

  updateProfile(form:any){
  console.log(this.searchUser);
  this.jsoncrud.updateUser(this.searchUser.id,this.searchUser).subscribe({
    next:success=>console.log(success),
    error:er=>console.log(er)
  });
  
  }
}
