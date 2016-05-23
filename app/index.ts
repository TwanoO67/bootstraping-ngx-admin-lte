 ///<reference path="../typings/index.d.ts"/>

import {provide} from '@angular/core';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {FORM_PROVIDERS, LocationStrategy, Location, HashLocationStrategy} from '@angular/common';
import {ROUTER_PROVIDERS} from '@angular/router-deprecated';
import {HTTP_PROVIDERS} from '@angular/http';
import {App} from './app';

bootstrap(App, [
    FORM_PROVIDERS,
    HTTP_PROVIDERS,
    ROUTER_PROVIDERS,
    Location,
    // PathLocationStrategy being the default, we only need to define APP_BASE_HREF
    // provide(APP_BASE_HREF, {useValue: '/'}),
    // Here we want to use the # strategy instead:
    provide(LocationStrategy, {useClass: HashLocationStrategy})
]).catch((err: any) => console.error(err));
;
