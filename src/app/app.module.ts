//external module
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AlertModule, DatepickerModule } from 'ng2-bootstrap/ng2-bootstrap';

let modules = [
  AlertModule,
  DatepickerModule,
  BrowserModule,
  FormsModule,
  HttpModule,
  RouterModule,
];

import { AppHeaderComponent } from "./_widgets/app-header";
import { MenuAsideComponent } from "./_widgets/menu-aside";
import { MessagesBoxComponent} from "./_widgets/messages-box";
import { NotificationBoxComponent } from "./_widgets/notification-box";
import { TasksBoxComponent } from "./_widgets/tasks-box";
import { UserBoxComponent } from "./_widgets/user-box"

let widgets = [
  AppComponent,
  AppHeaderComponent,
  MenuAsideComponent,
  MessagesBoxComponent,
  NotificationBoxComponent,
  TasksBoxComponent,
  UserBoxComponent
];

import { UserService } from "./_services/user.service";
import { MessagesService } from "./_services/messages.service";

let services =  [
  UserService,
  MessagesService
];

import { HomeComponent } from './_pages/home/home.component';
import { PageNumComponent } from './_pages/page-num/page-num.component';

let pages = [
  HomeComponent,
  PageNumComponent
]

//main bootstrap
import { AppComponent } from './app.component';
import { routing } from './app.routes';


@NgModule({
  declarations: [
    ...widgets,
    ...pages
  ],
  imports: [
    ...modules,
    routing
  ],
  providers: [
    ...services
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
