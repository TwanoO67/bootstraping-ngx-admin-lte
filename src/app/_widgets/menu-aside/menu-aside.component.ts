import { Component, OnInit } from '@angular/core';
import { Router, ROUTER_DIRECTIVES} from '@angular/router';
import {User} from "../../_models/user";
import {UserService} from "../../_services/user.service";

@Component({
  moduleId: module.id,
  selector: 'menu-aside',
  templateUrl: 'menu-aside.component.html',
  styleUrls: ['menu-aside.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class MenuAsideComponent implements OnInit {
  private current_user: User;
  private current_url: string;
  private links: Array<any> = [
    {
      "title": "Home",
      "link": ['/']
    },
    {
      "title": "Sub menu",
      "sublinks": [
        {
          "title": "Page 2",
          "link": ['/page2'],
        },
        {
          "title": "Page 3",
          "link": ['/page3'],
        }
      ]
    }
  ];

  constructor(
    private _user_serv : UserService,
    public router: Router ){
    //recuperation de l'url courrante
    this.router.events.subscribe((evt) => this.current_url = evt.url );

    //se connecter au modification du user courant
    this._user_serv.current_user.subscribe((user: User) => this.current_user = user);

  }

  ngOnInit() {}

}
