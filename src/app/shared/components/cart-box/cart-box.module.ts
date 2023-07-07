import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartBoxComponent } from './cart-box.component';
import { MaterialModule } from '../../modules/material/material.module';
import { RouterLink, RouterModule } from '@angular/router';

@NgModule({
  declarations: [CartBoxComponent],
  imports: [CommonModule, MaterialModule, RouterModule],
  exports: [CartBoxComponent],
})
export class CartBoxModule {}
