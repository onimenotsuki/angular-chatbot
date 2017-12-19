import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

// Services
import { AuthService } from '../../providers/auth.service';
import { DataService } from '../../providers/data.service';
import { NewsletterService } from '../../providers/newsletter.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  providers: [DataService]
})
export class LoginComponent {
  user: any;
  newsletter: boolean = false;

  constructor(public _auth: AuthService, public router: Router,
              public _data: DataService, public _newsletter: NewsletterService) { }

  login(provider: string): void {
    this._auth.login(provider).then(() => {
      if (this.newsletter) {
        this._auth.getUser().subscribe(user => {
          this.addToNewsletter(user.email);
        });
      }

      // this.addToNewsletter();
      this.router.navigate(['']);
    });
  }

  addToNewsletter(email: string): void {
    this._newsletter.addSubscriptor({ email })
      .subscribe((data) => {
        // Send success notification via UIkit
        this._newsletter.showNotification();
      });
  }
}
