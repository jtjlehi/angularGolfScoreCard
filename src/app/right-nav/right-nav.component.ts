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

  menuItems: {text: string, link: string}[] = [
    {
      text: 'Login',
      link: '/login'
    },
  ];

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

}
