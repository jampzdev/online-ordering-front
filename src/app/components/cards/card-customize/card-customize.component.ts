import { Component, OnInit, Input } from '@angular/core';
import { BaseComponent } from 'src/app/base-component';

@Component({
  selector: 'app-card-customize',
  templateUrl: './card-customize.component.html',
  styleUrls: ['./card-customize.component.scss'],
})
export class CardCustomizeComponent implements OnInit {
  @Input() options: any = [];
  @Input() title: any = 'Title';

  selected: any = '';
  img: any = '';
  price: any = '0.00';

  constructor() {}

  ngOnInit(): void {}

  selectedChange() {
    this.img = this.options[this.selected].img;
    this.price = this.options[this.selected].price;
    this.price = parseFloat(this.price).toFixed(2);

    if (this.title == 'Wheels') {
      BaseComponent.design_bike.wheels = this.img;
    } else if (this.title == 'Frames') {
      BaseComponent.design_bike.frame = this.img;
    } else if (this.title == 'Seats') {
      BaseComponent.design_bike.seat = this.img;
    } else if (this.title == 'Sprockets') {
      BaseComponent.design_bike.sprocket = this.img;
    } else if (this.title == 'Forks') {
      BaseComponent.design_bike.fork = this.img;
    }
  }
}
