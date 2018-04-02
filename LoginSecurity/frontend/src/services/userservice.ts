
import { User } from './../domain/user';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Cookie } from 'ng2-cookies';

@Injectable()
export class UserService {
    constructor(private http: Http) { }


    create(user: any) {
        console.log(JSON.stringify(user));
        return this.http.post('http://localhost:8080/users', JSON.stringify(user), {headers: this.getHeaders()})
    ;
    }

    updateUser(user: any) {
      return this.http.put('http://localhost:8080/users', JSON.stringify(user), {headers: this.getHeaders()});
    }

    getUsers() {
       let users = this.http
      .get('http://localhost:8080/users', {headers: this.getHeaders()})
      .map((res: Response) => res.json());
      return users;
    }

    delete(id:number )
    {
        return this.http.delete('http://localhost:8080/users/' + id, {headers: this.getHeaders()})
        .map((res: Response) => res.json());
    }

     getHeaders() {
     const headers = new Headers({'Content-type': 'application/json',
      'Authorization': 'Bearer ' + Cookie.get('access_token')});
        return headers;
      }


    }
