import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service'; 
import { Router } from '@angular/router';

@Component({
  selector: '.userBox',
  templateUrl: './user-box.component.html',
  styleUrls: ['./user-box.component.css']
})
export class UserBoxComponent implements OnInit {
    constructor(private auth: AuthService, private router: Router) {}

    public ngOnInit(){
      
    }

    private Logout = (): void => {
      this.router.navigate(['/']);
      this.auth.Logout();
    }
}
