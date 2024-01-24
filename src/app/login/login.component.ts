import { Component , OnInit} from '@angular/core';
import { MatSnackBar, MatSnackBarConfig} from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private _snackBar: MatSnackBar,private router: Router) {}
  ngOnInit() {
    this.authService.isUserLoggedIn().subscribe((isLoggedIn) => {
      if (isLoggedIn) {
        this.openSnackBar('User is logged in', 'Close');
        this.router.navigate(['/']);
      }
    });
  }
  login(): void {
    this.authService.signIn(this.email, this.password)
      .then(() => {
        this.authService.userExists(this.email)
          .then(exists => {
            if (!exists) {
              this.openSnackBar('User not found. Please Signup first', 'Close');
              this.router.navigate(['/signup']);
            } else {
              this.openSnackBar('Login Successful', 'Close');
              console.log('User exists. Proceed with logic...');
            }
          })
          .catch(error => {
            console.error('Error checking user existence:', error);
            this.openSnackBar(error, 'Close');
          });
      })
      .catch(error => {
        console.error('Login failed:', error);
        this.openSnackBar('Login Failed. Enter valid data', 'Close');
      });
  }

  openSnackBar(message: string, action: string) {
    const config = new MatSnackBarConfig();
    config.verticalPosition = 'top';
    config.horizontalPosition = 'center';
    config.duration = 3000;

    this._snackBar.open(message, action, config);
  }
}
