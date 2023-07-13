import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BottomNavComponent } from './components/bottom-nav/bottom-nav.component';
import { CartBoxComponent } from './components/cart-box/cart-box.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { MaterialModule } from './material.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ProductCardComponent,
    BottomNavComponent,
    CartBoxComponent,
    FooterComponent,
    HeaderComponent,
    PageNotFoundComponent,
  ],
  imports: [CommonModule, RouterModule, MaterialModule],
  exports: [
    ProductCardComponent,
    BottomNavComponent,
    CartBoxComponent,
    FooterComponent,
    HeaderComponent,
    PageNotFoundComponent,
  ],
})
export class SharedModule {}
