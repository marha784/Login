import { AdminEditComponent } from './../admin/admin-edit/admin-edit.component';
import { AdminComponent } from './../admin/admin.component';
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
import { MatButtonModule, MatCheckboxModule, MatGridListModule, MatInputModule, MatIconModule, MatCard,
   MatTableModule,
   MatDialogModule,
   MatTabsModule, MatCardModule} from '@angular/material';
import { MatFormFieldModule} from '@angular/material';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatProgressBarModule} from '@angular/material/progress-bar';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AlertComponent,
    AdminComponent,
    AdminEditComponent
],
  imports: [
    MatCardModule,
    MatTabsModule,
    MatDialogModule,
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTableModule,
    MatCheckboxModule,
    MatGridListModule,
    MatInputModule,
    FormsModule,
    MatProgressBarModule,
    MatIconModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [AuthenticationService, UserService, AlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
