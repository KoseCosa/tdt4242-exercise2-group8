import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {
  products = [
    {id: '1', name: 'Banana', category: 'Fruit', price: 0.99, stock: 50},
    {id: '2', name: 'Beef', category: 'Meat', price: 7.99, stock: 50},
    {id: '3', name: 'Chocolate', category: 'Candy', price: 1.99, stock: 50},
    {id: '4', name: 'Bread', category: 'Baking Goods', price: 3.99, stock: 50},
    {id: '5', name: 'Soda', category: 'Beverage', price: 3.99, stock: 50}
  ];
  constructor() { }

  getProducts() {
    return this.products;
  }
  getProduct(id) {
    return this.products.find(product => product.id === id);
  }
}
