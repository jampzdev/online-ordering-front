import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss'],
})
export class InventoryComponent implements OnInit {
  inventory_list: any = [];
  edit_quantity: any = '';
  edit_info: any = '';
  modalIsShow = false;
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

  toggleForm() {
    if (this.modalIsShow == true) {
      this.modalIsShow = false;
    } else {
      this.modalIsShow = true;
    }
  }

  toggleTxt(data: any) {
    if (this.modalIsShow == false) {
      this.toggleForm();
    }

    this.edit_quantity = data.quantity;
    this.edit_info = data;
  }

  updateInventory() {
    if (this.edit_quantity == '') {
      Swal.fire('Oops', 'Please enter a quantity', 'warning');
    } else {
      this.API.post('/inventory/update', {
        inventory_id: this.edit_info.inventory_id,
        quantity: parseInt(this.edit_quantity),
      }).subscribe((data) => {
        this.toggleForm();
        Swal.fire('Success!', 'Record has been updated', 'success');
        this.getInventory();
      });
    }
  }
}
