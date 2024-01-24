import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar , MatSnackBarConfig } from '@angular/material/snack-bar';
import { SharedService } from '../shared.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-allrooms',
  templateUrl: './allrooms.component.html',
  styleUrls: ['./allrooms.component.scss']
})
export class AllroomsComponent implements OnInit{

  constructor(private firebaseService: FirebaseService,
    private _snackBar: MatSnackBar,
    private router: Router,
    private authService: AuthService,
    private sharedService: SharedService,){
    
  }

  ngOnInit(){
    const rooms = [
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
    this.firebaseService.saveRooms(rooms);
  }
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
  
  book(){
    this.authService.user$.subscribe(user => {
      if (!user) {
        this.openSnackBar('User must be logged in', 'Login');
        this.router.navigate(['/login']);
      } else {
        this.openSnackBar('Arrival and Departure dates should be selected', 'Ok');
        this.router.navigate(['/']);
      }
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
