import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { OrdersComponent } from './orders.component';
import { OrderViewComponent } from './order-view/order-view.component';

const ORDERS_ROUTES = [
  { path: '', component: OrdersComponent },
  { path: ':key', component: OrderViewComponent },
];

@NgModule({
  declarations: [OrdersComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild(ORDERS_ROUTES),
  ],
})
export class OrdersModule {}
