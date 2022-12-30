import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { UsersComponent } from './users/users.component';
import { ViewnotfoundComponent } from './viewnotfound/viewnotfound.component';

const routes: Routes = [
  { path:'home', component:HomeComponent},
  { path:'register', component:RegisterComponent},
  { path : 'login' ,component:LoginComponent},
  { path : 'showusers' ,component:UsersComponent},
  { path:'edit/:userId', component:UpdateProfileComponent},
  { path:'' , component:HomeComponent},
  { path:"**", component:ViewnotfoundComponent}
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
