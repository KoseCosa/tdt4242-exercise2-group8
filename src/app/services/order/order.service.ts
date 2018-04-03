import { Injectable } from '@angular/core';
import { Order } from '../../models/order.model';

import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable()
export class OrderService {

    constructor(private http: HttpClient) { }
    getOrders(): Observable<{ success: boolean, msg: string, orders: Object[] }> {
      /* TODO: Product Model in Server or Client should be refactored to match.
      This mapping can become heavy.*/
      return this.http.get<{ success: boolean, msg: string, orders: Object[] }>('/api/order');
    }

    addOrder(order: Order): Observable<{success: boolean, msg: string}> {
      return this.http.post<{success: boolean, msg: string}>('/api/order/',
        JSON.stringify(order),
        {
          headers: new HttpHeaders()
            .set('Content-Type', 'application/json')
        }
      );
    }

    updateOrder(order: Order): Observable<{success: boolean, msg: string}> {
      return this.http.put<{success: boolean, msg: string}>('/api/order/' + order.id,
        JSON.stringify(order),
        {
          headers: new HttpHeaders()
            .set('Content-Type', 'application/json')
        }
      );
    }
}
