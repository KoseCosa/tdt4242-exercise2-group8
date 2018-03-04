import { Component, OnInit } from '@angular/core';
// Import services
import { ProductService } from '../../services/product/product.service';
// Import Models
import { Product } from '../../models/product';
import { PackageDeal } from '../../models/product';

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

  addPackageDeal(product: Product, toGet: number, toPay: number) {
    product.packageDeal = new PackageDeal(toGet, toPay);
  }

  add(productName: string, productCategory: string,
    productStock: number, productPrice: number, productSale: number): void {
    this.productService.addProduct(productName, productPrice, productCategory,
      productStock, productSale);
    this.products = this.productService.getProducts();
  }
  /* TODO: Look into edit product atm I think it just access the product in ProductService directly and updates that.
  This will be a problem when we get it connected to the database since we want it to update the database aswell */
}
