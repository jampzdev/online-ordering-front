import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/base-component';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-layout-standard',
  templateUrl: './layout-standard.component.html',
  styleUrls: ['./layout-standard.component.scss'],
})
export class LayoutStandardComponent implements OnInit {
  color_theme = BaseComponent.color_theme;
  color_font_theme = BaseComponent.color_font_theme;
  user_logged_in: any = JSON.parse(BaseComponent.getLoggedUser());

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
    {
      label: 'Inventory',
      link: 'inventory',
    },
    {
      label: 'Orders',
      link: 'orders',
    },
  ];

  showFiller = false;
  title = 'Admin';

  constructor(private router: Router) {}

  ngOnInit(): void {}

  logout() {
    if (localStorage.getItem('user_info') !== null) {
      localStorage.removeItem('user_info');
      this.router.navigate(['home']);
    }
  }
}
