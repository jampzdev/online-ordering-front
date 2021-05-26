import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { OrdersComponent } from './orders.component';

const ORDERS_ROUTES = [
  { path: '', component: OrdersComponent },
  {
    path: ':key',
    loadChildren: () =>
      import(`./order-view/order-view.module`).then((m) => m.OrderViewModule),
  },
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
