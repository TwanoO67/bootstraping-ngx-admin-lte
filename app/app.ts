import {Component} from 'angular2/core';
import {HelloWorld} from './hello_world';
import {Header} from './header';
import {MenuAside} from './menu-aside';

@Component({
  // Declare the tag name in index.html to where the component attaches
  selector: 'app',
  // Location of the template for this component
  templateUrl: 'app/app.html',
  directives: [Header, MenuAside, HelloWorld]
})
export class App {
  // Declaring the variable for binding with initial value
  yourName: string = '';
}
