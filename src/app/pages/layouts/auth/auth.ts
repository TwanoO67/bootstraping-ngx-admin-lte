import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/user';
import { UserService } from '../../../services/user.service';
import { LoggerService } from '../../../services/logger.service';

import { ToasterService, ToasterConfig } from 'angular2-toaster/angular2-toaster';
import { AdminLTETranslateService } from '../../../services/translate.service';

@Component( {
    selector: 'app-layouts-auth',
    templateUrl: './auth.html'
})
export class LayoutsAuthComponent implements OnInit {
    private toastrConfig: ToasterConfig;
    private logger: LoggerService;
    private mylinks: Array<any> = [];

    constructor(
      private userServ: UserService,
      private toastr: ToasterService,
      private translate: AdminLTETranslateService
    ) {
        this.toastrConfig = new ToasterConfig( {
            newestOnTop: true,
            showCloseButton: true,
            tapToDismiss: false
        });
        // this.translate = translate.getTranslate();
        // this.logger = new LoggerService( this.translate );
    }

    public ngOnInit() {
        //  sedding the resize event, for AdminLTE to place the height
        let ie = this.detectIE();
        if ( !ie ) {
            window.dispatchEvent( new Event( 'resize' ) );
        } else {
            // solution for IE from @hakonamatata
            let event = document.createEvent( 'Event' );
            event.initEvent( 'resize', false, true );
            window.dispatchEvent( event );
        }

        // define here your own links menu structure
        this.mylinks = [
          {
            'title': 'Home',
            'icon': 'dashboard',
            'link': ['/']
          },
          {
            'title': 'Client',
            'icon': 'usd',
            'link': ['/client']
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
                'link': ['http://github.com'],
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

    }

    protected detectIE(): any {
        let ua = window.navigator.userAgent;

        // Test values; Uncomment to check result …
        // IE 10
        // ua = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)';
        // IE 11
        // ua = 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko';
        // IE 12 / Spartan
        // ua = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0';
        // Edge (IE 12+)
        // ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko)
        // Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586';

        let msie = ua.indexOf( 'MSIE ' );
        if ( msie > 0 ) {
            // IE 10 or older => return version number
            return parseInt( ua.substring( msie + 5, ua.indexOf( '.', msie ) ), 10 );
        }

        let trident = ua.indexOf( 'Trident/' );
        if ( trident > 0 ) {
            // IE 11 => return version number
            let rv = ua.indexOf( 'rv:' );
            return parseInt( ua.substring( rv + 3, ua.indexOf( '.', rv ) ), 10 );
        }

        let edge = ua.indexOf( 'Edge/' );
        if ( edge > 0 ) {
            // Edge (IE 12+) => return version number
            return parseInt( ua.substring( edge + 5, ua.indexOf( '.', edge ) ), 10 );
        }

        // other browser
        return false;
    }

}
