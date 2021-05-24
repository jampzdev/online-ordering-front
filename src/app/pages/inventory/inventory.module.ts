import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

// Component imports

import { SharedModule } from 'src/app/shared/shared.module';
import { InventoryComponent } from './inventory.component';

const INVENTORY_ROUTES = [{ path: '', component: InventoryComponent }];

@NgModule({
  declarations: [InventoryComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild(INVENTORY_ROUTES),
  ],
})
export class InventoryModule {}
