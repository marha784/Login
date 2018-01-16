
import { Component} from '@angular/core';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  displayedColumns = ['id', 'username', 'password'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);
}

  export interface Element {
    id: string;
    username: number;
    password: number;
  }

  const ELEMENT_DATA: Element[] = [

  ];

