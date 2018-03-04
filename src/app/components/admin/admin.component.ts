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
  products: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getProducts();
  }

  onSelect(product: Product): void {
    this.selectedProduct = product;
  }

  addPackageDeal(product: Product, toGet: number, toPay: number) {
    product.getBy = toGet;
    product.payFor = toPay;
  }

  add(name: string, price: number, category: string, stock: number): void {
    const product = new Product({
      name: name,
      price: price,
      category: category,
      stock: stock,
      salePercentage: 0,
      getBy: 1,
      payFor: 1,
    });
    this.productService.addProduct(product).subscribe(
      data => this.getProducts()
    );
  }

  private getProducts(): void {
    this.productService.getProducts().subscribe(
      data => this.products = data.products.map(product => new Product(product)),
      err => console.log(err)
    );
  }
  /* TODO: Look into edit product atm I think it just access the product in ProductService directly and updates that.
  This will be a problem when we get it connected to the database since we want it to update the database aswell */
}
