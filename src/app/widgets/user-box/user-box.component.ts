import { Component, OnInit } from '@angular/core';
import { User } from "../../models/user";
import { UserService } from "../../services/user.service";
import { AuthService } from '../../services/auth.service'; 
import { Router } from '@angular/router';

@Component({
  selector: '.userBox',
  templateUrl: 'user-box.component.html',
  styleUrls: ['user-box.component.css']
})
export class UserBoxComponent implements OnInit {
    current_user: User;

    constructor( private userService : UserService, private auth: AuthService, private router: Router ){
      //se connecter au modif du user courant
      this.userService.current_user.subscribe((user: User) => this.current_user = user);
    }

    public ngOnInit(){
      //reception des données par les services
      /*this._user_serv.current_user.subscribe((user: User)=>{
        this.current_user = user;
      });*/
    }

    private Logout = (): void => {
      this.router.navigate(['/']);
      this.auth.Logout();
    }
}
