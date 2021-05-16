import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CardBasicComponent } from 'src/app/components/cards/card-basic/card-basic.component';
import { CardSpecificItemComponent } from 'src/app/components/cards/card-specific-item/card-specific-item.component';

import { ModalBrandsComponent } from 'src/app/components/modals/modal-brands/modal-brands.component';
// component imports
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CardBasicComponent,
    ModalBrandsComponent,
    CardSpecificItemComponent,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule],
  exports: [
    CardBasicComponent,
    ModalBrandsComponent,
    CardSpecificItemComponent,
  ],
})
export class SharedModule {}
