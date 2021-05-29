import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss'],
})
export class BrandsComponent implements OnInit {
  modalIsShow = false;
  brand_list: any = [];
  brand_name = '';
  brand_img: any = '';
  brand_key: any = '';
  constructor(private API: ApiService) {}

  ngOnInit(): void {
    this.getBrands();
  }

  toggleAdd() {
    if (this.modalIsShow == true) {
      this.modalIsShow = false;
    } else {
      this.modalIsShow = true;
    }
  }

  getBrands() {
    this.API.post('/brand/get').subscribe((data) => {
      console.log(data.devMessage);
      this.brand_list = data.devMessage;
    });
  }

  saveBrand() {
    if (this.brand_name == '') {
      Swal.fire('Oops', 'Please enter a brand name', 'warning');
      return;
    }

    this.API.post('/brand/save', {
      brand_name: this.brand_name,
    }).subscribe((data) => {
      this.cancel();
      this.getBrands();
      Swal.fire('Success!', 'New record has been saved.', 'success');
    });
  }

  updateBrand() {
    if (this.brand_name == '') {
      Swal.fire('Oops', 'Please enter a brand name', 'warning');
      return;
    }

    this.API.post('/brand/update', {
      key: this.brand_key,
      brand_name: this.brand_name,
    }).subscribe((data) => {
      this.cancel();
      this.getBrands();
      Swal.fire('Success!', 'Record has been updated', 'success');
    });
  }

  handleUpload(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.brand_img = reader.result;
    };
    reader.readAsDataURL(file);
  }

  toggleEdit(data: any) {
    if (this.modalIsShow == false) {
      this.toggleAdd();
    }
    this.brand_name = data.brand_name;
    this.brand_key = data.id;
  }

  cancel() {
    this.brand_name = '';
    this.brand_key = '';
    this.toggleAdd();
  }
}
