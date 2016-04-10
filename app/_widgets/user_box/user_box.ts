import {Component,HostBinding} from 'angular2/core';
import {User} from "../../_models/user";
import {UserService} from "../../_services/user_service";

@Component({
  // Declare the tag name in index.html to where the component attaches
  selector: '.userBox',
  // Location of the template for this component
  templateUrl: 'app/_widgets/user_box/user_box.html'
})
export class UserBox {
  current_user: User;

  constructor( private _user_serv : UserService ){
    this.current_user = new User();

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
