import { User } from '../models/user';
import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs/Rx';
import { Router } from "@angular/router";

@Injectable()
export class UserService {
    public currentUser: ReplaySubject<User> = new ReplaySubject<User>( 1 );

    constructor(
      private _router: Router
    ) {
      
    }

    public setCurrentUser( user: User ) {
      this.currentUser.next( user );
    }

    public logout(){
      let user = new User();
      user.connected = false;
      this.setCurrentUser( user );
      this._router.navigate(['login']);
    }
}
