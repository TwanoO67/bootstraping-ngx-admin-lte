import { provideRouter, RouterConfig } from '@angular/router';
import { HomeComponent } from './+home';
import {Page2Component} from './+page2';
import {Page3Component} from './+page3';

export const routes: RouterConfig = [
  {
    path: '',
    redirectTo: 'home',
    terminal: true
  },
  {path: 'home', component: HomeComponent},
  {path: 'page2', component: Page2Component},
  {path: 'page3', component: Page3Component}
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
