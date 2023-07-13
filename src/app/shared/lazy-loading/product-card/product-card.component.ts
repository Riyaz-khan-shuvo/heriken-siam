import { Component, OnInit } from '@angular/core';
import productsList from 'src/app/cong/data';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  products = productsList;
  cartProducts: Array<any> = [];
  data: any;

  constructor() { }

  ngOnInit(): void {


  }
  addToCart(productId: any): any {
    this.data = this.products.find(m => m?.id == productId)
    this.cartProducts.push(this.data)
    let unique = [...new Set(this.cartProducts)];
    const products = JSON.stringify(unique)
    localStorage.setItem("productsCart", products)
  }
}
