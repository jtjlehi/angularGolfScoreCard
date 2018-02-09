import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'golf-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

  email: string;
  name: string;
  password: string;
  handicap: string;

  constructor() { }

  ngOnInit() {
  }

}
