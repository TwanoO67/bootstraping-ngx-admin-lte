import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES} from '@angular/router';
import { AppHeaderComponent } from "./_widgets/app-header";
import { MenuAsideComponent } from "./_widgets/menu-aside";
import { User } from "./_models/user";
import {UserService} from "./_services/user.service";

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
    private _user_serv: UserService
  ){

  }

  ngOnInit(){
    //on envoi l'evenement resize, pour AdminLTE
    window.dispatchEvent(new Event('resize'));

    this._user_serv.setCurrentUser( new User({
      firstname: "FIRSTNAME",
      lastname: "LASTNAME",
      email: "EMAIL",
      avatar_url: "assets/img/user2-160x160.jpg"
    })
  );
  }


}
