

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppMaterialModule } from './app.material.module';
import { AppComponent, DialogContentComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';  
import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';
import { TutorialsListComponent } from './components/tutorials-list/tutorials-list.component';
import { TutorialDetailsComponent } from './components/tutorial-details/tutorial-details.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppMaterialModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  declarations: [AppComponent, DialogContentComponent, AddTutorialComponent, TutorialsListComponent, TutorialDetailsComponent],
  entryComponents: [DialogContentComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }
