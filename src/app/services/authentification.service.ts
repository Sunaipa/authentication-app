import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User, UserDataInterface, UserInterface } from '../models/user.model';
import { NotificationService } from './notification.service';

export interface CredentialInterface {
  login: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  user: UserInterface;

  userList: UserDataInterface[] = [
    {login: 'titi', userName: 'tititi', password: '123'},
    {login: 'toto', userName: 'tototo', password: '123'},
    {login: 'tutu', userName: 'tututu', password: '456'},

  ]

  constructor(private notification: NotificationService, private router: Router) {
    this.user = new User();
   }

   findUser(credentials: CredentialInterface): UserDataInterface | undefined {
    return this.userList.find(item => item.login == credentials.login && item.password == credentials.password)
   }

  authentificate(credentials: CredentialInterface)  {

    const user =this.findUser(credentials);
    

    const isAuthenticated =  user != undefined;

    if (isAuthenticated) {
      this.notification.setMessage('Vous êtes connecté');
      this.user = new User(user);
    }
    return isAuthenticated;
  }

  logout(): void {
    this.user = new User();
    this.notification.setMessage('Vous allez être déconnecter, redirection en cours... ')
    this.router.navigate(['/home']);
  }

  

}
