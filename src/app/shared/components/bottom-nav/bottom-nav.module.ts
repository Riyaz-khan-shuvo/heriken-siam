import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../modules/material/material.module';
import { BottomNavComponent } from './bottom-nav.component';
import { RouterLink, RouterModule } from '@angular/router';

@NgModule({
  declarations: [BottomNavComponent],
  imports: [CommonModule, MaterialModule, RouterModule],
  exports: [BottomNavComponent],
})
export class BottomNavModule {}
