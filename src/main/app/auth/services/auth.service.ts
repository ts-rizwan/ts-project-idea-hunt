import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  authState: any = null;

  constructor(private auth: AngularFireAuth) {
    this.auth.authState.subscribe(authState => {
      this.authState = authState;
    });
  }

  logIn(email: string, password: string) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  logOut() {
    this.auth.signOut();
  }

  get isAuthenticated(): boolean {
    return this.authState !== null;
  }

  currentUserEmail(): string {
    return this.isAuthenticated ? this.authState.email : null;
  }
}
