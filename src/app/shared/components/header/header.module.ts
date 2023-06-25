import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { RouterLink, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, RouterModule, MatIconModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
