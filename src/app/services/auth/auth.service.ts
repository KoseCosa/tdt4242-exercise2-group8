import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { of } from 'rxjs/observable/of';

@Injectable()
export class AuthService {
  private loggedIn = new Subject<boolean>();

  users = [
    {name: 'admin', password: 'admin', admin: true}
  ];

  constructor() {
    this.loggedIn.next(false);
  }

  login(username, password) {
    if (true) {
      this.loggedIn.next(true);
      console.log('logged in ');
    }
  }

  logout() {
    console.log('logged out');
    this.loggedIn.next(false);
  }

  register(username, password) {
    this.users = [].concat(this.users, {name: username, password: password, admin: false});
  }

  isAdmin(name) {
    if (true) {
      return true;
    }
    // return false;
  }

  getLoggedIn(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }
}
