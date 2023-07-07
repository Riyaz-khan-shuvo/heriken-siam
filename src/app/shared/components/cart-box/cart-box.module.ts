import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartBoxComponent } from './cart-box.component';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterModule } from '@angular/router';

@NgModule({
  declarations: [CartBoxComponent],
  imports: [CommonModule, MatIconModule, RouterModule],
  exports: [CartBoxComponent],
})
export class CartBoxModule {}
