import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';
import { Router, ActivatedRoute } from '@angular/router';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss'],
})
export class UserLoginComponent implements OnInit {
  email = '';
  passhash = '';
  isRegister = false;
  fname = '';
  mname = '';
  lname = '';
  constructor(private API: ApiService, private router: Router) {}

  ngOnInit(): void {}

  auth() {
    if (this.email != '' && this.passhash != '') {
      this.API.post('/users/auth', {
        email: this.email,
        passhash: this.passhash,
      }).subscribe((data) => {
        if (data.devMessage.length != 0) {
          localStorage.setItem('user_info', JSON.stringify(data.devMessage[0]));
          this.router.navigate(['home']);
        } else {
          Swal.fire('Oops', 'Invalid email/password', 'warning');
        }
      });
    } else {
      Swal.fire('Oops', 'Required Field(s) Missing!', 'warning');
    }
  }

  toggleRegister() {
    if (this.isRegister == false) {
      this.isRegister = true;
    } else {
      this.isRegister = false;
    }
  }

  register() {
    if (
      this.email == '' ||
      this.fname == '' ||
      this.mname == '' ||
      this.lname == ''
    ) {
      Swal.fire('Oops', 'Required filed(s) missing!', 'warning');
    } else {
      this.API.post('/users/register', {
        email: this.email,
        fname: this.fname,
        mname: this.mname,
        lname: this.lname,
      }).subscribe((data) => {
        if (data.devMessage.length != 0) {
          Swal.fire(
            'Success!',
            'Your temporary password has been sent to your email',
            'success'
          );
          this.toggleRegister();
        }
      });
    }
  }
}
