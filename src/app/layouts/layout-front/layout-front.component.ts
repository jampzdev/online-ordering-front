import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/base-component';

@Component({
  selector: 'app-layout-front',
  templateUrl: './layout-front.component.html',
  styleUrls: ['./layout-front.component.scss'],
})
export class LayoutFrontComponent implements OnInit {
  color_theme = BaseComponent.color_theme;
  color_font_theme = BaseComponent.color_font_theme;
  title = '';

  constructor() {}

  ngOnInit(): void {}
}
