import {User} from "../_models/user";
import {Injectable, bind} from '@angular/core';
import {Observable, ReplaySubject} from 'rxjs';

@Injectable()
export class UserService{
  public current_user: ReplaySubject<User> = new ReplaySubject<User>(1);

  public setCurrentUser(user: User){
    console.log('push user');
    this.current_user.next(user);
  }
}
