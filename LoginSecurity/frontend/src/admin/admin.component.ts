import { User } from './../domain/user';
import { Component, OnInit } from '@angular/core';
import {MatDialog, MatTableDataSource, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { UserService } from '../services/userservice';
import { Observable } from 'rxjs/Observable';
import { AdminEditComponent } from './admin-edit/admin-edit.component';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})


export class AdminComponent implements OnInit {

  displayedColumns = ['id', 'username','role','edit'];
  public users: User[];
  dataSource: any;
  users$: any ;
  animal: string;
  selectedUser: User;
  

  constructor(private userService: UserService, public dialog: MatDialog) {}

ngOnInit() {
  this.users$ = this.userService.getUsers().subscribe((users: User[]) => {
    this.users = users;
    this.dataSource = new MatTableDataSource<User>(this.users);
})


}

openDialog(): void {
  let dialogRef = this.dialog.open(AdminEditComponent, {
    width: '500px',
    data: { user: this.selectedUser }
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
    this.animal = result;
  });
}

setUser(user:User):void{

  this.selectedUser = user;
  console.log(this.selectedUser);
}


}


