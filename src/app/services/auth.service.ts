import {Injectable} from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
let Auth0Lock = require('auth0-lock').default;

@Injectable()
export class AuthService {
	private lock: Auth0LockStatic = new Auth0Lock('uyZPfupm9XEM2jdDwiz9xGmvDnly5ydU', 'dominiclapointe.auth0.com');

	constructor() {
		this.lock.on('authenticated', (authResult): void => {
			localStorage.setItem('id_token', authResult.idToken);
		});
	}

	public Login = (): void => {
		this.lock.show();
	}

	public Logout = (): void => {
		localStorage.removeItem('id_token');
	}

	public IsAuthenticated = (): boolean => {
		return tokenNotExpired();
	}
}