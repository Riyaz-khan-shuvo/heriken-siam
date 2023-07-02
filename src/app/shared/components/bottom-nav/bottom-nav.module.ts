import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { BottomNavComponent } from './bottom-nav.component';
import { RouterLink, RouterModule } from '@angular/router';

@NgModule({
  declarations: [BottomNavComponent],
  imports: [CommonModule, MatIconModule, RouterModule],
  exports: [BottomNavComponent],
})
export class BottomNavModule {}
