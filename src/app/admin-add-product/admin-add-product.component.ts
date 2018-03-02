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

  add(newProduct: Product) : void {
    this.products.push(newProduct);
  }

  products: Product[] = [
      { id: 11, name: 'Apple', stock: 10, category: 'fruit' },
      { id: 12, name: 'Banana', stock: 20 },
      { id: 13, name: 'Pear', stock: 30 },
      { id: 14, name: 'Mango', stock: 40 },
      { id: 15, name: 'Passion fruit', stock: 50 },
      { id: 16, name: 'Grapefruit', stock: 0 },
      { id: 17, name: 'Orange', stock: 1 },
      { id: 18, name: 'Pineapple', stock: 2 },
      { id: 19, name: 'Plum', stock: 3 },
      { id: 20, name: 'Strawberry', stock: 4 },
  ];
}
