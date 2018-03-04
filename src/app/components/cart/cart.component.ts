import { Component, OnInit } from '@angular/core';

import { CartService } from '../../services/cart/cart.service';
import { ProductService } from '../../services/product/product.service';

import { Product } from '../../models/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: Product[] = [];

  constructor(private cartService: CartService, private productService: ProductService) { }

  ngOnInit() {
    this.cart = this.cartService.getCart();
  }
  removeProduct(product: Product) {
    this.cartService.removeProduct(product);
    this.cart = this.cartService.getCart();
  }

  getTotal(product) {
    let amount = product.amount;
    if (product.packageDeal!=null) {
      amount = Math.floor(amount / product.packageDeal.get) * product.packageDeal.pay
                  + amount % product.packageDeal.get;
    }
    return product.price*(1-product.salePercentage)*amount
  }

  getTotalSum() {
    let sum = 0;
    for (const product of this.cart) {
      sum += this.getTotal(product);
    }
    return sum;
  }
}
