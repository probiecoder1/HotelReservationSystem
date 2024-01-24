import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  constructor(private db: AngularFireDatabase) {}

  getRooms(): Observable<any[]> {
    // Adjust 'rooms' to match the database path for your rooms
    return this.db.list<any>('rooms').valueChanges();
  }
  saveRooms(rooms: any[]): void {
    // Adjust 'rooms' to match the database path for your rooms
    rooms.forEach(room => {
      this.db.list('rooms').push(room);
    });
  }

  
}
