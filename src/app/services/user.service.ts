import {User} from "../models/user";
import {Injectable} from '@angular/core';
import {Observable, ReplaySubject} from 'rxjs/Rx';

@Injectable()
export class UserService{
  public current_user: ReplaySubject<User> = new ReplaySubject<User>(1);

  constructor() {}

  public setCurrentUser(user: User){
    this.current_user.next(user);
  }
}
