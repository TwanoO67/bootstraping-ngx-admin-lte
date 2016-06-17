import { Component, OnInit } from '@angular/core';
import {MessagesService} from "../../_services/messages.service"
import {Message} from "../../_models/message"

@Component({
  moduleId: module.id,
  selector: '.messagesBox',
  templateUrl: 'messages-box.component.html',
  styleUrls: ['messages-box.component.css']
})
export class MessagesBoxComponent implements OnInit {
  // Declaring the variable for binding with initial value
    messages: Message[];

    constructor( private _msg_serv:MessagesService ){
      this.messages = [];
    }

    public ngOnInit(){
      //à chaque modification de message on change nos données
      this._msg_serv.messages.subscribe((msg: Message[])=>{
        this.messages = msg;
      });
    }
}
