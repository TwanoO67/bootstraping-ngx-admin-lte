///<reference path="../node_modules/angular2/typings/browser.d.ts"/>
///<reference path="../node_modules/zone.js/dist/zone.js.d.ts" />

import { bootstrap }    from '@angular/platform-browser-dynamic';
import {ROUTER_PROVIDERS} from '@angular/router';
import {HTTP_PROVIDERS} from '@angular/http';
import {provide} from '@angular/core';

import {App} from './app';
bootstrap(App, [ROUTER_PROVIDERS, HTTP_PROVIDERS]);
