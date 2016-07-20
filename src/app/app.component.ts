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
    let ie = this.detectIE();
    if(!ie){
      window.dispatchEvent(new Event('resize'));
    }
    else{
      //solution for IE from @hakonamatata
      var event = document.createEvent("Event");
      event.initEvent("resize", false, true);
      window.dispatchEvent(event);
    }

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

  detectIE(): any{
    var ua = window.navigator.userAgent;

    // Test values; Uncomment to check result …
    // IE 10
    // ua = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)';
    // IE 11
    // ua = 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko';
    // IE 12 / Spartan
    // ua = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0';
    // Edge (IE 12+)
    // ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586';

    var msie = ua.indexOf('MSIE ');
    if (msie > 0) {
      // IE 10 or older => return version number
      return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
    }

    var trident = ua.indexOf('Trident/');
    if (trident > 0) {
      // IE 11 => return version number
      var rv = ua.indexOf('rv:');
      return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
    }

    var edge = ua.indexOf('Edge/');
    if (edge > 0) {
      // Edge (IE 12+) => return version number
      return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
    }

    // other browser
    return false;
  }


}
