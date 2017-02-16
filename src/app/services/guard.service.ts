import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from "./user.service";

@Injectable()
export class CanActivateGuard implements CanActivate {
  private connected: boolean = false;

  constructor(
    private _router: Router,
    private _user: UserService
  ) {
    this._user.currentUser.subscribe((user) => {
      this.connected = user.connected;
    })
  }

  public canActivate() {
    // test here if you user is logged
    if(!this.connected){
      this._router.navigate(['login']);
    }
    return this.connected;
  }
}
