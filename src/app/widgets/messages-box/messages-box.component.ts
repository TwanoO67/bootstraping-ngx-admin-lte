import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../../services/messages.service';
import { Message } from '../../models/message';

@Component({
  /* tslint:disable */
  selector: '.messagesBox',
  /* tslint:enable */
  styleUrls: ['./messages-box.component.css'],
  templateUrl: './messages-box.component.html'
})
export class MessagesBoxComponent implements OnInit {
  // Declaring the variable for binding with initial value
  private messages: Message[];

  constructor(private msgServ: MessagesService) {
    this.messages = [];
  }

  public ngOnInit() {
    // à chaque modification de message on change nos données
    this.msgServ.messages.subscribe((msg: Message[]) => {
      console.log('reception de message');
      this.messages = msg;
    });
  }
}
