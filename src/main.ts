import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { App, environment } from './app/';
import {UserService} from "./app/_services/user.service";
import {MessagesService} from "./app/_services/messages.service"
import { APP_ROUTER_PROVIDERS } from './app/app.routes';

if (environment.production) {
  enableProdMode();
}

bootstrap(App,[
  APP_ROUTER_PROVIDERS,
  MessagesService,
  UserService
]);
