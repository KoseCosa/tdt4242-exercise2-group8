import { Component, OnInit } from '@angular/core';
// Import services
import { ProductService } from '../../services/product/product.service';
// Import Models
import { Product } from '../../models/product';

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.css']
})

export class AdminComponent implements OnInit {
  selectedProduct: Product;
  products: Product[];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  onSelect(product: Product): void {
    this.selectedProduct = product;
  }

  add(productName: String): void {
    this.productService.addProduct();
    this.products = this.productService.getProducts();
  }
}
