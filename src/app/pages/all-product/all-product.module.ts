import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import { AllProductRoutingModule } from './all-product-routing.module';
import { AllProductComponent } from './all-product.component';


@NgModule({
  declarations: [
    AllProductComponent
  ],
  imports: [
    CommonModule,
    AllProductRoutingModule,
    MaterialModule
  ]
})
export class AllProductModule { }
