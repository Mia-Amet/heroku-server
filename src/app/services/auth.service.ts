import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { Observable } from "rxjs";
import firebase from "firebase";
import UserCredential = firebase.auth.UserCredential;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private fireAuth: AngularFireAuth
  ) { }

  public get token(): Observable<string> {
    return this.fireAuth.idToken;
  }

  public get user(): Observable<firebase.User> {
    return this.fireAuth.user;
  }

  login(email: string, password: string): Promise<UserCredential> {
    return this.fireAuth.signInWithEmailAndPassword(email, password);
  }

  logout() {
    return this.fireAuth.signOut();
  }

  signup(email: string, password: string): Promise<UserCredential> {
    return this.fireAuth.createUserWithEmailAndPassword(email, password);
  }
}
