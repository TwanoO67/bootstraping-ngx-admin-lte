import {User} from "../_models/user";
import {Injectable, bind} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/startWith';

@Injectable()
export class UserService{
  public current_user: Observable<User>;

  private create: Subject<User> = new Subject<User>();

  constructor(){
    this.current_user = this.create.publishReplay(1).refCount();
    console.log('user serv init');
  }

  public setCurrentUser(user: User){
    console.log('push user');
    this.create.next(user);
  }
}
