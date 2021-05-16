import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

// Component imports

import { SharedModule } from 'src/app/shared/shared.module';
import { BrandsComponent } from './brands.component';

const BRAND_ROUTES = [{ path: '', component: BrandsComponent }];

@NgModule({
  declarations: [BrandsComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild(BRAND_ROUTES),
  ],
})
export class BrandsModule {}
