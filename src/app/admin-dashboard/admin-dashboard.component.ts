import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { SharedService } from '../shared.service';
import { FirestoreService } from '../firestore.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent {
  availableRooms: any[] = [];
  bookedRooms: any[] = [];
  selectedRoom: any;
  selectedOptions: { arrivalDate?: Date; departureDate?: Date; people?: number } = {};
  showIsBooked: boolean = false;
  showNotBooked: boolean = true;

  constructor(
    private authService: AuthService,
    private firestoreService: FirestoreService,
    private _snackBar: MatSnackBar,
    private sharedService: SharedService,
    private router: Router
  ) {}

  ngOnInit() {
    this.sharedService.onAvailabilityCheck(() => {
      this.updateAvailableRooms();
    });

    this.updateAvailableRooms();
    this.selectedOptions = this.sharedService.getSelectedOptions();
  }

  private updateAvailableRooms(): void {
    this.firestoreService.getRoomsCollection().subscribe((rooms) => {
      // Filter rooms based on booked: false
      this.availableRooms = rooms.filter((room) => !room.booked);
      this.bookedRooms = rooms.filter((room) => room.booked);
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
    this.changeStatus();
  }
  changeStatus(){

  }

  showBooked(){
    this.showIsBooked = true;
    this.showNotBooked = false;

  }

  showUnBooked(){
    this.showIsBooked = false;
    this.showNotBooked = true;
    
  }

}
