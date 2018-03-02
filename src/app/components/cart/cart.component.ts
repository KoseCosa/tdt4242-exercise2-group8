import { Component, OnInit } from '@angular/core';

import { CartService } from '../../services/cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart = [];

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cart = this.cartService.getCart();
  }
  removeProduct(product) {
    this.cartService.removeProduct(product);
  }

  getTotalSum() {
    let sum = 0;
    for (const product of this.cart) {
      sum += product.price;
    }
    return sum;
  }
}
