import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import { NewUserComponent } from '../new-user/new-user.component';

@Component({
  selector: 'golf-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  openNewUserDialog() {
    const dialogRef = this.dialog.open(NewUserComponent);
  }

  login() {
    throw new Error('login() not implemented yet');
  }

}
