import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import firebase from 'firebase/compat/app';
import { Observable } from 'rxjs';
import { AppUser } from 'shared/models/app-user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private db: AngularFireDatabase) {}

  save(user: firebase.User) {
    this.db.list('/users').update(user.uid, {
      name: user.displayName,
      email: user.email,
    });
  }

  get(uid: any): Observable<AppUser> {
    return this.db
      .object('/users/' + uid)
      .valueChanges() as Observable<AppUser>;
  }
}
