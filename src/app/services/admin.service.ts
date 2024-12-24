import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(private firestore: AngularFirestore) {}

  // Method to add a film
  addFilm(film: { name: string }) {
    return this.firestore.collection('films').add(film);
  }

  // Method to get all films
  getFilms(): Observable<any[]> {
    return this.firestore.collection('films').valueChanges({ idField: 'id' });
  }

  // Method to get all users
  getUsers() {
    return this.firestore.collection('users').valueChanges({ idField: 'id' });
  }

  // Method to deactivate a user
  deactivateUser(userId: string) {
    return this.firestore.collection('users').doc(userId).update({ active: false });
  }
}
