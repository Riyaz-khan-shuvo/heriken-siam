import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import productsList from 'src/app/data/data';
import { MoreDetailsComponent } from './more-details/more-details.component';
import { CustomerReviewsComponent } from './customer-reviews/customer-reviews.component';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  products = productsList;
  product: any;
  productIdFromRoute: any;
  productId: any;
  dynamic = MoreDetailsComponent;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.productIdFromRoute = params['productId'];
      this.product = this.products.find(
        (prod) => prod._id == this.productIdFromRoute
      );
    });
  }

  assignComponent(component) {
    if (component === 'more-details') {
      this.dynamic = MoreDetailsComponent;
    } else {
      this.dynamic = CustomerReviewsComponent;
    }
  }
}
