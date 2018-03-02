import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { AdminAddProductComponent } from './admin-add-product/admin-add-product.component';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { CartComponent } from './cart/cart.component';
import { NavbarComponent } from './navbar/navbar.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        AdminAddProductComponent,
        CartComponent,
        NavbarComponent
      ],
      imports: [
        FormsModule,
        RouterTestingModule
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
