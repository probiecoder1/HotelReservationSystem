import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {
  email: string = 'roshish@admin.com'; // Use specific admin email
  password: string = 'Password'; // Use specific admin password

  constructor(private _snackBar: MatSnackBar, private router: Router) {}

  ngOnInit() {}

  login(): void {
    // Check the hardcoded admin credentials
    if (this.email === 'roshish@admin.com' && this.password === 'Password') {
      this.openSnackBar('Admin Login Successful', 'Close');
      console.log('Admin credentials are correct. Proceed with admin logic...');
      // Redirect to the admin component
      this.router.navigate(['/admin']);
    } else {
      this.openSnackBar('Admin Login Failed. Invalid credentials', 'Close');
      console.error('Admin login failed. Invalid credentials.');
    }
  }

  openSnackBar(message: string, action: string) {
    const config = new MatSnackBarConfig();
    config.verticalPosition = 'top';
    config.horizontalPosition = 'center';
    config.duration = 3000;

    this._snackBar.open(message, action, config);
  }
}
