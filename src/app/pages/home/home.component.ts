import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  pending_order: any = '0';
  inventory_count: any = '0';
  users_count: any = '0';
  product_count: any = '0';

  constructor(private API: ApiService) {}

  ngOnInit(): void {
    this.getPendingOrders();
    this.getInventoryWithNoStocks();
    this.getNumberOfUsers();
    this.getProductsCount();
  }

  getPendingOrders() {
    this.API.post('/orders/get-table-count', {
      table_name: 'orders_tbl',
      field_name: 'order_status',
      value: 'Pending',
      has_condition: '1',
    }).subscribe((data) => {
      this.pending_order = data.devMessage;
    });
  }

  getInventoryWithNoStocks() {
    this.API.post('/orders/get-table-count', {
      table_name: 'inventory_tbl',
      field_name: 'quantity',
      value: '0',
      has_condition: '1',
    }).subscribe((data) => {
      this.inventory_count = data.devMessage;
    });
  }

  getNumberOfUsers() {
    this.API.post('/orders/get-table-count', {
      table_name: 'users_tbl',
      field_name: 'quantity',
      value: '0',
      has_condition: '0',
    }).subscribe((data) => {
      this.users_count = data.devMessage;
    });
  }

  getProductsCount() {
    this.API.post('/orders/get-table-count', {
      table_name: 'inventory_tbl',
      field_name: 'quantity',
      value: '0',
      has_condition: '0',
    }).subscribe((data) => {
      this.product_count = data.devMessage;
    });
  }
}
