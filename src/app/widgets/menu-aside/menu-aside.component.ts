import { Component, OnInit }  from '@angular/core';
import { User }               from "../../models/user";
import { Router }             from "@angular/router";
import { UserService }        from "../../services/user.service";
import { AuthService }        from "../../services/auth.service";

@Component({
  selector: 'menu-aside',
  templateUrl: './menu-aside.component.html',
  styleUrls: ['./menu-aside.component.css']
})
export class MenuAsideComponent implements OnInit {
  private current_url: string;
  private links: Array<any> = [
    {
      "title": "Home",
      "icon": "dashboard",
      "link": ['/']
    },
    {
      "title": "Client",
      "icon": "usd",
      "link": ['/client']
    },
    {
      "title": "Sub menu",
      "icon": "link",
      "sublinks": [
        {
          "title": "Page 2",
          "link": ['/page/2'],
        },
        {
          "title": "Page 3",
          "link": ['/page/3'],
        }
      ]
    },
    {
      "title": "External Link",
      "icon": "google",
      "link": ['http://google.com'],
      "external": true,
      "target": "_blank"
    },
    {
      "title": "External Links",
      "icon": "link",
      "sublinks": [
        {
          "title": "Github",
          "link": ['http://github.com'],
          "icon": "github",
          "external": true,
          "target": "_blank"
        },
        {
          "title": "Yahoo",
          "link": ['http://yahoo.com'],
          "icon": "yahoo",
          "external": true,
          "target": "_blank"
        }
      ]
    }
  ];

  constructor(private _user_serv : UserService, public router: Router, private auth: AuthService){
    //recuperation de l'url courrante
    this.router.events.subscribe((evt) => this.current_url = evt.url );
  }

  ngOnInit() {
    
  }

}
