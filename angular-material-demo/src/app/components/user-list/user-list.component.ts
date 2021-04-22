import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})

export class UserListComponent implements OnInit {

  user: any;
  currentUser = null;
  currentIndex = -1;
  title = '';
  submitted = false;

  columnsToDisplay: string[] = ['name', 'surname', 'age', 'action'];
  userData: any;
  constructor(private UserService: UserService, private router: Router) { }

  ngOnInit() {
    this.retrieveUsers();
  }

  retrieveUsers() {
    this.UserService.getAll()
      .subscribe(
        data => {
          this.userData = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList() {
    this.retrieveUsers();
    this.currentUser = null;
    this.currentIndex = -1;
  }

  // removeAllUsers() {
  //   this.UserService.deleteAll()
  //     .subscribe(
  //       response => {
  //         console.log(response);
  //         this.refreshList();
  //       },
  //       error => {
  //         console.log(error);
  //       });
  // }

  searchTitle() {
    this.UserService.findByTitle(this.title)
      .subscribe(
        data => {
          this.user = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  
  addUser() {
    this.router.navigate(['/add']);
  }

  editUser(ev) {
    console.log(ev);
    this.router.navigate(['/edit/'+ev.id]);
  }
}
