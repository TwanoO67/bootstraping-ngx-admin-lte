import {Component} from 'angular2/core';
@Component({
  // Declare the tag name in index.html to where the component attaches
  selector: 'app-header',
  // Location of the template for this component
  templateUrl: 'app/header.html'
})
export class Header {
  // Declaring the variable for binding with initial value
  yourName: string = '';
}
