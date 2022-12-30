import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { MyDevelopmentComponent } from './my-development/my-development.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ViewnotfoundComponent } from './viewnotfound/viewnotfound.component';
import { UsersComponent } from './users/users.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';

import {OrderModule} from 'ngx-order-pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    MyDevelopmentComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    ViewnotfoundComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule, ReactiveFormsModule,
    HttpClientModule, BrowserAnimationsModule, MatSlideToggleModule,
    MatButtonModule,MatTableModule,OrderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
