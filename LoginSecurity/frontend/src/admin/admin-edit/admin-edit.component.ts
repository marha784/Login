import { UserService } from './../../services/userservice';
import { User } from './../../domain/user';
import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-admin-edit',
  templateUrl: './admin-edit.component.html',
  styleUrls: ['./admin-edit.component.css']
})
export class AdminEditComponent {

  constructor(
    public dialogRef: MatDialogRef<AdminEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any , public userService: UserService) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  save(user: User)
  {
    console.log(user);
    this.userService.updateUser(user).subscribe(
      error => {
        console.log(error);
    });
  }
}
