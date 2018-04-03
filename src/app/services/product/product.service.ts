import { Injectable } from '@angular/core';
import { Product } from '../../models/product.model';

import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ProductFilterPipe } from '../../models/product-filter.pipe';
@Injectable()
export class ProductService {

  constructor(private http: HttpClient) { }
  getProducts(): Observable<{ success: boolean, msg: string, products: Object[] }> {
    /* TODO: Product Model in Server or Client should be refactored to match.
    This mapping can become heavy.*/
    return this.http.get<{ success: boolean, msg: string, products: Object[] }>('/api/product');
  }

  getProduct(id: string): Observable<{success: boolean, msg: string, product: Object}> {
    /* TODO: Product Model in Server or Client should be refactored to match.
    This mapping can become heavy.*/
    return this.http.get<{success: boolean, msg: string, product: Object}>('/api/product/' + id);
  }

  addProduct(product: Product): Observable<{success: boolean, msg: string}> {
    return this.http.post<{success: boolean, msg: string}>('/api/product/',
      JSON.stringify(product),
      {
        headers: new HttpHeaders()
          .set('Content-Type', 'application/json')
      }
    );
  }

  editProduct(product: Product): Observable<{success: boolean, msg: string}> {
    return this.http.put<{success: boolean, msg: string}>('/api/product/' + product.id,
      JSON.stringify(product),
      {
        headers: new HttpHeaders()
          .set('Content-Type', 'application/json')
      }
    );
  }
}
