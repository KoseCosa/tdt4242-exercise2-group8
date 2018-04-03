import { Component, OnInit } from '@angular/core';
// Import services
import { OrderService } from '../../services/order/order.service';
// Import Models
import { Order } from '../../models/order.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  orders = [];

  constructor(private orderService: OrderService) {
    this.getOrders();
  }

  ngOnInit() {
  }

  private getOrders() {
    this.orderService.getOrders().subscribe(
      data => this.orders = data.orders.map(function(order: {_id: string, user: string, status: string, products: [string, number][]}) {
        const newOrder = new Order();
        newOrder.id = order._id;
        newOrder.customer = order.user;
        newOrder.products = order.products;
        newOrder.status = order.status;
        return newOrder;
      }),
      err => console.log(err)
    );
  }
}
