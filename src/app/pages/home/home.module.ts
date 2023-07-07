import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SubiconComponent } from './subicon/subicon.component';
import { ProductsComponent } from './products/products.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [HomeComponent, SubiconComponent, ProductsComponent],
  imports: [CommonModule, HomeRoutingModule, MatIconModule],
})
export class HomeModule {}
