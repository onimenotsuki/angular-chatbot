import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Services
import { AuthService } from '../../providers/auth.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  constructor(public _auth: AuthService, private router: Router) { }

  ngOnInit() {}

  login(provider: string) {
    this._auth.login(provider);
    this.router.navigate(['']);
  }
}
