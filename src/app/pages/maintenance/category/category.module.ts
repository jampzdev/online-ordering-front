import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

// Component imports

import { SharedModule } from 'src/app/shared/shared.module';
import { CategoryComponent } from './category.component';

const CATEGORY_ROUTES = [{ path: '', component: CategoryComponent }];

@NgModule({
  declarations: [CategoryComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild(CATEGORY_ROUTES),
  ],
})
export class CategoryModule {}
