import { Injectable } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { NotificationService } from './notification.service';
let Auth0Lock = require('auth0-lock').default;
import { environment } from '../../environments/environment';

@Injectable()
export class AuthService {
	private lock: Auth0LockStatic;
	private auth: any;
	private profile: Auth0UserProfile;

	constructor(private af: AngularFire, private notif: NotificationService) {
		this.lock = new Auth0Lock(environment.auth0.clientID, environment.auth0.domain , this.GenerateLockOption());
		this.auth = new Auth0({ domain: environment.auth0.domain, clientID: environment.auth0.clientID, callbackURL: '' });
		this.profile = this.GetProfile()

		this.lock.on('authenticated', (authResult: any): void => {
			localStorage.setItem('id_token', authResult.idToken);

			this.lock.getProfile(authResult.idToken, (err: Auth0Error, profile: Auth0UserProfile): void => {
				if (err) {
					this.notif.Error(err.message);
				}
				else {
					localStorage.setItem('profile', JSON.stringify(profile));
					this.profile = profile;

					this.auth.getDelegationToken(this.GenerateAuthOption(authResult.idToken), (err: Auth0Error, token: Auth0DelegationToken): void => {
						if (err) {
							this.notif.Error(err.message);
						}
						else {
							this.af.auth.login(token.id_token, {provider: AuthProviders.Custom, method: AuthMethods.CustomToken}).then((resp: any): void => {
								//this.notif.Success('You successfully loged in');
							}, (err: Error): void => {
								this.notif.Error(err.message);
							});
						}
					});
				}
			});
		});
	}

	public GetUserEmail = (): string => {
		return this.profile ? this.profile.email : '';
	}

	public GetUserPicture = (): string => {
		return this.profile ? this.profile.picture : '';
	}

	public GetUserName = (): string => {
		if (this.profile) {
			if (this.profile.user_metadata) {
				return this.profile.user_metadata.name;
			}

			return this.profile.name || this.profile.email;
		}

		return '';
	}

	public Login = (): void => {
		this.lock.show();
	}

	public Logout = (): void => {
		localStorage.removeItem('id_token');
		this.af.auth.logout();
		this.profile = null;
		this.notif.Success('You successfully loged out');
	}

	public IsAuthenticated = (): boolean => {
		return tokenNotExpired();
	}

	private GetProfile = (): Auth0UserProfile => {
		let profile = localStorage.getItem('profile');

		if (profile) {
			return JSON.parse(profile);
		}

		return null;
	}

	private GenerateLockOption = (): Auth0LockConstructorOptions => {
		return {
			additionalSignUpFields: [
				{name: 'name', placeholder: 'Your name'}
			]
		}
	}

	private GenerateAuthOption = (token: string): any => {
		return  {
		  id_token: token,
          api : 'firebase',
          scope : 'openid name email displayName',
          target: 'uyZPfupm9XEM2jdDwiz9xGmvDnly5ydU'
        };
	}
}
