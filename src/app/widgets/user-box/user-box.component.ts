import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  /* tslint:disable */
  selector: '.userBox',
  /* tslint:enable */
  styleUrls: ['./user-box.component.css'],
  templateUrl: './user-box.component.html'
})
export class UserBoxComponent implements OnInit {
  constructor(private auth: AuthService, private router: Router) {
    // TODO
  }

  public ngOnInit() {
    // TODO
  }

  private logout = (): void => {
    this.router.navigate(['/']);
    this.auth.logout();
  }
}
