import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Http, HttpModule } from '@angular/http';

import { AppComponent }  from     './app.component';
import { ProfileComponent } from  './components/profile.component';
import { GithubService } from './services/github.service';

import * as _ from 'underscore';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, HttpModule, 
                   ], 
  declarations: [ AppComponent, 
                  ProfileComponent ],
  providers:    [ GithubService ],
  exports : [ ProfileComponent ],
  schemas: [ ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
