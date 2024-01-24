// book-room.component.ts

import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { FirestoreService } from '../firestore.service';
import { SharedService } from '../shared.service';
import { Invoice } from '../invoice/invoice.model';

@Component({
  selector: 'app-book-room',
  templateUrl: './book-room.component.html',
  styleUrls: ['./book-room.component.scss'],
})
export class BookRoomComponent implements OnInit {
  availableRooms: any[] = [];
  selectedRoom: any;
  selectedOptions: { arrivalDate?: Date; departureDate?: Date; people?: number } = {};
  stay: number | undefined;
  person = this.selectedOptions.people;
  invoiceData: Invoice | null = null;

  constructor(
    private authService: AuthService,
    private firestoreService: FirestoreService,
    private sharedService: SharedService,
    private _snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit() {
    this.sharedService.onAvailabilityCheck(() => {
      this.updateAvailableRooms();
    });
    this.stay = this.sharedService.getStayDays();

    this.updateAvailableRooms();
    this.selectedOptions = this.sharedService.getSelectedOptions();
  }

  private updateAvailableRooms(): void {
    this.firestoreService.getRoomsCollection().subscribe((rooms) => {
      // Filter rooms based on booked: false
      this.availableRooms = rooms.filter((room) => !room.booked);
    });
  }

  openSnackBar(message: string, action: string) {
    const config = new MatSnackBarConfig();
    config.verticalPosition = 'top';
    config.horizontalPosition = 'center';
    config.duration = 3000;

    this._snackBar.open(message, action, config);
  }

  selectRoom(room: any): void {
    this.selectedRoom = room.name;
    console.log('Selected Room:', this.selectedRoom);
    this.bookRoom();
  }

  bookRoom() {
    this.authService.user$.subscribe((user) => {
      if (!user) {
        this.openSnackBar('User must be logged in', 'Login');
        this.router.navigate(['/login']);
      } else {
        const email = user.email || '';
        console.log('Attempting to book room:', this.selectedRoom);
        const selectedOptions = this.sharedService.getSelectedOptions();
        const arrivalDate: Date = selectedOptions?.arrivalDate!;
        const departureDate: Date = selectedOptions?.departureDate!;
        const numberOfPeople: number = selectedOptions?.people ?? 0;
        // Use the nullish coalescing operator to provide a default value (0) when this.stay is undefined
        const stay: number = this.stay ?? 0;
        console.log(stay)
        const newBookedStatus = true;
  
        if (arrivalDate && departureDate) {
          console.log('All values provided.', this.selectedRoom);
          this.firestoreService.updateRoomBookingStatus(this.selectedRoom, email, stay);
          console.log(email);
        } else {
          this.openSnackBar('Please select arrival and departure dates first.', 'Close');
        }
      }
    });
  }
  
  
}
