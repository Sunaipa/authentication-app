import { User, UserInterface } from './../models/user.model';
import { Injectable } from '@angular/core';

export interface CredentialInterface {
  login: string,
  password: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  user: UserInterface;

  constructor() {
    this.user = new User();
   }

  authenticate(credentials: CredentialInterface) {
    const isAuthenticated =  credentials.login === 'user' && credentials.password === '123';

    if (isAuthenticated) {
      this.user = new User({
        userName: 'Default User',
        login: credentials.login
      });
    }
    return isAuthenticated;
  }
}
