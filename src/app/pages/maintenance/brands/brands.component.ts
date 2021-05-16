import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss'],
})
export class BrandsComponent implements OnInit {
  modalIsShow = 'ADD';
  brand_list: any = [];
  brand_name = '';
  constructor(private API: ApiService) {}

  ngOnInit(): void {
    this.getBrands();
  }

  toggleAdd() {
    if (this.modalIsShow == 'ADD') {
      this.modalIsShow = 'CANCEL';
    } else {
      this.modalIsShow = 'ADD';
    }
  }

  getBrands() {
    this.API.post('/brand/get').subscribe((data) => {
      console.log(data.devMessage);
      this.brand_list = data.devMessage;
    });
  }

  saveBrand() {
    this.API.post('/brand/save', {
      brand_name: this.brand_name,
    }).subscribe((data) => {
      this.brand_name = '';
      this.toggleAdd();
      this.getBrands();
      Swal.fire('Success!', 'New record has been saved.', 'success');
    });
  }
}
