import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  declarations: [],
  imports: [CommonModule, MatIconModule, MatTooltipModule, MatSidenavModule],
  exports: [CommonModule, MatIconModule, MatTooltipModule, MatSidenavModule],
})
export class MaterialModule {}
