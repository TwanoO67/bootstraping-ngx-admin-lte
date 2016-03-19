///<reference path="../node_modules/angular2/typings/browser.d.ts"/>
///<reference path="../node_modules/zone.js/dist/zone.js.d.ts" />

import {bootstrap}  from 'angular2/platform/browser';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';
import {provide} from 'angular2/core';
import {FirebaseService} from 'firebase-angular2/core';

// Tell TypeScript that Firebase is a global object.
declare var Firebase;

import {App} from './app';
bootstrap(App, [ROUTER_PROVIDERS, HTTP_PROVIDERS,
  provide(FirebaseService, {
    useFactory: () => new FirebaseService( new Firebase('https://luminous-heat-6510.firebaseio.com/') )
  })
]);
