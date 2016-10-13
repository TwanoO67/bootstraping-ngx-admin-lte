import { Component, OnInit } from '@angular/core';
import {Message} from "../../models/message";
import {MessagesService} from "../../services/messages.service"

@Component({
  selector: '.notificationsBox',
  templateUrl: 'notification-box.component.html',
  styleUrls: ['notification-box.component.css']
})
export class NotificationBoxComponent implements OnInit {

  private messages: Message[];

  constructor() {}

  ngOnInit() {
  }

}
