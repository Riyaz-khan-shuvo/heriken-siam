import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/router';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
})
export class PagesComponent implements OnInit {
  cartProducts: any;
  productQuantity: number = 1;
  productPrice: number;
  totalPrice: number;

  constructor() {}

  ngOnInit(): void {
    this.getCartProducts();
    this.getTotalPrice();
  }

  getCartProducts() {
    this.cartProducts = JSON.parse(localStorage.getItem('cartProducts'));
  }

  increaseQuantity() {
    this.productQuantity = this.productQuantity + 1;
    return this.productQuantity;
  }

  decreaseQuantity() {
    this.productQuantity = this.productQuantity - 1;
    return this.productQuantity;
  }

  getTotalPrice() {
    this.totalPrice = this.productPrice * this.productQuantity;
    console.log(this.productPrice);
    console.log(this.productQuantity);
    console.log(this.totalPrice);
    return this.totalPrice;
  }
}
