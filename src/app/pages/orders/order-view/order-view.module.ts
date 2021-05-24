import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { SharedModule } from 'src/app/shared/shared.module';
import { OrderViewComponent } from './order-view.component';

const ORDER_VIEW_ROUTES = [{ path: '', component: OrderViewComponent }];

@NgModule({
  declarations: [OrderViewComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild(ORDER_VIEW_ROUTES),
    BrowserModule,
  ],
})
export class OrderViewModule {}
