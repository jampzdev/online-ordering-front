import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.scss'],
})
export class ProductInfoComponent implements OnInit {
  constructor(private API: ApiService, private route: ActivatedRoute) {}
  key: any = '';
  item_info: any;

  ngOnInit(): void {
    this.getSpecificItem();
  }

  getSpecificItem() {
    this.key = this.route.snapshot.paramMap.get('key');

    this.API.post('/product/get-specific-product', {
      key: this.key,
    }).subscribe((data) => {
      this.item_info = data.devMessage;
    });
  }
}
