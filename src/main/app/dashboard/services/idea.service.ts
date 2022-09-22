import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class IdeaService {
  constructor(private firestore: AngularFirestore) {}

  getIdeas() {
    return this.firestore.collection('idea-collection').snapshotChanges();
  }

  getUser() {
    return this.firestore
      .collection('user-collection', ref =>
        ref.where('UID', '==', 'zh0krOAcwAa7NOmvHYP4tXr4Xn72')
      )
      .valueChanges();
  }
}
