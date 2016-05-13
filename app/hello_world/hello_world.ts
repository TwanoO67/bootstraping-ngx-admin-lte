import {Component} from '@angular/core';
import {RouteConfig, Router, RouteParams, ROUTER_DIRECTIVES} from '@angular/router-deprecated';

@Component({
  // Declare the tag name in index.html to where the component attaches
  selector: 'hello-world',
  // Location of the template for this component
  templateUrl: 'app/hello_world/hello_world.html'
})
export class HelloWorld {
  // Declaring the variable for binding with initial value
  private yourName: string = '';
  private email: string = '';
  private pwd: string = '';
  private login_error: string = '';

  constructor(
    private _router: Router,
    private routeParams: RouteParams){
      //console.log(_router);
      //super();
    };

  public connect(){
    
  }

}
