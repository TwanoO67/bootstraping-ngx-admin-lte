import {Component,HostBinding} from 'angular2/core';
import {Message} from "../../_models/message";
import {MessagesService} from "../../_services/messages_service"
//import {MessagesService } from "../../_services/messages_service";

@Component({
  // Declare the tag name in index.html to where the component attaches
  selector: '.messagesBox',
  inputs: ['user'],
  providers: [MessagesService] ,
  // Location of the template for this component
  templateUrl: 'app/_widgets/messages_box/messages_box.html'
})
export class MessagesBox {
  // Declaring the variable for binding with initial value
  messages: Message[];

  constructor( private _msg_serv:MessagesService ){
    this.messages = [];
  }

  public NgOnInit(){
    this._msg_serv.messages.subscribe((msg: Message[])=>{
      this.messages = msg;
    });
    this._msg_serv.messages.addMessage( new Message({
      'content': "Lorem ipsum dolor",
      "title": "Why not buy a new awesome theme?"
    }) );
  }
}
