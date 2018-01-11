import { User } from './../domain/user';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

@Injectable()
export class UserService {
    constructor(private http: Http) { }


    create(user: User) {
        return this.http.post('http://localhost:8080/users', JSON.stringify(user), {headers: this.getHeaders()})
    ;
    }


    private getHeaders() {
        let headers = new Headers();
        headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'application/json');
        return headers;
      }
}
