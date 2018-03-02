import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-add-product',
  templateUrl: './admin-add-product.component.html',
  styleUrls: ['./admin-add-product.component.css']
})
export class AdminAddProductComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  selectedProduct: Object;

  onSelect(product: Object): void {
    this.selectedProduct = product;
  }

  add(productName: String, productAmount: Int) : void {
    this.products.push({
      id:this.products.length+1,
      name:productName,
      amount: productAmount});
  }

  products: Object[] = [
      { id: 11, name: 'Apple', amount: 10 },
      { id: 12, name: 'Banana', amount: 20 },
      { id: 13, name: 'Pear', amount: 30 },
      { id: 14, name: 'Mango', amount: 40 },
      { id: 15, name: 'Passion fruit', amount: 50 },
      { id: 16, name: 'Grapefruit', amount: 0 },
      { id: 17, name: 'Orange', amount: 1 },
      { id: 18, name: 'Pineapple', amount: 2 },
      { id: 19, name: 'Plum', amount: 3 },
      { id: 20, name: 'Strawberry', amount: 4 },
  ];
}
