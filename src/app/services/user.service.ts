import { User } from '../models/user';
import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs/Rx';

@Injectable()
export class UserService {
  public currentUser: ReplaySubject<User> = new ReplaySubject<User>(1);

  constructor() {
    // TODO 
  }

  public setCurrentUser(user: User) {
    this.currentUser.next(user);
  }
}
