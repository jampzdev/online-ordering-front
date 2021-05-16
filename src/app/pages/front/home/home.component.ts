import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  inventory_list = [];
  constructor(private API: ApiService) {}

  ngOnInit(): void {
    this.getInventory();
  }

  getInventory() {
    this.API.post('/product/get-inventory').subscribe((data) => {
      this.inventory_list = data.devMessage;
    });
  }
}
