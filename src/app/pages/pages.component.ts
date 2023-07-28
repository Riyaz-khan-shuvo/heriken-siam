import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/router';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
})
export class PagesComponent implements OnInit {
  cartResult: any;
  cartProducts: any;

  constructor() {}

  ngOnInit(): void {
    this.getCartProducts();
  }

  getCartProducts() {
    this.cartProducts = localStorage.getItem('cartProducts');
    this.cartResult = JSON.parse(this.cartProducts);
  }
}
