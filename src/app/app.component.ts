import { Component, OnInit } from '@angular/core';
import { User, MenuService, Message, MessagesService, NotificationsService, Notification } from 'ngx-admin-lte';

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
    private menuServ: MenuService,
    private msgServ: MessagesService,
    private notifServ: NotificationsService
  ) {

  }

  public ngOnInit() {
    // define menu
    this.menuServ.setCurrentMenu(this.mylinks);

    // FAKE MESSAGE
    // defining some test users
    const user1 = new User( {
        avatarUrl: 'public/assets/img/user2-160x160.jpg',
        email: 'weber.antoine.pro@gmail.com',
        firstname: 'WEBER',
        lastname: 'Antoine'
    });
    const user2 = new User( {
        avatarUrl: 'public/assets/img/user2-160x160.jpg',
        email: 'EMAIL',
        firstname: 'FIRSTNAME',
        lastname: 'LASTNAME'
    });
    // sending a test message
    this.msgServ.addMessage( new Message( {
        author: user2,
        content: 'le contenu d\'un message d\'une importance extreme',
        destination: user1,
        title: 'un message super important'
    }) );
    // sending a test notif
    this.notifServ.addNotification( new Notification( {
        class: 'fa fa-users text-aqua',
        content: '5 new members joined today',
        link: '/page/2'
    }) );


  }

}
