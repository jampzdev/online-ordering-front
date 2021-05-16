import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

// Component imports

import { SharedModule } from 'src/app/shared/shared.module';
import { ProductsComponent } from './products.component';

const CATEGORY_ROUTES = [{ path: '', component: ProductsComponent }];

@NgModule({
  declarations: [ProductsComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild(CATEGORY_ROUTES),
  ],
})
export class ProductsModule {}
