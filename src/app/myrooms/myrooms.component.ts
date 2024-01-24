// myrooms.component.ts
import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { FirestoreService } from '../firestore.service';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-myrooms',
  templateUrl: './myrooms.component.html',
  styleUrls: ['./myrooms.component.scss']
})
export class MyroomsComponent implements OnInit {
  userRooms: any[] = [];
  userEmail: string = '';
  userName: string = '';
  showInvoice: boolean = false;
  arrivalDate: Date | null = null;
  departureDate: Date | null = null;
  selectedRoom: any | null = null;
  stay : number | undefined

  constructor(
    private authService: AuthService,
    private firestoreService: FirestoreService,
    private sharedService: SharedService,
    private _snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit() {
    this.rooms();
    this.stay = this.sharedService.getStayDays();
    console.log(this.stay)
  }

  openSnackBar(message: string, action: string) {
    const config = new MatSnackBarConfig();
    config.verticalPosition = 'top';
    config.horizontalPosition = 'center';
    config.duration = 5000;

    this._snackBar.open(message, action, config);
  }

  rooms() {
    this.authService.user$.subscribe((user) => {
      if (!user) {
        this.openSnackBar('User must be logged in', 'Login');
        this.router.navigate(['/login']);
      } else {
        const email = user.email || '';
        this.userEmail = email;
        console.log(this.userEmail)
        this.firestoreService.getUserRooms(email).then(rooms => {
          this.userRooms = rooms;
        }).catch(error => {
          console.log(error);
        });
      }
    });
  }

  getRoomPrices(): number[] {
    return this.userRooms.map(room => room.data.price);
  }

  totalPrice() :number {
    const roomPrices = this.getRoomPrices();
    const numberOfRooms = roomPrices.length;
    console.log(roomPrices);
    console.log("the number of rooms", numberOfRooms);
    let totalPrice = roomPrices.reduce((total, price) => total + price, 0);
    if(numberOfRooms>=3){
      this.openSnackBar('You have received a discount of 5%', 'Login');
      totalPrice = totalPrice - (totalPrice * .05)
    }
    console.log(totalPrice);
    return(totalPrice);

  }
  invoiceTotal: number = 0;

  checkout() {
    this.showInvoice = true;
    this.invoiceTotal = this.totalPrice();
  }

  removeRoom(room: any) : void{
    this.selectedRoom = room.data.name
    console.log(this.selectedRoom)
    this.firestoreService.removeBooking(this.selectedRoom)
  }


  closeInvoice() {
    this.showInvoice = false;
  }

  getRoomNames(): string {
    return this.userRooms.map(room => room.data.name).join(', ');
  }

  printInvoice() {
    window.print();
  }
}
