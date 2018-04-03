import { Component, OnInit } from '@angular/core';
// Import services
import { OrderService } from '../../services/order/order.service';
// Import Models
import { Order } from '../../models/order.model';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.css']
})
export class AdminOrdersComponent implements OnInit {
  orders = [];
  categories = [
    'Processing',
    'Shipped',
    'Recieved'
  ];

  constructor(private orderService: OrderService) {
    this.getOrders();
  }

  ngOnInit() {
  }

  private getOrders() {
    this.orderService.getOrders().subscribe(
      data => this.orders = data.orders.map(function(order: {_id: string, user: string, status: string}) {
        const newOrder = new Order();
        newOrder.id = order._id;
        newOrder.customer = order.user;
        newOrder.status = order.status;
        return newOrder;
      }),
      err => console.log(err)
    );
  }

  updateOrder(order) {
    this.orderService.updateOrder(order).subscribe(
      data => this.getOrders()
    );
  }
}
