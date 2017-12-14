import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

// Services
import { AuthService } from './providers/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(public _auth: AuthService, public router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    // redirect and return false
    if (!this._auth.isLoggedIn()) {
      this.router.navigate(['login']);
      return false;
    }

    return true;
  }

}
