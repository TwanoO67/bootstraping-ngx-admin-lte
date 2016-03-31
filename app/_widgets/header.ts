import {Component} from 'angular2/core';
import {MessagesBox} from "./messages_box/messages_box";

@Component({
  // Declare the tag name in index.html to where the component attaches
  selector: 'app-header',
  inputs: ['user'],
  directives:[MessagesBox],
  // Location of the template for this component
  templateUrl: 'app/_widgets//header.html'
})
export class Header {
  // Declaring the variable for binding with initial value
  yourName: string = '';
}
