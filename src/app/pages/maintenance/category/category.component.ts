import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  modalIsShow = false;
  category_list: any = [];
  category_name = '';
  category_img: any = '';
  category_key: any = '';
  is_new_img: any = '';
  constructor(private API: ApiService) {}

  ngOnInit(): void {
    this.getCategories();
  }

  toggleAdd() {
    if (this.modalIsShow == true) {
      this.modalIsShow = false;
    } else {
      this.modalIsShow = true;
    }
  }

  toggleEdit(data: any) {
    if (this.modalIsShow == false) {
      this.toggleAdd();
    }
    this.category_name = data.category_name;
    this.category_key = data.id;
    this.category_img = data.img;
  }

  getCategories() {
    this.API.post('/category/get').subscribe((data) => {
      console.log(data.devMessage);
      this.category_list = data.devMessage;
    });
  }

  saveCategory() {
    if (this.category_img == '') {
      Swal.fire('Oops', 'Please select a image', 'warning');
    } else {
      this.API.post('/upload/save', {
        base64image: this.category_img,
      }).subscribe((dataUpld) => {
        this.API.post('/category/save', {
          category_name: this.category_name,
          img: dataUpld.devMessage,
        }).subscribe((data) => {
          this.category_name = '';
          this.category_img = '';
          this.getCategories();
          this.toggleAdd();
          Swal.fire('Success!', 'New record has been saved.', 'success');
        });
      });
    }
  }

  handleUpload(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.category_img = reader.result;
    };
    reader.readAsDataURL(file);
  }

  updateCategory() {
    let isUploaded = this.isBase64(this.category_img);
    if (isUploaded == true) {
      this.API.post('/upload/save', {
        base64image: this.category_img,
      }).subscribe((dataUpld) => {
        this.API.post('/category/update', {
          key: this.category_key,
          category_name: this.category_name,
          img: dataUpld.devMessage,
        }).subscribe((data) => {
          this.getCategories();
          this.cancel();
          Swal.fire('Success!', 'Record has been updated.', 'success');
        });
      });
    } else {
      this.API.post('/category/update', {
        key: this.category_key,
        category_name: this.category_name,
        img: this.category_img,
      }).subscribe((data) => {
        this.getCategories();
        this.cancel();
        Swal.fire('Success!', 'Record has been updated.', 'success');
      });
    }
  }

  cancel() {
    this.category_name = '';
    this.category_key = '';
    this.category_img = '';
    this.toggleAdd();
  }

  isBase64(str: any) {
    var matches = str.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);

    if (matches == null) {
      return false;
    } else {
      if (matches.length !== 3) {
        return false;
      }
    }

    return true;
  }
}
