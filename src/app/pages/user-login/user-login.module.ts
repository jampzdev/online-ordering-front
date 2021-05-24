import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UserLoginComponent } from './user-login.component';

// Component imports

import { SharedModule } from 'src/app/shared/shared.module';

const USER_LOGIN__ROUTES = [{ path: '', component: UserLoginComponent }];

@NgModule({
  declarations: [UserLoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild(USER_LOGIN__ROUTES),
  ],
})
export class UserLoginModule {}
