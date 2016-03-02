import {Component} from 'angular2/core';
@Component({
  // Declare the tag name in index.html to where the component attaches
  selector: 'menu-aside',
  // Location of the template for this component
  templateUrl: 'app/menu-aside.html'
})
export class MenuAside {
  // Declaring the variable for binding with initial value
  yourName: string = '';
}
