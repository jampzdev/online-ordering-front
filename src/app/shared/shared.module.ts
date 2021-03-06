import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CardBasicComponent } from 'src/app/components/cards/card-basic/card-basic.component';
import { CardCategoryMenuComponent } from 'src/app/components/cards/card-category-menu/card-category-menu.component';
import { CardSpecificItemComponent } from 'src/app/components/cards/card-specific-item/card-specific-item.component';
import { CardCarouselComponent } from 'src/app/components/cards/card-carousel/card-carousel.component';
import { CardCustomizeComponent } from 'src/app/components/cards/card-customize/card-customize.component';
import { CardHomeComponent } from 'src/app/components/cards/card-home/card-home.component';

import { CartComponent } from 'src/app/components/cart/cart/cart.component';

import { ModalBrandsComponent } from 'src/app/components/modals/modal-brands/modal-brands.component';
// component imports
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CardBasicComponent,
    ModalBrandsComponent,
    CardSpecificItemComponent,
    CartComponent,
    CardCategoryMenuComponent,
    CardCarouselComponent,
    CardCustomizeComponent,
    CardHomeComponent,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule],
  exports: [
    CardBasicComponent,
    ModalBrandsComponent,
    CardSpecificItemComponent,
    CartComponent,
    CardCategoryMenuComponent,
    CardCarouselComponent,
    CardCustomizeComponent,
    CardHomeComponent,
  ],
})
export class SharedModule {}
