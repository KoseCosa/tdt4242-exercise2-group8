import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Product } from './product';
import { PRODUCTS } from './mock-products';
import { MessageService } from './message.service';


@Injectable()
export class ProductService {

  constructor(private messageService: MessageService) { }

  getProducts(): Observable<Product[]> {
    // TODO: Send the message _after_ fetching the products
    this.messageService.add('ProductService: fetched products');
    return of(PRODUCTS);
  }

  getProduct(id: number): Observable<Product> {
    // Todo: send the message _after_ fetching the product
    this.messageService.add(`HeroService: fetched produc id=${id}`);
    return of(PRODUCTS.find(product => product.id === id));
  }
}
