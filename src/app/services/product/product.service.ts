import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Product } from './product';
import { PRODUCTS } from './mock-products';


@Injectable()
export class ProductService {
  products = [
    {name: 'Banana', category: 'Fruit', price: 0.99, stock: 50},
    {name: 'Beef', category: 'Meat', price: 7.99, stock: 50},
    {name: 'Chocolate', category: 'Candy', price: 1.99, stock: 50},
    {name: 'Bread', category: 'Baking Goods', price: 3.99, stock: 50}
    {name: 'Soda', category: 'Beverage', price: 3.99, stock: 50}
  ];
  constructor() { }

  getProducts(): Observable<Product[]> {
    return of(PRODUCTS);
  }
  getProduct(id: number): Observable<Product> {
    return of(PRODUCTS.find(product => product.id === id));
  }
}
