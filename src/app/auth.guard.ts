import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot,
         RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(public afAuth: AngularFireAuth, public router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {

    return this.afAuth.authState
      .take(1)
      .map(user => !!user)
      .do(loggedIn => {
        if (!loggedIn) {
          this.router.navigate(['/login']);
        }
      });
  }
}