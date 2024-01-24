import { Component } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { FirestoreService } from '../firestore.service';


@Component({
  selector: 'app-room-vacancy',
  templateUrl: './room-vacancy.component.html',
  styleUrls: ['./room-vacancy.component.scss']
})
export class RoomVacancyComponent {
  rooms$ = this.firestoreService.getRoomsCollection();
  newRoomName: string = '';
  constructor(private firestoreService: FirestoreService) {}

  addRoom(): void {
    if (this.newRoomName.trim() !== '') {
      const newRoom = {
        name: this.newRoomName,
        // Add other properties as needed
      };

      this.firestoreService.addRoom(newRoom)
        .then(() => {
          console.log('Room added successfully!');
          this.newRoomName = ''; // Clear the input field
        })
        .catch((error) => {
          console.error('Error adding room: ', error);
        });
    }
  }
}