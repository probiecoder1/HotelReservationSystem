// login.component.ts

import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(private authService: AuthService) {}

  login(): void {
    this.authService.signIn(this.email, this.password)
      .then(() => {
        // Login successful
        console.log('Login successful');
      })
      .catch(error => {
        console.error('Login failed', error);
      });
  }
}
