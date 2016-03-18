import {Component} from 'angular2/core';
import {RouteConfig, Router, RouteParams, ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
  // Declare the tag name in index.html to where the component attaches
  selector: 'hello-world',
  // Location of the template for this component
  templateUrl: 'app/hello_world/hello_world.html'
})
export class HelloWorld {
  constructor(
    private _router: Router,
    routeParams: RouteParams){
      //console.log(_router);
    };

  // Declaring the variable for binding with initial value
  yourName: string = '';
}
