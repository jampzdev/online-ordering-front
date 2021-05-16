import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProductInfoComponent } from './product-info.component';

// Component imports

import { SharedModule } from 'src/app/shared/shared.module';

const prodInfo_ROUTES = [{ path: '', component: ProductInfoComponent }];

@NgModule({
  declarations: [ProductInfoComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild(prodInfo_ROUTES),
  ],
})
export class ProductInfoModule {}
