import {Component} from 'angular2/core';
import {RouteConfig, Router, RouteParams, ROUTER_DIRECTIVES} from 'angular2/router';
import {FirebaseService, FirebaseArray} from 'firebase-angular2/core';

@Component({
  // Declare the tag name in index.html to where the component attaches
  selector: 'hello-world',
  // Location of the template for this component
  templateUrl: 'app/hello_world/hello_world.html'
})
export class HelloWorld {
  // Declaring the variable for binding with initial value
  private yourName: string = '';

  private firebaseService: FirebaseService;

  constructor(
    firebaseService: FirebaseService,
    private _router: Router,
    private routeParams: RouteParams){
      //console.log(_router);
      //super();
      this.firebaseService = firebaseService;
    };

  public save(){
    return this.firebaseService.child('users').asArray().add({
      name: this.yourName
    });
  }

}
