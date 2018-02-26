import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { PRODUCTS } from '../mock-products';

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

  add(productName: String) : void {
    this.products.push({id:this.products.length+1,name:productName});
  }

  products: Product[] = [
    { id: 1, name: 'Product1' },
    { id: 2, name: 'Product2' },
    { id: 3, name: 'Product3' },
    { id: 4, name: 'Product4' },
    { id: 5, name: 'Product5' },
    { id: 6, name: 'Product6' },
  ];
}
