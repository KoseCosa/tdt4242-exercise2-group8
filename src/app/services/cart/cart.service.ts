import { Injectable } from '@angular/core';

@Injectable()
export class CartService {
  cart = [];
  constructor() { }

  addProduct(newProduct) {
    // TODO: Update to use strict compare when Products gets strings as ID
    // TODO: Cleanup Code if possible
    const productInCart = this.cart.find(product => product.id == newProduct.id);
    if (productInCart) {
      productInCart.amount = ('amount' in productInCart) ? productInCart.amount + 1 : 1;
    } else {
      newProduct.amount = 1;
      this.cart = [].concat(this.cart, newProduct);
    }
  }
  removeProduct(product) {
    this.cart.splice(this.cart.indexOf(product), 1);
  }

  getCart() {
    return this.cart;
  }
}
