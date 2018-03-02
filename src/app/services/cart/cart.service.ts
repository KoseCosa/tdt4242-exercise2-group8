import { Injectable } from '@angular/core';

@Injectable()
export class CartService {
  cart = [];
  constructor() { }

  addProduct(product) {
    this.cart = [].concat(this.cart, product);
  }
  removeProduct(product) {
    this.cart.splice(this.cart.indexOf(product), 1);
  }

  getCart() {
    return this.cart;
  }

}
