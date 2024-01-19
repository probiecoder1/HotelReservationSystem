import { Component } from '@angular/core';
import { Invoice, Room } from '../invoice/invoice.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-room',
  templateUrl: './book-room.component.html',
  styleUrls: ['./book-room.component.scss']
})
export class BookRoomComponent {
  constructor(private router: Router) {}
  rooms = [
    {
      name: 'Suite 1',
      subtitle: 'Most Popular',
      photo: 'assets/photos/3.jpg',
      description: 'This suite offers you the best time you can imagine',
      accommodation : 3,
      price: 30000,
    },
    {
      name: 'Suite 2',
      subtitle: 'Family Pack',
      photo: 'assets/photos/4.jpg',
      description: 'You and your family will get only the best services here',
      accommodation : 4,
      price: 30000,
    },
    {
      name: 'River View room',
      subtitle: 'Nature Lover',
      photo: 'assets/photos/2.jpg',
      description: 'This room offers the best view of the river and you can enjoy with the calming sound of the river flowing',
      accommodation : 3,
      price: 10000,
    },
    {
      name: 'Room 1',
      subtitle: 'Normal',
      photo: 'assets/photos/6.jpg',
      description: 'This room accomodates two people',
      accommodation : 2,
      price: 2500,
    },
    {
      name: 'Room 2',
      subtitle: 'Normal',
      photo: 'assets/photos/6.jpg',
      description: 'This room accomodates three people',
      accommodation : 3,
      price: 4000,
    },
    {
      name: 'Room 3',
      subtitle: 'Normal',
      photo: 'assets/photos/6.jpg',
      description: 'This room accomodates two people',
      accommodation : 2,
      price: 3000,
    },
  ];
  selectedRooms: Room[] = [];
  selectedDates: string = '';
  rates: number = 0;

  showForm: boolean = false;
  invoiceData: Invoice = {
    customerInfo: { name: '' },
    bookingDetails: {
      rooms: [],
      dates: '',
      rates: 0
    },
    totalCost: 0
  };

  generateInvoice(customerInfo: any): void {
    // Calculate total cost, apply discount if applicable
    const totalCost = this.calculateTotalCost();

    // Prepare customer information, booking details, and create the invoice
    this.invoiceData = {
      customerInfo: customerInfo,
      bookingDetails: {
        rooms: this.selectedRooms,
        dates: this.selectedDates,
        rates: this.rates
      },
      totalCost: totalCost
    };
    this.router.navigate(['/invoice']);
  }

  private calculateTotalCost(): number {
    let totalCost = this.rates;

    if (this.selectedRooms.length >= 3) {
      totalCost *= 0.95; // Apply 5% discount for bookings of 3 or more rooms
    }

    return totalCost;
  }

  showCustomerInfoForm(): void {
    this.showForm = true;
  }

  onCustomerInfoSubmit(customerInfo: any): void {
    this.generateInvoice(customerInfo);
    this.showForm = false;
  }
}
