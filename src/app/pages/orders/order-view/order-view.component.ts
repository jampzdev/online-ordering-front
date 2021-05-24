import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-order-view',
  templateUrl: './order-view.component.html',
  styleUrls: ['./order-view.component.scss'],
})
export class OrderViewComponent implements OnInit {
  constructor(private API: ApiService, private route: ActivatedRoute) {}
  key: any = '';
  order_detail: any = {};
  order_items_details: any = [];
  ngOnInit(): void {
    this.getSpecificOrder();
    this.getSpecificDetails();
  }

  getSpecificOrder() {
    this.key = this.route.snapshot.paramMap.get('key');

    this.API.post('/orders/get-specific', {
      key: this.key,
    }).subscribe((data) => {
      this.order_detail = data.devMessage;
    });
  }

  getSpecificDetails() {
    this.key = this.route.snapshot.paramMap.get('key');

    this.API.post('/orders/get-specific-details', {
      key: this.key,
    }).subscribe((data) => {
      this.order_items_details = data.devMessage;
    });
  }
}
