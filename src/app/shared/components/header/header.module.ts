import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { RouterLink, RouterModule } from '@angular/router';
import { MaterialModule } from '../../material.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, RouterModule, MaterialModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
