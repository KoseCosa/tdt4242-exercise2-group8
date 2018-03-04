import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loggedIn = false;

  constructor(private authService: AuthService) {
    this.getLoggedIn();
  }

  ngOnInit() {
  }

  login(username, password) {
    this.authService.login(username, password);
  }
  getLoggedIn(): void {
   this.authService.getLoggedIn().subscribe(loggedIn => this.loggedIn = loggedIn);
  }
}
