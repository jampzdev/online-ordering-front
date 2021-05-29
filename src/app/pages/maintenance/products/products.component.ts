import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';
import Swal from 'sweetalert2';
import * as $ from 'jquery';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  modalIsShow = false;
  category_list: any = [];
  brand_list: any = [];
  varieties_list: any = [];

  new_sizes: any = [];
  new_colors: any = [];

  new_size_name = '';
  new_size_price = '0.00';

  new_color_size = '';
  new_color_name = '';
  new_color_add_price = '';

  newSizeIsShow = false;
  newColorIsShow = false;

  product_name = '';
  product_desc = '';
  brand_name = '';
  category_name = '';
  product_main_img: any = '';
  product_list: any = [];

  constructor(private API: ApiService) {}

  ngOnInit(): void {
    this.getCategories();
    this.getBrands();
    this.getProducts();
    // this.getVarieties();
  }

  toggleAdd() {
    if (this.modalIsShow == true) {
      this.modalIsShow = false;
    } else {
      this.modalIsShow = true;
    }
  }

  getCategories() {
    this.API.post('/category/get').subscribe((data) => {
      console.log(data.devMessage);
      this.category_list = data.devMessage;
    });
  }

  getBrands() {
    this.API.post('/brand/get').subscribe((data) => {
      console.log(data.devMessage);
      this.brand_list = data.devMessage;
    });
  }

  getProducts() {
    this.API.post('/product/get').subscribe((data) => {
      console.log(data.devMessage);
      this.product_list = data.devMessage;
    });
  }

  getVarieties() {
    this.API.post('/varieties/get').subscribe((data) => {
      console.log(data.devMessage);
      this.varieties_list = data.devMessage;
    });
  }

  saveProduct() {
    if (this.product_main_img == '') {
      Swal.fire('Oops', 'Please select a image', 'warning');
    } else {
      this.API.post('/upload/save', {
        base64image: this.product_main_img,
      }).subscribe((dataUpld) => {
        this.API.post('/product/save', {
          category_id: this.category_name,
          product_name: this.product_name,
          product_desc: this.product_desc,
          size: this.new_sizes,
          colors: this.new_colors,
          brand_id: this.brand_name,
          img: dataUpld.devMessage,
        }).subscribe((data) => {
          this.getProducts();
          this.toggleAdd();
          Swal.fire('Success!', 'New record has been saved.', 'success');
        });
      });
    }
  }

  toggleAddColor() {
    this.newColorIsShow = this.newColorIsShow == true ? false : true;
  }

  toggleNewSize() {
    this.newSizeIsShow = this.newSizeIsShow == true ? false : true;
  }

  newVarietyChange(data: any) {}

  addSize() {
    let newSize = this.new_size_name;
    let price = this.new_size_price;

    var tmp = {
      size: newSize,
      price: price,
    };

    this.new_sizes.push(tmp);
    this.new_size_name = '';
    this.new_size_price = '';
    this.toggleNewSize();
  }

  addColor() {
    let newSize = this.new_color_size;
    let color = this.new_color_name;
    let price = this.new_color_add_price;

    var tmp = {
      size: newSize,
      color: color,
      price: price,
    };

    this.new_colors.push(tmp);
    this.new_color_size = '';
    this.new_color_name = '';
    this.new_color_add_price = '';

    this.toggleAddColor();
  }

  handleUpload(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.product_main_img = reader.result;
    };
    reader.readAsDataURL(file);
  }

  cancel() {
    this.product_name = '';
    this.product_desc = '';
    this.brand_name = '';
    this.category_name = '';
    this.toggleAdd();
  }
}
