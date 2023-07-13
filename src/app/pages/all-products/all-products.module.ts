import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { AllProductsRoutingModule } from './all-products-routing.module';
import { AllProductsComponent } from './all-products.component';

@NgModule({
  declarations: [AllProductsComponent],
  imports: [CommonModule, AllProductsRoutingModule, MatIconModule],
})
export class AllProductsModule {}
