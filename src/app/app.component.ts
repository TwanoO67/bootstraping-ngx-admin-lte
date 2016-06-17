import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES} from '@angular/router';
import { AppHeaderComponent } from "./_widgets/app-header";
import { MenuAsideComponent } from "./_widgets/menu-aside";
import { User } from "./_models/user";
import { UserService} from "./_services/user.service";
import { Message } from "./_models/message";
import {MessagesService} from "./_services/messages.service";

@Component({
  moduleId: module.id,
  selector: 'app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ROUTER_DIRECTIVES, AppHeaderComponent, MenuAsideComponent]
})

export class App {
  title = 'ng2-admin-lte works!';

  constructor(
    private _user_serv: UserService,
    private _msg_serv: MessagesService
  ){

  }

  ngOnInit(){
    //on envoi l'evenement resize, pour AdminLTE
    window.dispatchEvent(new Event('resize'));

    //envoi d'un user de test
    let user1 = new User({
      firstname: "WEBER",
      lastname: "Antoine",
      email: "weber.antoine.pro@gmail.com",
      avatar_url: "assets/img/user2-160x160.jpg"
    });
    let user2 = new User({
      firstname: "FIRSTNAME",
      lastname: "LASTNAME",
      email: "EMAIL",
      avatar_url: "assets/img/user2-160x160.jpg"
    });
    this._user_serv.setCurrentUser( user1 );

    //envoi d'un message de test
    this._msg_serv.addMessage( new Message({
      title: "un message super important",
      content: "le contenu d'un message d'une importance extreme",
      author: user2,
      destination: user1
    }));

  }


}
