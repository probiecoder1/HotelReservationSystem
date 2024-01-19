import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OffersComponent } from '../offers/offers.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private dialog: MatDialog) {}

  openOffersPopup(): void {
    const dialogRef = this.dialog.open(OffersComponent, {
      width: '400px', // Set your desired width
    });

    dialogRef.afterClosed().subscribe(() => {
      // Handle any logic after the dialog is closed, if needed
    });
  }

}
