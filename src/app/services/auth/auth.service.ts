import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);
  private adminUser = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {
    this.isLoggedIn();
    this.isAdmin();
  }

  login(username, password) {
    const body = new HttpParams()
    .set('username', username)
    .set('password', password);

    this.http.post<{success: boolean, msg: string}>('/api/auth/login',
      body.toString(),
      {
        headers: new HttpHeaders()
          .set('Content-Type', 'application/x-www-form-urlencoded')
      }
    ).subscribe(
      data => { this.isLoggedIn(); this.isAdmin(); },
      err => { this.isLoggedIn(); this.isAdmin(); },
    );
  }

  logout() {
    const body = new HttpParams();

    this.http.post<{success: boolean, msg: string}>('/api/auth/logout',
      body.toString(),
      {
        headers: new HttpHeaders()
          .set('Content-Type', 'application/x-www-form-urlencoded')
      }
    ).subscribe(
      data => { this.isLoggedIn(); this.isAdmin(); },
      err => { this.isLoggedIn(); this.isAdmin(); },
    );
  }

  register(username, password) {
    const body = new HttpParams()
    .set('username', username)
    .set('password', password);

    this.http.post<{success: boolean, msg: string}>('/api/auth/register',
      body.toString(),
      {
        headers: new HttpHeaders()
          .set('Content-Type', 'application/x-www-form-urlencoded')
      }
    ).subscribe(
      data => console.log(data)
    );
  }

  isLoggedIn() {
    const body = new HttpParams();

    this.http.get<{success: boolean, msg: string}>('/api/auth/loggedin')
    .subscribe(
      data => this.loggedIn.next(data.success),
      err => this.loggedIn.next(err.success || false)
    );
  }

  isAdmin() {
    const body = new HttpParams();

    this.http.get<{success: boolean, msg: string}>('/api/auth/isadmin')
    .subscribe(
      data => this.adminUser.next(data.success),
      err => this.adminUser.next(err.success || false)
    );
  }

  getAdmin(): Observable<boolean> {
    return this.adminUser.asObservable();
  }

  getLoggedIn(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }
}
