import { Component, OnInit } from '@angular/core';
import { TutorialService } from '../../services/tutorial.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tutorials-list',
  templateUrl: './tutorials-list.component.html',
  styleUrls: ['./tutorials-list.component.css']
})

export class TutorialsListComponent implements OnInit {

  tutorials: any;
  currentTutorial = null;
  currentIndex = -1;
  title = '';

  columnsToDisplay: string[] = ['name', 'surname', 'age', 'action'];
  userData: any;
  constructor(private tutorialService: TutorialService, private router: Router) { }

  ngOnInit() {
    this.retrieveTutorials();
  }

  retrieveTutorials() {
    this.tutorialService.getAll()
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
    this.retrieveTutorials();
    this.currentTutorial = null;
    this.currentIndex = -1;
  }

  setActiveTutorial(tutorial, index) {
    this.currentTutorial = tutorial;
    this.currentIndex = index;
  }

  removeAllTutorials() {
    this.tutorialService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.refreshList();
        },
        error => {
          console.log(error);
        });
  }

  searchTitle() {
    this.tutorialService.findByTitle(this.title)
      .subscribe(
        data => {
          this.tutorials = data;
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
    this.router.navigate(['/tutorials/'+ev.id]);
  }

  setActiveUser(user, index) {
    console.log(user);
  }
}
