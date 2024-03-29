import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OffersComponent } from './offers/offers.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hotel-reservation-system';
  constructor(private dialog: MatDialog) {
    this.openOffersPopup();
  }

  openOffersPopup(): void {
    const dialogRef = this.dialog.open(OffersComponent, {
      width: '400px', // Set your desired width
    });

    dialogRef.afterClosed().subscribe(() => {
      // Handle any logic after the dialog is closed, if needed
    });
  }
}
