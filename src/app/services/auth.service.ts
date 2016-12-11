import { Injectable } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { NotificationService } from './notification.service';
let auth0Lock = require('auth0-lock').default;
import { environment } from '../../environments/environment';

@Injectable()
export class AuthService {
  private lock: Auth0LockStatic;
  private auth: any;
  private profile: Auth0UserProfile;

  constructor(private af: AngularFire, private notif: NotificationService) {
    this.lock = new auth0Lock(environment.auth0.clientID, environment.auth0.domain, this.generateLockOption());
    this.auth = new Auth0({ callbackURL: '', clientID: environment.auth0.clientID, domain: environment.auth0.domain });
    this.profile = this.getProfile();

    this.lock.on('authenticated', (authResult: any): void => {
      localStorage.setItem('id_token', authResult.idToken);

      this.lock.getProfile(authResult.idToken, (err: Auth0Error, profile: Auth0UserProfile): void => {
        if (err) {
          this.notif.error(err.message);
        } else {
          localStorage.setItem('profile', JSON.stringify(profile));
          this.profile = profile;

          this.auth.getDelegationToken(this.generateAuthOption(authResult.idToken)
            , (err: Auth0Error, token: Auth0DelegationToken): void => {
              if (err) {
                this.notif.error(err.message);
              } else {
                this.af.auth.login(token.id_token, {
                  method: AuthMethods.CustomToken, provider: AuthProviders.Custom
                }).then((resp: any): void => {
                  // this.notif.Success('You successfully loged in');
                }, (err: Error): void => {
                  this.notif.error(err.message);
                });
              }
            });
        }
      });
    });
  }

  public getUserEmail = (): string => {
    return this.profile ? this.profile.email : '';
  }

  public getUserPicture = (): string => {
    return this.profile ? this.profile.picture : '';
  }

  public getUserName = (): string => {
    if (this.profile) {
      if (this.profile.user_metadata) {
        return this.profile.user_metadata.name;
      }

      return this.profile.name || this.profile.email;
    }

    return '';
  }

  public login = (): void => {
    this.lock.show();
  }

  public logout = (): void => {
    localStorage.removeItem('id_token');
    this.af.auth.logout();
    this.profile = null;
    this.notif.success('You successfully loged out');
  }

  public isAuthenticated = (): boolean => {
    return tokenNotExpired();
  }

  private getProfile = (): Auth0UserProfile => {
    let profile = localStorage.getItem('profile');

    if (profile) {
      return JSON.parse(profile);
    }

    return null;
  }

  private generateLockOption = (): Auth0LockConstructorOptions => {
    return {
      additionalSignUpFields: [
        { name: 'name', placeholder: 'Your name' }
      ]
    };
  }

  private generateAuthOption = (token: string): any => {
    return {
      api: 'firebase',
      id_token: token,
      scope: 'openid name email displayName',
      target: 'uyZPfupm9XEM2jdDwiz9xGmvDnly5ydU'
    };
  }
}
