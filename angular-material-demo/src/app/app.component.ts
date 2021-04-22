import { Component, Optional } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from './services/user.service';

export interface user {
  name: string;
  surname: string;
  age: number;
}
const ELEMENT_DATA: user[] = [
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
  
  columnsToDisplay: string[] = ['name', 'surname', 'age', 'action'];
  userData;

  constructor(private router: Router) {
    // Update the value for the progress-bar on an interval.
  }

  addUser() {
    this.router.navigate(['/add']);
  }

  editUser(ev) {
    // this.router.navigate('')
  }

  setActiveUser(user, index) {
    console.log(user);
  }
}