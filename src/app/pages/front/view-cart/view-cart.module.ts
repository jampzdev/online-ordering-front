import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ViewCartComponent } from './view-cart.component';

// Component imports

import { SharedModule } from 'src/app/shared/shared.module';

const VIEW_CART_ROUTES = [{ path: '', component: ViewCartComponent }];

@NgModule({
  declarations: [ViewCartComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild(VIEW_CART_ROUTES),
  ],
})
export class ViewCartModule {}
