import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class CanActivateGuard implements CanActivate {
  constructor(private router: Router) { }

  public canActivate() {
    // test here if you user is logged

    return true;
  }
}
