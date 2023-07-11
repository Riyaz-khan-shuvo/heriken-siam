import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductDetailsRoutingModule } from './product-details-routing.module';
import { ProductDetailsComponent } from './product-details.component';
import { MaterialModule } from 'src/app/shared/material.module';

@NgModule({
  declarations: [ProductDetailsComponent],
  imports: [CommonModule, ProductDetailsRoutingModule, MaterialModule],
})
export class ProductDetailsModule {}
