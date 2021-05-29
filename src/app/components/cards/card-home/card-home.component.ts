import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-home',
  templateUrl: './card-home.component.html',
  styleUrls: ['./card-home.component.scss'],
})
export class CardHomeComponent implements OnInit {
  @Input() image: string = 'https://via.placeholder.com/315x190';
  @Input() title: string = 'Title';
  @Input() value: string = '0';
  @Input() background_color: string = 'white';
  @Input() font_color: string = 'black';

  constructor() {}

  ngOnInit(): void {}
}
