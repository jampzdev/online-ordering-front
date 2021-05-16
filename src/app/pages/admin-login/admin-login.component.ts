import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';
import { Router, ActivatedRoute } from '@angular/router';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss'],
})
export class AdminLoginComponent implements OnInit {
  email = '';
  passhash = '';
  constructor(private API: ApiService, private router: Router) {}

  ngOnInit(): void {}

  auth() {
    if (this.email != '' && this.passhash != '') {
      this.API.post('/admin/auth', {
        email: this.email,
        passhash: this.passhash,
      }).subscribe((data) => {
        if (data.devMessage.length != 0) {
          localStorage.setItem('user_info', JSON.stringify(data.devMessage[0]));
          this.router.navigate(['admin/home']);
        } else {
          Swal.fire('Oops', 'Invalid email/password', 'warning');
        }
      });
    } else {
      Swal.fire('Oops', 'Required Field(s) Missing!', 'warning');
    }
  }
}
