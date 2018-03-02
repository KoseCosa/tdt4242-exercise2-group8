import { Injectable } from '@angular/core';
import { Product } from '../../models/product';

@Injectable()
export class ProductService {
  productCounter = 0;
  products: Product[] = [];

  getProducts() {
    return this.products;
  }
  getProduct(id) {
    return this.products.find(product => product.id === id);
  }

  addProduct() {
    this.productCounter += 1;
    const newProduct: Product = {
      id: this.productCounter,
      name: 'Name',
      price: 9.90,
      category: 'Category',
      stock: 10,
      salePercentage: 0,
      packageDeal: null
    };
    this.products = [].concat(this.products, newProduct);
  }
}
