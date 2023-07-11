import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './lazy-loading/product-card/product-card.component';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [ProductCardComponent],
  imports: [CommonModule, MaterialModule],
  exports: [ProductCardComponent],
})
export class SharedModule {}
