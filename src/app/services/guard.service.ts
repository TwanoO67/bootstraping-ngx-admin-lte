import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class CanActivateGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) { }

  public canActivate() {
    let isAuth = this.auth.isAuthenticated();

    if (isAuth !== true) {
      this.auth.login();
    }

    return isAuth;
  }
}
