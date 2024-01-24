import { MatSnackBar, MatSnackBarConfig} from '@angular/material/snack-bar';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit{
  email = '';
  password = '';
  name = '';

  constructor(private authService: AuthService, private _snackBar: MatSnackBar,private router: Router) {}
  ngOnInit() {
    this.authService.isUserLoggedIn().subscribe((isLoggedIn) => {
      if (isLoggedIn) {
        this.openSnackBar('User is logged in', 'Close');
        this.router.navigate(['/']); // Redirect to home or another page if user is already logged in
      }
    });
  }
  signUp(): void {
    this.authService.signUp(this.email, this.password, this.name)
      .then(() => {
        this.openSnackBar('Signup Successful. Please use the credentials to login', 'Close');
        this.router.navigate(['/login']);
      })
      .catch(error => {
        console.error('SignUp failed', error);
        this.openSnackBar('Signup Failed. Enter valid data', 'Close');
      });
  }

  openSnackBar(message: string, action: string) {
    const config = new MatSnackBarConfig();
    config.verticalPosition = 'top'; // Set the vertical position to top
    config.horizontalPosition = 'center'; // Set the horizontal position to center
    config.duration = 3000; // Set the duration in milliseconds

    this._snackBar.open(message, action, config);
  }
}
