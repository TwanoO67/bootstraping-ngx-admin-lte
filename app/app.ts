/*
 * Angular 2 decorators and services
 */
import {Component} from 'angular2/core';
import {RouteConfig, Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {FORM_PROVIDERS} from 'angular2/common';
import {Home} from './home/home';
import {HelloWorld} from './hello_world/hello_world';
import {HelloWorld2} from './hello_world2/hello_world2';
import {Header} from './_widgets/header';
import {MenuAside} from './_widgets/menu-aside';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  providers: [ ...FORM_PROVIDERS ],
  directives: [ ...ROUTER_DIRECTIVES, Header, MenuAside],
  pipes: [],
  template: `
  <app-header [user]="user" >Chargement du header</app-header>

<menu-aside [user]="user" >Chargement du menu</menu-aside>

<!-- Content Wrapper. Contains page content -->
<div class="content-wrapper">
<!-- Content Header (Page header) -->
<section class="content-header">
  <h1>
    Page Header
    <small>Optional description</small>
  </h1>
  <ol class="breadcrumb">
    <li><a href="#"><i class="fa fa-dashboard"></i> Level</a></li>
    <li class="active">Here</li>
  </ol>
</section>

<!-- Main content -->
<section class="content">

  <!-- Your Page Content Here -->
  <router-outlet></router-outlet>

</section><!-- /.content -->
</div><!-- /.content-wrapper -->
  `
})
@RouteConfig([
  //{ path: '/', component: Home, name: 'Index' },
  //{ path: '/home', component: Home, name: 'Home' },
  {path:'/', component: HelloWorld, name: 'Index'},
  {path:'/hello', component: HelloWorld, name: 'HelloWorld'},
  {path:'/hello2', component: HelloWorld2, name: 'HelloWorld2'},
  // Async load a component using Webpack's require with es6-promise-loader and webpack `require`
  { path: '/about', loader: () => require('es6-promise!./about/about')('About'), name: 'About' },
  { path: '/**', redirectTo: ['Index'] }
])
export class App {
  angularclassLogo = 'assets/img/angularclass-avatar.png';
  name = 'Angular 2 Webpack Starter';
  url = 'https://twitter.com/AngularClass';
  user = {
    "avatar": "assets/img/user2-160x160.jpg",
    "name": "Alexander Pierce",
    "state": "Online",
    "class": "text-success"
  };
}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
