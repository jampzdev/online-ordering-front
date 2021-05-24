import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss'],
})
export class InventoryComponent implements OnInit {
  inventory_list: any = [];
  constructor(private API: ApiService) {}

  ngOnInit(): void {
    this.getInventory();
  }

  getInventory() {
    this.API.post('/inventory/get').subscribe((data) => {
      console.log(data.devMessage);
      this.inventory_list = data.devMessage;
    });
  }
}
