import { Pipe, PipeTransform } from '@angular/core';

import { Product } from './product';

@Pipe({
    name: 'productfilter',
    pure: false
})
export class ProductFilterPipe implements PipeTransform {
  transform(items: Product[], filter: Product): Product[] {
    if (!items || !filter) {
      return items;
    }
    // filter items array, items which match and return true will be kept, false will be filtered out
    return items.filter((item: Product) => this.applyFilter(item, filter));
  }
  
  /**
   * Perform the filtering.
   * 
   * @param {Product} product The product to compare to the filter.
   * @param {Product} filter The filter to apply.
   * @return {boolean} True if product satisfies filters, false if not.
   */
  applyFilter(product: Product, filter: Product): boolean {
    for (let field in filter) {
      if (filter[field]) {
        if (typeof filter[field] === 'string') {
          if (product[field].toLowerCase().indexOf(filter[field].toLowerCase()) === -1) {
            return false;
          }
        } else if (typeof filter[field] === 'number') {
          if (product[field] !== filter[field]) {
            return false;
          }
        }
      }
    }
    return true;
  }
}