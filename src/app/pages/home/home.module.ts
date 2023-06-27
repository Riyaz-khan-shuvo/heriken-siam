import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SubiconComponent } from './subicon/subicon.component';

@NgModule({
  declarations: [HomeComponent, SubiconComponent],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
