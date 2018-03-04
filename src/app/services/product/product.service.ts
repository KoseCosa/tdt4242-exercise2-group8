import { Injectable } from '@angular/core';
import { Product } from '../../models/product';
import { PackageDeal } from '../../models/product';
import { ProductFilterPipe } from '../../models/product-filter.pipe';
@Injectable()
export class ProductService {
  productCounter = 4;
  products: Product[] = [
    {id: 0, name: 'Bread', price: 2.90, category: 'Baking Goods', stock: 20, salePercentage: 0, packageDeal: null},
    {id: 1, name: 'Apple', price: 0.90, category: 'Fruit', stock: 20, salePercentage: 0, packageDeal: null},
    {id: 2, name: 'Carrot', price: 0.90, category: 'Vegetables', stock: 20, salePercentage: 0, packageDeal: null},
    {id: 3, name: 'Chocolate', price: 1.90, category: 'Candy', stock: 20, salePercentage: 0, packageDeal: null},
    {id: 4, name: 'Beef', price: 1.90, category: 'Meat', stock: 20, salePercentage: 0, packageDeal: null}

  ];

  getProducts() {
    return this.products;
  }
  getProduct(id) {
    // TODO: This should be upgraded to strict compare when ID is a string from MongoDB
    return this.products.find(product => product.id == id);
  }

  addProduct(
    name = 'Unknown Product',
    price = 99.90,
    category = 'Unknown Category',
    stock = 0,
    salePercentage = 0,
    packageDeal = null
  ) {
    this.productCounter += 1;
    const newProduct: Product = {
      id: this.productCounter,
      name: name,
      price: price,
      category: category,
      stock: stock,
      salePercentage: salePercentage,
      packageDeal: packageDeal
    };
    this.products = [].concat(this.products, newProduct);
  }
}
