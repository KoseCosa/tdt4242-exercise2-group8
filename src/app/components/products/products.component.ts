import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';

import { ProductService } from '../../services/product/product.service';
import { CartService } from '../../services/cart/cart.service';

import { Product } from '../../models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products = new Product[];
  numberOfProducts: number;
  limit: number;
  page = 1;
  filter: Product = new Product();
  constructor(private productService: ProductService, private cartService: CartService) { }


  ngOnInit() {
    this.getProducts();
    this.numberOfProducts = this.products.length;
    this.limit = this.products.length;

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
