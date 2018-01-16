
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';


@Injectable()
export class AuthenticationService {

    loggedIn:boolean;

    constructor(private http: Http) { }

    login(username: string, password: string) {
        let headers: Headers = new Headers();
        headers.append("Authorization", "Basic " + btoa(username + ":" + password)); 
        headers.append("Content-Type", "application/x-www-form-urlencoded");
        return this.http.get('http://localhost:8080/users',{headers: headers}).map((response: Response) => {
           console.log(response.headers);
        });
    }

    logout() {
        localStorage.removeItem('currentUser');
        this.loggedIn=false;
    }
}
