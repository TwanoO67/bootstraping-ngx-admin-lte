import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  private password: string;
  private email: string;

  constructor(
    private userServ: UserService,
    private router: Router
  ) {
  }

  public ngOnInit() {
    window.dispatchEvent( new Event( 'resize' ) );
  }

  private login() {

    // test les champs en js

    // envoyer les champs a php

    // si retour positif, log le user
    if ( 1 === 1 ) {

      let user1 = new User( {
          avatarUrl: 'public/assets/img/user2-160x160.jpg',
          email: 'weber.antoine.pro@gmail.com',
          firstname: 'WEBER',
          lastname: 'Antoine'
      } );

      user1.connected = true;

      this.userServ.setCurrentUser( user1 );

      this.router.navigate( ['home'] );
    } else {
      // je recupere l'erreur du php
      // et on le place dans un label, ou un toaster
    }


  }

}
