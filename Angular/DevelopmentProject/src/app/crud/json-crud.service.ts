import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JsonCrudService {

   serverurl="http://localhost:3000/users";
  constructor(private http:HttpClient) { }

  addUser(user){
    return this.http.post(this.serverurl,user);
  }
  updateUser(uid,user){
    return this.http.put(this.serverurl,user);
  
  }
  deleteUser(uid){
    return this.http.delete(`${this.serverurl}/${uid}`);
  }
   getAllUsers(){
      return this.http.get(this.serverurl);
   }
   getUserById(uid){
      return this.http.get(`${this.serverurl}/${uid}`);
   }
}
