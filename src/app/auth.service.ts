import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { first, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user$: Observable<firebase.default.User | null>;

  constructor(private afAuth: AngularFireAuth, private firestore: AngularFirestore) {
    this.user$ = this.afAuth.authState;
  }

  signUp(email: string, password: string, name: string): Promise<firebase.default.auth.UserCredential> {
    return this.afAuth.createUserWithEmailAndPassword(email, password)
      .then(userCredential => {
        // Store additional user information
        const uid = userCredential.user?.uid;
        this.storeUserData(uid, email, name);
  
        return userCredential;
      });
  }
  
  storeUserData(uid: string | undefined, email: string, name: string): void {
    // Here you can store additional user information in your database or perform other actions
    // For demonstration purposes, let's assume you have a 'users' collection in Firestore
    if (uid) {
      this.firestore.collection('users').doc(uid).set({
        email: email,
        name: name,
      })
      .then(() => {
        console.log('User data stored successfully');
      })
      .catch(error => {
        console.error('Error storing user data:', error);
      });
    }
  }
  

  signIn(email: string, password: string): Promise<firebase.default.auth.UserCredential> {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  signInAsAdmin(email: string, password: string): Promise<firebase.default.auth.UserCredential> {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  async userExists(email: string): Promise<boolean> {
    try {
      const querySnapshot = await this.firestore.collection('users', ref => ref.where('email', '==', email)).get().pipe(first()).toPromise();

      if (querySnapshot && !querySnapshot.empty) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error('Error checking user existence:', error);
      return false;
    }
  }

  isUserLoggedIn(): Observable<boolean> {
    return this.user$.pipe(map((user) => !!user));
  }

  signOut() {
    return this.afAuth.signOut();
  }
}
