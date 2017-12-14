import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {
  public user: any = {};

  constructor(public afAuth: AngularFireAuth, public af: AngularFireDatabase) {
    this.afAuth.authState.subscribe(user => {
      console.log(user);

      if (!user) {
        return;
      }

      this.user.name = user.displayName;
      this.user.uid = user.uid;
      this.user.photoUrl = user.photoURL;
    });
  }

  login(provider: string): void {
    if (provider === 'google') {
      this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    } else {
      this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
    }
  }

  logout(): void {
    this.user = {};
    this.afAuth.auth.signOut();
  }
}
