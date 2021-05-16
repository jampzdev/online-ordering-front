import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  modalIsShow = 'ADD';
  category_list: any = [];
  category_name = '';
  constructor(private API: ApiService) {}

  ngOnInit(): void {
    this.getCategories();
  }

  toggleAdd() {
    if (this.modalIsShow == 'ADD') {
      this.modalIsShow = 'CANCEL';
    } else {
      this.modalIsShow = 'ADD';
    }
  }

  getCategories() {
    this.API.post('/category/get').subscribe((data) => {
      console.log(data.devMessage);
      this.category_list = data.devMessage;
    });
  }

  saveCategory() {
    this.API.post('/category/save', {
      category_name: this.category_name,
    }).subscribe((data) => {
      this.category_name = '';
      this.getCategories();
      this.toggleAdd();
      Swal.fire('Success!', 'New record has been saved.', 'success');
    });
  }
}
