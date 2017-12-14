import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Services
import { AuthService } from '../../providers/auth.service';
import { DataService } from '../../providers/data.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  providers: [DataService]
})
export class LoginComponent implements OnInit {
  constructor(public _auth: AuthService, public router: Router, public _data: DataService) { }

  ngOnInit() { }

  login(provider: string) {
    this._auth.login(provider).then(() => {
      this.router.navigate(['']);
    });
  }
}
