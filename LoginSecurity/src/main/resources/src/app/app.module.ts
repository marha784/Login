import { AlertComponent } from './../directives/alert.component';
import { AlertService } from './../services/alertservice';
import { UserService } from './../services/userservice';
import { RegisterComponent } from './../register/register.component';
import { AuthenticationService } from './../services/authenticationservice';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './../login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MatButtonModule, MatCheckboxModule, MatGridListModule, MatInputModule, MatIconModule, MatCard } from '@angular/material';
import { MatFormFieldModule } from '@angular/material';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AlertComponent
],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatGridListModule,
    MatInputModule,
    FormsModule,
    MatIconModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [AuthenticationService, UserService, AlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
