import { Component, OnInit } from '@angular/core';

import { ProductService } from '../services/product/product.service';
import { CartService } from '../services/cart/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products = [];
  constructor(private productService: ProductService, private cartService: CartService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.products = this.productService.getProducts();
  }

  addProduct(product) {
    this.cartService.addProduct(product);
  }

}
