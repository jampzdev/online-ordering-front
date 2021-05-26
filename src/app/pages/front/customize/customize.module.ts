import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CustomizeComponent } from './customize.component';

// Component imports

import { SharedModule } from 'src/app/shared/shared.module';

const CUSTOMIZE_ROUTES = [{ path: '', component: CustomizeComponent }];

@NgModule({
  declarations: [CustomizeComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild(CUSTOMIZE_ROUTES),
  ],
})
export class CustomizeModule {}
