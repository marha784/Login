
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Cookie } from 'ng2-cookies';

import 'rxjs/add/operator/map';
import { variable } from '@angular/compiler/src/output/output_ast';
import {Router} from '@angular/router';


@Injectable()
export class AuthenticationService {

    loggedIn : boolean;
    jsId : any; 

    constructor(private http: Http, private router: Router) { }

    login(username: string, password: string) {
      this.obtainAccessToken(username,password);
    }

    setLoggedIn( isAuthenticated: boolean ){
        this.loggedIn =  isAuthenticated;
    }

    isLoggedIn() {
        return this.loggedIn;
    }

    getJSessionId() {
         this.jsId = document.cookie.match(/JSESSIONID=[^;]+/);
         console.log(this.jsId);
        if( this.jsId != null) {
            if (this.jsId instanceof Array)
            {
                this.jsId = this.jsId[0].substring(11);
            } else {
                this.jsId = this.jsId.substring(11);
            }
        }
        return this.jsId;
    }


    obtainAccessToken(username: string, password: string){
        let params = new URLSearchParams();
        params.append('username', username);
        params.append('password', password);
        params.append('grant_type','password');
       
    
        let headers = new Headers({'Content-type': 'application/x-www-form-urlencoded',
         'Authorization': 'Basic '+btoa("marcus-client:marcus-secret")});
        let options = new RequestOptions({ headers: headers });
        console.log(params.toString());
         this.http.post('http://localhost:8080/oauth/token', params.toString(), options)
        .map(res => res.json())
        .subscribe(
          data => this.saveToken(data),
          err => alert('Invalid Credentials')
        ); 
      }


      saveToken(token){
        var expireDate = new Date().getTime() + (1000 * token.expires_in);
        Cookie.set('access_token', token.access_token, expireDate);
        console.log('Obtained Access token');
        this.router.navigate(['/admin']); 
      }

}




