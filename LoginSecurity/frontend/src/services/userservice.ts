
import { User } from './../domain/user';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Cookie } from 'ng2-cookies';

@Injectable()
export class UserService {
    constructor(private http: Http) { }


    create(user: User) {
        return this.http.post('http://localhost:8080/users', JSON.stringify(user), {headers: this.getHeaders()})
    ;
    }

    getUsers(){
       let users = this.http
      .get('http://localhost:8080/users', {headers: this.getHeaders()})
      .map((res: Response) => res.json());
      return users;
    }

     getHeaders() {
     const headers = new Headers({'Content-type': 'application/x-www-form-urlencoded; charset=utf-8',
      'Authorization': 'Bearer '+ Cookie.get('access_token')});
        return headers;
      }
    }
