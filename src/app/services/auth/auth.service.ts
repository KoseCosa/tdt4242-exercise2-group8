import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
  private loggedIn = new Subject<boolean>();
  private isAdmin = new Subject<boolean>();

  constructor(private http: HttpClient) {
    this.isLoggedIn();
    this.isAdmin.next(false);
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
      data => this.loggedIn.next(true),
      err => console.log(err)
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
      data => this.loggedIn.next(false),
      err => console.log(err)
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
      data => this.loggedIn.next(true),
      err => this.loggedIn.next(false)
    );
  }

  getIsAdmin(): Observable<boolean> {
    return this.isAdmin.asObservable();
  }

  getLoggedIn(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }
}
