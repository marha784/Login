import { AdminEditComponent } from './../admin/admin-edit/admin-edit.component';
import { AuthGuard } from './../login/authguard';
import { AdminComponent } from './../admin/admin.component';
import { RegisterComponent } from './../register/register.component';
import { LoginComponent } from './../login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent},
    { path: 'register', component: RegisterComponent},
    { path: 'admin', component: AdminComponent, canActivate: [AuthGuard]},
    {path: 'edit', component: AdminEditComponent, canActivate: [AuthGuard]}
  ];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ],
    providers: [AuthGuard]
  })

  export class AppRoutingModule {

  }
