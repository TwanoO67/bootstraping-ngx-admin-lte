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
import {User} from "./_models/user";
import {UserService} from "./_services/user_service";
import {Message} from './_models/message';
import {MessagesService} from "./_services/messages_service";

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  providers: [ ...FORM_PROVIDERS, MessagesService, UserService ],
  directives: [ ...ROUTER_DIRECTIVES, Header, MenuAside],
  pipes: [],
  template: `
  <app-header>Chargement du header</app-header>

<menu-aside>Chargement du menu</menu-aside>

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

  //données de config de la page
  angularclassLogo = 'assets/img/angularclass-avatar.png';
  name = 'Angular 2 Webpack Starter';
  url = 'https://twitter.com/AngularClass';
  current_user : User;
  messages : Message[];

  constructor( private _msg_serv : MessagesService, private _user_serv : UserService ){

  }

  public ngOnInit(){
    //reception des données par les services
    this._user_serv.current_user.subscribe((user: User)=>{
      this.current_user = user;
    });
    this._msg_serv.messages.subscribe((messages: Message[])=>{
      this.messages = messages;
    });


    //insertion de donnée de démo, ici on pourrait appeler un service rest
    let user_demo = new User();
    user_demo.first_name = "Alexander";
    user_demo.last_name = "Pierce";
    user_demo.avatar_url = "assets/img/user1-128x128.jpg";
    user_demo.email = 'test@adress.org' ;
    user_demo.creation_date = "6 November 2012";

    this._user_serv.setCurrentUser(user_demo);

    let user_demo2 = new User();
    user_demo2.first_name = "Tatiana";
    user_demo2.last_name = "Grunder";
    user_demo2.avatar_url = "assets/img/user2-160x160.jpg";
    user_demo2.email = 'test2@adress.org' ;
    user_demo2.creation_date = "7 November 2012";

    //pour la demo on ajoute quelques messages
    let myMsg = new Message();
    myMsg.content = "Lorem ipsum dolor";
    myMsg.title = "Why not buy a new awesome theme?";
    myMsg.author = user_demo2;
    myMsg.destination = user_demo;
    this._msg_serv.addMessage(myMsg);

    let myMsg2 = new Message();
    myMsg2.content = "Lorem 2 ipsum dolor";
    myMsg2.title = "Why not buy a new awesome theme?";
    myMsg2.author = user_demo2;
    myMsg2.destination = user_demo;
    this._msg_serv.addMessage(myMsg2);

    /*user = {
      "avatar": "assets/img/user2-160x160.jpg",
      "name": "Alexander Pierce",
      "state": "Online",
      "class": "text-success"
    };*/

  }

}
