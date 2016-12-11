import { Component, OnInit } from '@angular/core';
import { Message } from '../../models/message';
import { MessagesService } from '../../services/messages.service';

@Component({
  selector: '.notificationsBox',
  styleUrls: ['./notification-box.component.css'],
  templateUrl: './notification-box.component.html'
})
export class NotificationBoxComponent implements OnInit {

  private messages: Message[];

  constructor() { }

  public ngOnInit() {
  }

}
