import { AuthenticationService } from './../services/authenticationservice';
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Cookie } from 'ng2-cookies';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router, private auth: AuthenticationService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if ( Cookie.check('access_token')) {
            return true;
          }
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        return false;
    }
}

