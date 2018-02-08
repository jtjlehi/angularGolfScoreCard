import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import { LoginComponent } from '../login/login.component';
import { NewUserComponent } from '../new-user/new-user.component';

@Component({
  selector: 'golf-right-nav',
  templateUrl: './right-nav.component.html',
  styleUrls: ['./right-nav.component.scss']
})
export class RightNavComponent implements OnInit {

  menuItems: {text: string, component: any}[] = [
    {
      text: 'Existing User',
      component: LoginComponent
    },
    {
      text: 'New User',
      component: NewUserComponent
    }
  ];

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(component) {
    let dialogRef = this.dialog.open(component);
  }

}
