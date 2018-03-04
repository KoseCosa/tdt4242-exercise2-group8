import { Component, OnInit } from '@angular/core';

import { ProductService } from '../../services/product/product.service';
import { CartService } from '../../services/cart/cart.service';

import { Product } from '../../models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  constructor(private productService: ProductService, private cartService: CartService) { }

  ngOnInit() {
    this.getProducts();
  }

  addProduct(product) {
    this.cartService.addProduct(product);
  }

  private getProducts() {
    this.productService.getProducts().subscribe(
      data => this.products = data.products.map(product => new Product(product)),
      err => console.log(err)
    );
  }
}
