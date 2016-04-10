import {Component, Inject} from 'angular2/core';
import {RouteConfig, Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {User} from "../_models/user";
import {UserService} from "../_services/user_service";

@Component({
  // Declare the tag name in index.html to where the component attaches
  selector: 'menu-aside',
  directives: [ ...ROUTER_DIRECTIVES],
  // Location of the template for this component
  templateUrl: 'app/_widgets/menu-aside.html'
})
export class MenuAside {
  current_user: User;

  constructor( private _user_serv : UserService, public router: Router ){
    this.current_user = new User();

    //se connecter au modif du user courant
    this._user_serv.current_user.subscribe((user: User) => this.current_user = user);

  }


  links: Array<any> = [
    {
      "title": "Hello World",
      "link": ['HelloWorld'],
      "class": "active"
    },
    {
      "title": "Sous menu",
      "sublinks": [
        {
          "title": "Sous item",
          "link": ['HelloWorld'],
        },
        {
          "title": "Sous item 2",
          "link": ['HelloWorld2'],
        }
      ]
    }
  ];

  ngOnInit(){
    //console.log(this.links);
  }
}
