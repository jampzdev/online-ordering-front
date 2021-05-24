import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/base-component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  cart_data = BaseComponent.cart_data;
  constructor() {}

  ngOnInit(): void {}
}
