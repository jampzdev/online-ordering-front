import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  inventory_list = [];
  category_list = [];

  constructor(private API: ApiService) {}

  ngOnInit(): void {
    this.getInventory();
    this.getCategories();
  }

  getInventory() {
    this.API.post('/product/get-inventory').subscribe((data) => {
      this.inventory_list = data.devMessage;
    });
  }

  getCategories() {
    this.API.post('/category/get').subscribe((data) => {
      console.log(data.devMessage);
      this.category_list = data.devMessage;
    });
  }
}
