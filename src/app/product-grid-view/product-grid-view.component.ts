import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-grid-view',
  providers: [ ProductService ],
  templateUrl: './product-grid-view.component.html',
  styleUrls: ['./product-grid-view.component.css']
})
export class ProductGridViewComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProducts()
    .subscribe(products => this.products = products.slice(1,5));
  }

}
