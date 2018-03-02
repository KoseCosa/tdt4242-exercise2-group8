import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-admin-add-product',
  templateUrl: './admin-add-product.component.html',
  styleUrls: ['./admin-add-product.component.css']
})
export class AdminAddProductComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  selectedProduct: Product;

  onSelect(product: Product): void {
    this.selectedProduct = product;
  }

  add(productName: string) : void {
    let newProduct = new Product();
    newProduct.name = productName;
    newProduct.stock = 10;
    this.products.push(newProduct);
  }

  products: Product[] = [
      // { name: 'Apple', stock: 10, category: 'fruit' },
      // { name: 'Banana', stock: 20 },
      // { name: 'Pear', stock: 30 },
      // { name: 'Mango', stock: 40 },
      // { name: 'Passion fruit', stock: 50 },
      // { name: 'Grapefruit', stock: 0 },
      // { name: 'Orange', stock: 1 },
      // { name: 'Pineapple', stock: 2 },
      // { name: 'Plum', stock: 3 },
      // { name: 'Strawberry', stock: 4 },
  ];
}
