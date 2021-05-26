import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-card-carousel',
  templateUrl: './card-carousel.component.html',
  styleUrls: ['./card-carousel.component.scss'],
})
export class CardCarouselComponent implements OnInit {
  constructor(private API: ApiService) {}
  inventory_list: any = [];

  ngOnInit(): void {
    this.getInventory();
  }

  getInventory() {
    this.API.post('/product/get-inventory').subscribe((data) => {
      this.inventory_list = data.devMessage;
    });
  }
}
