import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from './user.service';

@Injectable()
export class CanActivateGuard implements CanActivate {
  private connected: boolean = false;

  constructor(
    private router: Router,
    private user: UserService
  ) {
    this.user.currentUser.subscribe((user) => {
      this.connected = user.connected;
    });
  }

  public canActivate() {
    // test here if you user is logged
    if ( !this.connected ) {
      this.router.navigate( [ 'login' ] );
    }
    return this.connected;
  }
}
