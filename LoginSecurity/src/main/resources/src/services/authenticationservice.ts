
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
      return this.http.post('http://localhost:8080/owl/resources/rest/authenticate',
        JSON.stringify({ username: username, password: password }),
        {headers: this.getHeaders()})
            .map((response: Response) => {
                console.log(response);
                let user = response.json();
                if (user && user.token) {
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    this.loggedIn=true; 
                }
            });
    }

    private getHeaders() {
        let headers = new Headers();
        headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'application/json');
        return headers;
      }

    logout() {
        localStorage.removeItem('currentUser');
        this.loggedIn=false;
    }
}
