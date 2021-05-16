import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/base-component';
@Component({
  selector: 'app-layout-standard',
  templateUrl: './layout-standard.component.html',
  styleUrls: ['./layout-standard.component.scss'],
})
export class LayoutStandardComponent implements OnInit {
  color_theme = BaseComponent.color_theme;
  color_font_theme = BaseComponent.color_font_theme;
  sidebar: any = [
    {
      label: 'Home',
      link: 'home',
    },
    {
      label: 'Maintenance',
      link: '',
      submenu: [
        {
          label: 'Brands',
          link: 'brands',
        },
        {
          label: 'Categories',
          link: 'category',
        },
        {
          label: 'Product',
          link: 'products',
        },
      ],
    },
  ];

  showFiller = false;
  title = 'Admin';

  constructor() {}

  ngOnInit(): void {}
}
