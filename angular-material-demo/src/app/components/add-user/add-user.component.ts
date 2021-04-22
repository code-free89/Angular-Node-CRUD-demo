import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  user = {
    name: '',
    surname: '',
    age: 10
  };
  submitted = false;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  saveUser() {
    const data = {
      name: this.user.name,
      surname: this.user.surname,
      age: this.user.age,
    };

    this.userService.create(data)
      .subscribe(
        response => {
          this.user.name = response['name'];
          this.user.surname = response['surname'];
          this.user.age = response['age'];
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  backToList() {
    const navigationDetails: string[] = [''];
    this.router.navigate(navigationDetails);
  }
}
