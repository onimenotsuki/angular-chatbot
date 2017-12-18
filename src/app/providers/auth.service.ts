import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

@Injectable()
export class AuthService {
  public user: any = {};

  constructor(public afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe(user => {
      if (!user) {
        return;
      }

      this.user.name = user.displayName;
      this.user.email = user.email;
      this.user.uid = user.uid;
      this.user.photoUrl = user.photoURL;
    });
  }

  getUser() {
    return this.afAuth.authState;
  }

  login(provider: string) {
    if (provider === 'google') {
      return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    } else {
      return this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
    }
  }

  logout(): void {
    this.user = {};
    this.afAuth.auth.signOut();
  }
}
