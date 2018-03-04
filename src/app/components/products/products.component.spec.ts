import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ProductsComponent } from './products.component';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { CartService } from '../../services/cart/cart.service';
import { ProductService } from '../../services/product/product.service';

import { ProductFilterPipe } from '../../models/product-filter.pipe';


describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsComponent, ProductFilterPipe ],
      imports: [ FormsModule, HttpClientTestingModule ],
      providers: [ CartService, ProductService ]
    })
    .compileComponents();
  }));


  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
