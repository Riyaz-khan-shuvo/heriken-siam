import { Component, OnInit } from '@angular/core';
import Data from '../../data/data';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss'],
})
export class AllProductsComponent implements OnInit {
  products = Data;

  constructor() {}

  ngOnInit(): void {}
}
