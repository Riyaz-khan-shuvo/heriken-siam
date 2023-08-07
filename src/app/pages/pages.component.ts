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

  constructor() {}

  ngOnInit(): void {
    this.getCartProducts();
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
}
