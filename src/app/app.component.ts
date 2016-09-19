import { Component } from '@angular/core';
import { User } from "./_models/user";
import { UserService} from "./_services/user.service";
import { Message } from "./_models/message";
import { MessagesService } from "./_services/messages.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

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
      avatar_url: "public/assets/img/user2-160x160.jpg"
    });
    let user2 = new User({
      firstname: "FIRSTNAME",
      lastname: "LASTNAME",
      email: "EMAIL",
      avatar_url: "public/assets/img/user2-160x160.jpg"
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
