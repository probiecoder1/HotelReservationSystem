// firestore.service.ts

import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { MatSnackBar , MatSnackBarConfig } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  constructor(private firestore: AngularFirestore, private _snackBar: MatSnackBar, private router: Router) {}

  getRoomsCollection(): Observable<any[]> {
    return this.firestore.collection('rooms').valueChanges();
  }

  addRoom(data: any): Promise<any> {
    return this.firestore.collection('rooms').add(data);
  }
  
  updateRoomBookingStatus( roomName: any, booker: string, stay: number): Promise<void> {
    // Query for the room with the specified field name and value
    const query = this.firestore.collection('rooms', ref => ref.where("name", '==', roomName));
  
    // Get the first matching document
    return query.get().toPromise().then(querySnapshot => {
      if (querySnapshot && !querySnapshot.empty) {
        // Assuming there's only one matching document, you can access the first document in the snapshot
        const roomDoc = querySnapshot.docs[0];
  
        // Access the room ID
        const roomId = roomDoc.id;
  
        // Create a reference to the specific room document using its ID
        const roomRef = this.firestore.collection('rooms').doc(roomId);
        console.log(stay);
        this.openSnackBar('Check My rooms to view booked rooms', 'Ok');
  
        // Use update method to modify only the specified fields
        return roomRef.update({
          booked: true,
          booker: booker,
          stay: stay
        });
      } else {
        console.log('No matching documents found.');
        return Promise.reject('No matching documents found.');
      }
    }).catch(error => {
      console.error('Error updating room booking status:', error);
      return Promise.reject(error);
    });
  }

  removeBooking(roomName: any): Promise<void> {
    const query = this.firestore.collection('rooms', ref => ref.where("name", '==', roomName));
  
    return query.get().toPromise().then(querySnapshot => {
      if (querySnapshot && !querySnapshot.empty) {
        const roomDoc = querySnapshot.docs[0];
        const roomId = roomDoc.id;
        const roomRef = this.firestore.collection('rooms').doc(roomId);
  
        this.openSnackBar('Your booking for this room is cancelled', 'Ok');
  
        return roomRef.update({
          booked: false,
          booker: " "
        }).then(() => {
          // Reload the current route
          this.router.navigate(['/']);
        });
      } else {
        console.log('No matching documents found.');
        return Promise.reject('No matching documents found.');
      }
    }).catch(error => {
      console.error('Error updating room booking status:', error);
      return Promise.reject(error);
    });
  }
  
  getUserRooms(bookerEmail: string) {
    const query = this.firestore.collection('rooms', ref => ref.where('booker', '==', bookerEmail));
  
    return query.get().toPromise().then(querySnapshot => {
      if (querySnapshot && !querySnapshot.empty) {
        // Ensure that querySnapshot is defined before accessing its properties
        return querySnapshot.docs.map(doc => ({
          id: doc.id,
          data: doc.data(),
        }));
      } else {
        // Return an empty array if no matching documents found or querySnapshot is undefined
        return [];
      }
    }).catch(error => {
      console.error('Error fetching user rooms:', error);
      throw error; // Rethrow the error to handle it in the calling code
    });
  }
  

  getAllRoomIds() {
    const collectionRef = this.firestore.collection('rooms');
  
    collectionRef.get().subscribe(querySnapshot => {
      if (!querySnapshot.empty) {
        querySnapshot.forEach(doc => {
          // Get the document ID for each document
          const roomId = doc.id;
  
          // Now, you can use roomId as needed in your code
          console.log('Room ID:', roomId);
        });
      } else {
        console.log('No documents found in the collection.');
      }
    });
  }
  update(){
    const Ref = this.firestore.doc('rooms');
    Ref.set({ booked: true});
  }

  openSnackBar(message: string, action: string) {
    const config = new MatSnackBarConfig();
    config.verticalPosition = 'top';
    config.horizontalPosition = 'center';
    config.duration = 3000;

    this._snackBar.open(message, action, config);
  }
}
