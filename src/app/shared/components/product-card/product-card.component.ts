import { Component, OnInit } from '@angular/core';
import productsList from 'src/app/data/data';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  products = productsList;
  CartProducts: any[] = [];

  constructor() {}

  ngOnInit(): void {}
}
