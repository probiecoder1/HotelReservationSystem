// signup.component.ts

import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  email = '';
  password = '';

  constructor(private authService: AuthService) {}

  signUp(): void {
    this.authService.signUp(this.email, this.password)
      .then(() => {
        // SignUp successful
        console.log('SignUp successful');
      })
      .catch(error => {
        console.error('SignUp failed', error);
      });
  }
}
