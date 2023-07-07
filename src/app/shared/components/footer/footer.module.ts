import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { MaterialModule } from '../../modules/material/material.module';
import { RouterLink, RouterModule } from '@angular/router';

@NgModule({
  declarations: [FooterComponent],
  imports: [CommonModule, MaterialModule, RouterModule],
  exports: [FooterComponent],
})
export class FooterModule {}
