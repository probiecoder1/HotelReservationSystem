import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OffersComponent } from '../offers/offers.component';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLoggedIn: boolean = false;
  isMenuHidden: boolean = true;
  // isHome:boolean = true

  constructor(private dialog: MatDialog, private authService: AuthService, private router: Router) {}

  ngOnInit() {
    // Subscribe to user authentication changes
    this.authService.user$.subscribe(user => {
      this.isLoggedIn = !!user;
      // this.checkIfHome();
    });
  }

  // private checkIfHome() {
  //   // Check if the current route is the home component
  //   this.isHome = this.router.url === '/';
  // }


  openOffersPopup(): void {
    const dialogRef = this.dialog.open(OffersComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(() => {
    });
  }

  toggleMenu(): void {
    this.isMenuHidden = !this.isMenuHidden;
  }

  logout(): void {
    this.authService.signOut();
  }
}
