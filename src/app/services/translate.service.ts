import { Injectable, OnInit } from '@angular/core';
import { TranslateService } from 'ng2-translate';
import { UserService } from './user.service';
import { User } from '../models/user';

@Injectable()
export class AdminLTETranslateService {
    private lang: string = 'us';

    constructor( private userServ: UserService, private translate: TranslateService ) {
        translate.addLangs( ['en', 'fr', 'ru', 'he'] );
        // this language will be used as a fallback when a translation isn't found in the current language
        translate.setDefaultLang( 'en' );

        // this.lang = userServ.currentUser.next.preferredLang;

        // the lang to use, if the lang isn't available, it will use the current loader to get them
        let browserLang = translate.getBrowserLang();
        let browserCultureLang = translate.getBrowserCultureLang();
        console.log( 'Detected browser language: "' + browserCultureLang + '"' );
        let useLang = browserLang.match( /en|fr|ru|he/ ) ? browserLang : 'en';
        translate.use( useLang );
        console.log( 'Translation language has been set to: "' + useLang + '"' );
        // translate.use( 'ru' );
    }

    public getTranslate(): TranslateService {
        return this.translate;
    }


}