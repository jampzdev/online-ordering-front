import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-home',
  templateUrl: './card-home.component.html',
  styleUrls: ['./card-home.component.scss'],
})
export class CardHomeComponent implements OnInit {
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
  constructor() {}

  ngOnInit(): void {}
}
