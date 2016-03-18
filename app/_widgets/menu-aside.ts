import {Component, Inject} from 'angular2/core';
import {RouteConfig, Router, ROUTER_DIRECTIVES} from 'angular2/router';
@Component({
  // Declare the tag name in index.html to where the component attaches
  selector: 'menu-aside',
  inputs: ['user'],
  directives: [ ...ROUTER_DIRECTIVES],
  // Location of the template for this component
  templateUrl: 'app/_widgets/menu-aside.html'
})
export class MenuAside {

  constructor(
    public router: Router){

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
    console.log(this.links);
  }
}
