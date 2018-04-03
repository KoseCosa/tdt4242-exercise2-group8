import { Component, OnInit } from '@angular/core';

import { CartService } from '../../services/cart/cart.service';
import { ProductService } from '../../services/product/product.service';
import { OrderService } from '../../services/order/order.service';

import { Product } from '../../models/product.model';
import { Order } from '../../models/order.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: Product[] = [];

  constructor(private cartService: CartService, private productService: ProductService, private orderService: OrderService) { }

  ngOnInit() {
    this.cart = this.cartService.getCart();
  }
  removeProduct(product: Product) {
    this.cartService.removeProduct(product);
    this.cart = this.cartService.getCart();
  }

  getTotal(product) {
    let amount = product.amount;
    if (product.packageDeal != null) {
      amount = Math.floor(amount / product.packageDeal.get) * product.packageDeal.pay
                  + amount % product.packageDeal.get;
    }
    return product.price * (1 - product.salePercentage / 100) * amount;
  }

  getTotalSum() {
    let sum = 0;
    for (const product of this.cart) {
      sum += this.getTotal(product);
    }
    return sum;
  }

  placeOrder() {
    const order = new Order();
    order.products = this.cart.map<[string, number]>(product => [product.id, product.amount]);
    this.orderService.addOrder(order).subscribe(
      data => console.log(data),
      err => console.log(err)
    );
  }
}
