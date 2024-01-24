// home.component.ts
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SharedService } from '../shared.service';
import { MatDialog } from '@angular/material/dialog';
import { WarnComponent } from '../warn/warn.component';
import { RoomserviceService } from '../roomservice.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  minDate: Date;
  // minDates: Date;
  maxDate: Date;
  selected1 = 2;
  @ViewChild('arrivalDateInput') arriveDateInput!: ElementRef<HTMLInputElement>;
  @ViewChild('departureDateInput') departDateInput!: ElementRef<HTMLInputElement>;
  @ViewChild('peopleNumber') peopleNumber!: ElementRef<HTMLInputElement>;

  constructor(
    private sharedService: SharedService,
    private dialog: MatDialog,
    private roomService: RoomserviceService,
    private router: Router
  ) {
    const currentYear = new Date().getFullYear();
    const today = new Date();
    this.minDate = today;
    this.maxDate = new Date(currentYear + 1, 11, 31);
  }
  

  photos: string[] = [
    'assets/photos/1.jpg',
    'assets/photos/3.jpg',
    'assets/photos/4.jpg',
    'assets/photos/5.jpg',
    'assets/photos/6.jpg',
  ];

  reviews = [
    { name: 'Shiva Hari', subtitle: 'Customer', content: 'Really good place to stay in', rating: 4 },
    { name: 'Bishnu Koirala', subtitle: 'Customer, CTO at HamroTech', content: 'Good Services. Liked my stay here', rating: 5 },
  ];

  activeSlide: number = 0;

  ngOnInit() {
    setInterval(() => {
      this.nextSlide();
    }, 3000);
  }

  nextSlide() {
    this.activeSlide = (this.activeSlide + 1) % this.photos.length;
  }

  openWarnPopup(): void {
    const dialogRef = this.dialog.open(WarnComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(() => {
    });
  }

  checkAvailability() {
    
    const arrivalDate = new Date(this.arriveDateInput.nativeElement.value);
    const departureDate = new Date(this.departDateInput.nativeElement.value);

    if (arrivalDate.getTime() >= departureDate.getTime()) {
      console.log('Invalid date selection');
      this.openWarnPopup();
    } else {
      const people = this.selected1;
      
      // const totalAmount = this.roomService.calculateTotalAmount(room, stayDays);
      this.sharedService.setSelectedOptions({ arrivalDate, departureDate, people });
      // console.log(arrivalDate, departureDate, people)
      this.router.navigate(['/book-room']);
    }
  }
}
