import { Component, OnInit } from '@angular/core';
import { MenuService } from 'ngx-admin-lte';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // define here your own links menu structure
  private mylinks: any = [
    {
      'title': 'Home',
      'icon': 'dashboard',
      'link': ['/']
    },
    {
      'title': 'Sub menu',
      'icon': 'link',
      'sublinks': [
        {
          'title': 'Page 2',
          'link': ['/page/2'],
        },
        {
          'title': 'Page 3',
          'link': ['/page/3'],
        }
      ]
    },
    {
      'title': 'External Link',
      'icon': 'google',
      'link': ['http://google.com'],
      'external': true,
      'target': '_blank'
    },
    {
      'title': 'External Links',
      'icon': 'link',
      'sublinks': [
        {
          'title': 'Github',
          'link': ['https://github.com/TwanoO67/ngx-admin-lte'],
          'icon': 'github',
          'external': true,
          'target': '_blank'
        },
        {
          'title': 'Yahoo',
          'link': ['http://yahoo.com'],
          'icon': 'yahoo',
          'external': true,
          'target': '_blank'
        }
      ]
    }
  ];

  constructor(
    private menuServ: MenuService
  ) {

  }

  public ngOnInit() {
    // define menu
    this.menuServ.setCurrentMenu(this.mylinks);
  }

}
