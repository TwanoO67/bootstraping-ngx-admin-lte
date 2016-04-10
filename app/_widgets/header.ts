import {Component} from 'angular2/core';
import {MessagesBox} from "./messages_box/messages_box";
import {NotificationsBox} from "./notifications_box/notifications_box";
import {TasksBox} from "./tasks_box/tasks_box";
import {UserBox} from "./user_box/user_box";


@Component({
  // Declare the tag name in index.html to where the component attaches
  selector: 'app-header',
  directives:[MessagesBox, NotificationsBox, TasksBox, UserBox],
  // Location of the template for this component
  templateUrl: 'app/_widgets/header.html'
})
export class Header {
  // Declaring the variable for binding with initial value
  yourName: string = '';

}
