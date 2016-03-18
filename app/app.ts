import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {HelloWorld} from './hello_world';
import {Header} from './header';
import {MenuAside} from './menu-aside';

@RouteConfig([
  {path:'/', name: 'Home', component: HelloWorld},
  {path:'/hello',        name: 'HelloWorld',       component: HelloWorld}
])
@Component({
  // Declare the tag name in index.html to where the component attaches
  selector: 'app',
  // Location of the template for this component
  templateUrl: 'app/app.html',
  directives: [Header, MenuAside, ROUTER_DIRECTIVES],
})
export class App {
  // Declaring the variable for binding with initial value
  yourName: string = '';
}
