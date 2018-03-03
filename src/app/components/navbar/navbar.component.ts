import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  loggedIn: boolean;
  isAdmin: boolean;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.getLoggedIn();
    this.getIsAdmin();
  }

  logIn() {
    this.authService.login('name', 'password');
  }

  logOut() {
    this.authService.logout();
  }
  getLoggedIn(): void {
   this.authService.getLoggedIn().subscribe(loggedIn => this.loggedIn = loggedIn);
  }
  getIsAdmin(): void {
   this.authService.getIsAdmin().subscribe(isAdmin => this.isAdmin = isAdmin);
  }
}
