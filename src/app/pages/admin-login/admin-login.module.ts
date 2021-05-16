import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AdminLoginComponent } from './admin-login.component';

// Component imports

import { SharedModule } from 'src/app/shared/shared.module';

const ADMIN_LOGIN__ROUTES = [{ path: '', component: AdminLoginComponent }];

@NgModule({
  declarations: [AdminLoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild(ADMIN_LOGIN__ROUTES),
  ],
})
export class AdminLoginModule {}
