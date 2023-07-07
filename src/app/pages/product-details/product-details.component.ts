import { Component, OnInit } from '@angular/core';
import productsList from 'src/app/data/data';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  related = productsList;
}
