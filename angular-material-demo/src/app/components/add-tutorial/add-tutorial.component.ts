import { Component, OnInit } from '@angular/core';
import { TutorialService } from '../../services/tutorial.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-tutorial',
  templateUrl: './add-tutorial.component.html',
  styleUrls: ['./add-tutorial.component.css']
})
export class AddTutorialComponent implements OnInit {
  tutorial = {
    name: '',
    surname: '',
    age: 10
  };
  submitted = false;

  constructor(private tutorialService: TutorialService, private router: Router) { }

  ngOnInit() {
  }

  saveTutorial() {
    const data = {
      name: this.tutorial.name,
      surname: this.tutorial.surname,
      age: this.tutorial.age,
    };

    this.tutorialService.create(data)
      .subscribe(
        response => {
          // console.log(response);
          this.tutorial.name = response['name'];
          this.tutorial.surname = response['surname'];
          this.tutorial.age = response['age'];
          // console.log(this.tutorial);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newTutorial() {
    this.submitted = false;
    this.tutorial = {
      name: '',
      surname: '',
      age: 10
    };
  }

  backToList() {
    const navigationDetails: string[] = [''];
    // navigationDetails.push(JSON.stringify(this.tutorial));
    this.router.navigate(navigationDetails);
  }
}
