import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './lazy-loading/product-card/product-card.component';
import { MaterialModule } from './material.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ProductCardComponent],
  imports: [CommonModule, RouterModule, MaterialModule],
  exports: [ProductCardComponent],
})
export class SharedModule {}
