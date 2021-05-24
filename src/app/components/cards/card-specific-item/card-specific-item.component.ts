import { Component, OnInit, Input } from '@angular/core';
import { BaseComponent } from 'src/app/base-component';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-card-specific-item',
  templateUrl: './card-specific-item.component.html',
  styleUrls: ['./card-specific-item.component.scss'],
})
export class CardSpecificItemComponent implements OnInit {
  @Input() itemInfo: any = {
    product_name: '',
    product_desc: '',
    sizes: [],
  };
  @Input() image: string = 'https://via.placeholder.com/315x190';
  @Input() title: string = 'Why We Exist';
  @Input() description: string =
    ' We’re committed to providing our customers with the best products and services to empower them to achieve anything.';
  @Input() data: any = [
    {
      key: '',
      product_name: '',
      product_desc: '',
      category_id: '',
      brand_id: '',
      brand_name: '',
      category_name: '',
      size_name: '',
      color_name: '',
      quantity: '',
      is_active: '',
    },
  ];

  colors_list: any = [];
  selected_size: any = [];
  total_price: any = [];
  selected_color: any = [];
  qty: any = '1';
  constructor() {}

  ngOnInit(): void {}

  setSize(data: any, i: any) {
    this.selected_size = data;
    this.colors_list = data.colors;
    this.selected_color = [];
    this.total_price = this.selected_size.price;
  }

  setColor(data: any) {
    console.log(data);
    this.selected_color = data;
    this.total_price =
      parseFloat(this.selected_size.price) +
      parseFloat(this.selected_color.add_price);
    this.total_price = this.total_price.toFixed(2);
  }

  addToCart() {
    if (this.qty == '') {
      Swal.fire('Oops', 'Please enter a quantity', 'warning');
    } else {
      var tmp_sel_size = {
        size: this.selected_size.size,
        price: this.selected_size.price,
      };
      let total_price = parseFloat(this.total_price) * parseFloat(this.qty);
      var tmp = {
        product_name: this.itemInfo.product_name,
        product_desc: this.itemInfo.product_desc,
        key: this.itemInfo.id,
        img: this.itemInfo.img,
        size: tmp_sel_size,
        color: this.selected_color,
        total_price: total_price.toFixed(2),
        quantity: this.qty,
      };
      BaseComponent.cart_data.push(tmp);

      Swal.fire('Success!', 'Item has been added to cart', 'success');
    }
  }
}
