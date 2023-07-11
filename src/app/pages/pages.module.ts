import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { HeaderModule } from '../shared/components/header/header.module';
import { FooterModule } from '../shared/components/footer/footer.module';
import { BottomNavModule } from '../shared/components/bottom-nav/bottom-nav.module';
import { CartBoxModule } from '../shared/components/cart-box/cart-box.module';
import { MaterialModule } from '../shared/material.module';

@NgModule({
  declarations: [PagesComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    HeaderModule,
    FooterModule,
    BottomNavModule,
    CartBoxModule,
    MaterialModule,
  ],
})
export class PagesModule {}
