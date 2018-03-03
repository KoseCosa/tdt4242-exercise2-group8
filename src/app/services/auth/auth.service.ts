import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { of } from 'rxjs/observable/of';

@Injectable()
export class AuthService {
  private loggedIn = new Subject<boolean>();
  private isAdmin = new Subject<boolean>();

  users = [
    {name: 'admin', password: 'admin', admin: true},
    {name: 'user', password: 'password', admin: false}
  ];

  constructor() {
    this.loggedIn.next(false);
    this.isAdmin.next(false);
  }

  login(username, password) {
    const user = this.users.find(user => user.name === username);
    if (user) {
      this.isAdmin.next(user.admin);
      this.loggedIn.next(user.password === password);
      return true;
    }
    return false;
  }

  logout() {
    this.loggedIn.next(false);
  }

  register(username, password) {
    if (this.users.find(user => user.name === username)) {
      return false;
    }
    this.users = [].concat(this.users, {name: username, password: password, admin: false});
    return true;
  }

  getIsAdmin(): Observable<boolean> {
    return this.isAdmin.asObservable();
  }

  getLoggedIn(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }
}
