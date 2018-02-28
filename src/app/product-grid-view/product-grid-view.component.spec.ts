import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductGridViewComponent } from './product-grid-view.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('ProductGridViewComponent', () => {
  let component: ProductGridViewComponent;
  let fixture: ComponentFixture<ProductGridViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductGridViewComponent ],
      imports: [RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductGridViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
