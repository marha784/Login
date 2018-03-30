import { User } from './../domain/user';
import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import { UserService } from '../services/userservice';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})


export class AdminComponent implements OnInit {

  displayedColumns = ['id', 'username', 'password'];
  public users: User[];
  dataSource: any;
  users$: any ;

  constructor(private userService: UserService) {}

ngOnInit() {
  this.users$ = this.userService.getUsers().subscribe((users: User[]) => {
    this.users = users;
    this.dataSource = new MatTableDataSource<User>(this.users);
})

}


}


