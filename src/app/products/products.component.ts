import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products = [
    {name: 'Product #1', price: 9.90, amount: 4},
    {name: 'Product #2', price: 19.90, amount: 5},
    {name: 'Product #3', price: 14.90, amount: 7},
    {name: 'Product #4', price: 4.90, amount: 3}
  ];
  constructor() { }

  ngOnInit() {
  }

}
