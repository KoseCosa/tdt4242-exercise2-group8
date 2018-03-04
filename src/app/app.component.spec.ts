import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { AuthService } from './services/auth/auth.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        NavbarComponent
      ],
      imports: [
        FormsModule,
        RouterTestingModule,
        HttpClientTestingModule
      ],
      providers: [
        AuthService
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
