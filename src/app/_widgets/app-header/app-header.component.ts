import { Component, OnInit } from '@angular/core';
import { MessagesBoxComponent} from "../messages-box";
import { NotificationBoxComponent } from "../notification-box";
import { TasksBoxComponent } from "../tasks-box";
import { UserBoxComponent } from "../user-box"

@Component({
  moduleId: module.id,
  selector: 'app-header',
  templateUrl: 'app-header.component.html',
  directives: [MessagesBoxComponent, NotificationBoxComponent, TasksBoxComponent, UserBoxComponent],
  styleUrls: ['app-header.component.css']
})
export class AppHeaderComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
