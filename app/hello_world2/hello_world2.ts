import {Component} from 'angular2/core';
import {RouteConfig, Router, RouteParams, ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
  // Declare the tag name in index.html to where the component attaches
  selector: 'hello-world2',
  // Location of the template for this component
  templateUrl: 'app/hello_world2/hello_world2.html'
})
export class HelloWorld2 {
  constructor(
    private _router: Router,
    routeParams: RouteParams){
      //console.log(_router);
    };

  // Declaring the variable for binding with initial value
  yourName: string = '';
}
