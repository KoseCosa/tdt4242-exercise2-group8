import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart = [
    {name: 'Product #1', price: 9.90, amount: 4},
    {name: 'Product #2', price: 19.90, amount: 5},
    {name: 'Product #3', price: 14.90, amount: 7},
    {name: 'Product #4', price: 4.90, amount: 3}
  ];

  constructor() { }

  ngOnInit() {
  }
  removeProduct(product) {
    const index = this.cart.indexOf(product);
    this.cart.splice(index, 1);
  }

  getTotalSum() {
    let sum = 0;
    for (const product of this.cart) {
      sum += product.price;
    }
    return sum;
  }
}
