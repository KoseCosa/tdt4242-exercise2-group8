import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { OrderService } from './order.service';

describe('OrderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrderService],
      imports: [ HttpClientTestingModule ]
    });
  });

  it('should be created', inject([OrderService], (service: OrderService) => {
    expect(service).toBeTruthy();
  }));
});
