import { Component, OnInit } from '@angular/core';
import {User} from "../../_models/user";
import {UserService} from "../../_services/user.service";

@Component({
  moduleId: module.id,
  selector: '.userBox',
  templateUrl: 'user-box.component.html',
  styleUrls: ['user-box.component.css']
})
export class UserBoxComponent implements OnInit {
    current_user: User;

    constructor( private _user_serv : UserService ){
      //se connecter au modif du user courant
      this._user_serv.current_user.subscribe((user: User) => this.current_user = user);
    }

    public ngOnInit(){
      //reception des données par les services
      /*this._user_serv.current_user.subscribe((user: User)=>{
        this.current_user = user;
      });*/
    }
}
