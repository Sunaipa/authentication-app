import { AuthenticationService } from './../../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { CredentialInterface } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userInput: CredentialInterface = {
    login: '',
    password: ''
  };

  isAuthenticated = false;
  isSubmitted = false;

  constructor(private security: AuthenticationService, 
              private router: Router) { }

  ngOnInit(): void {
  }

  validateForm(): void {
    this.isSubmitted = true;
    this.isAuthenticated = this.security.authenticate(this.userInput);
    if (this.isAuthenticated) {
      this.router.navigate(['/home'])
    }else{
      console.log('KO');
    }
  }

}
