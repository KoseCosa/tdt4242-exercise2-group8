import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Product } from '../../models/product.model';


@Injectable()
export class CartService {
  cart = [];
  constructor() { }

  addProduct(newProduct) {
    // TODO: Update to use strict compare when Products gets strings as ID
    // TODO: Cleanup Code if possible
    const productInCart = this.cart.find(product => product.id === newProduct.id);
    if (productInCart) {
      productInCart.amount += newProduct.amount;
    } else {
      const product = new Product();
      product.id = newProduct.id;
      product.amount = newProduct.amount;
      product.name = newProduct.name;
      product.price = newProduct.price;
      product.category = newProduct.category;
      product.stock = newProduct.stock;
      product.salePercentage = newProduct.salePercentage;
      product.getBy = newProduct.getBy;
      product.payFor = newProduct.payFor;
      this.cart = [].concat(this.cart, product);
    }
  }
  removeProduct(product) {
    this.cart.splice(this.cart.indexOf(product), 1);
  }

  getCart() {
    return this.cart;
  }
}
