import { Component, OnInit } from '@angular/core';
import productsList from 'src/app/data/data';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})


export class ProductsComponent implements OnInit {
  data: any;
  cartProducts: Array<any> = [];

  constructor() { }
  ngOnInit(): void { }

  addToCart(productId: any): any {
    this.data = this.products.find(m => m?._id == productId)
    this.cartProducts.push(this.data)
    let unique = [...new Set(this.cartProducts)];
    const products = JSON.stringify(unique)
    localStorage.setItem("productsCart", products)
  }
  products = productsList;
}
