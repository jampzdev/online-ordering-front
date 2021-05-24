import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/base-component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-layout-front',
  templateUrl: './layout-front.component.html',
  styleUrls: ['./layout-front.component.scss'],
})
export class LayoutFrontComponent implements OnInit {
  color_theme = BaseComponent.color_theme;
  color_font_theme = BaseComponent.color_font_theme;
  title = '';
  user_logged_in: any;
  constructor(private router: Router) {}

  ngOnInit(): void {
    let tmp = BaseComponent.getLoggedUser();
    if (tmp != '') {
      this.user_logged_in = JSON.parse(tmp);
    } else {
      this.user_logged_in = '';
    }
  }

  logout() {
    if (localStorage.getItem('user_info') !== null) {
      localStorage.removeItem('user_info');
      window.location.reload();
    }
  }
}
