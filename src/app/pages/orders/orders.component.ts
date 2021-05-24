import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {
  orders_list: any = [];

  constructor(private API: ApiService) {}

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders() {
    this.API.post('/orders/get').subscribe((data) => {
      console.log(data.devMessage);
      this.orders_list = data.devMessage;
    });
  }
}
