import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class CanActivateGuard implements CanActivate {
	constructor(private auth: AuthService) {}

	canActivate() {
		let isAuth = this.auth.IsAuthenticated();

		if (isAuth !== true) {
			this.auth.Login();
		}

		return this.auth.IsAuthenticated();
	}
}