import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/base-component';
import { ApiService } from 'src/app/shared/services/api.service';
import { Router, ActivatedRoute } from '@angular/router';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrls: ['./view-cart.component.scss'],
})
export class ViewCartComponent implements OnInit {
  cart_items: any = BaseComponent.cart_data;
  grand_total = '';
  payment_method = 'COD';
  user_logged_in: any = BaseComponent.getLoggedUser();

  constructor(private API: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.getGrandTotal(this.cart_items);
    // if (this.user_logged_in == '') {
    //   Swal.fire({
    //     title: 'Please login first to proceed',
    //     confirmButtonText: `Log me in`,
    //     icon: 'warning',
    //   }).then((result) => {
    //     if (result.isConfirmed) {
    //       this.router.navigate(['user-login']);
    //     }
    //   });
    // }
  }

  getGrandTotal(data: any) {
    let tmp: any = 0;
    for (let i = 0; i < data.length; i++) {
      tmp = parseFloat(tmp) + parseFloat(data[i].total_price);
      tmp = tmp.toFixed(2);
    }
    this.grand_total = tmp;
  }

  submitOrders() {
    if (this.user_logged_in == '') {
      Swal.fire({
        title: 'Please login first to proceed',
        confirmButtonText: `Log me in`,
        icon: 'warning',
      }).then((result) => {
        if (result.isConfirmed) {
          this.router.navigate(['user-login']);
        }
      });
    } else {
      if (this.cart_items.length == 0) {
        Swal.fire('Oops', 'Please add some items on cart', 'warning');
      } else {
        let uInfo = JSON.parse(this.user_logged_in);
        this.API.post('/orders/save', {
          payment_method: this.payment_method,
          user_id: uInfo,
          grand_total: this.grand_total,
          products: this.cart_items,
        }).subscribe((data) => {
          if (data.statusCode == 200) {
            Swal.fire({
              title: 'Order has been placed',
              confirmButtonText: `Back to home`,
              icon: 'success',
            }).then((result) => {
              if (result.isConfirmed) {
                BaseComponent.cart_data = [];
                this.router.navigate(['home']);
              }
            });
          }
        });
      }
    }
  }

  back() {
    window.history.back();
  }

  removeToCart(i: any) {
    Swal.fire({
      title: 'Are you sure you want to remove this from cart?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: `Yes`,
    }).then((result) => {
      if (result.isConfirmed) {
        BaseComponent.cart_data.splice(i, 1);
        this.cart_items = BaseComponent.cart_data;
        this.getGrandTotal(this.cart_items);
      }
    });
  }
}
