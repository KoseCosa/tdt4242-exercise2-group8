import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';

import { ProductService } from '../../services/product/product.service';
import { CartService } from '../../services/cart/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products = [];
  numberOfProducts: number;
  limit: number;
  page: number = 1;
  filter: Product = new Product();
  constructor(private productService: ProductService, private cartService: CartService) { }


  ngOnInit() {
    this.getProducts();
    this.numberOfProducts = this.products.length;
    this.limit = this.products.length;
    
  }

  getProducts() {
    this.products = this.productService.getProducts();
  }

  addProduct(product) {
    this.cartService.addProduct(product);
  }

}
