import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import productsList from 'src/app/cong/data';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  products = productsList;
  product: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));
    this.product = productsList.find(
      (product) => product.id === productIdFromRoute
    );
  }
}
