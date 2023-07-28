import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoreDetailsComponent } from './more-details/more-details.component';
import { CustomerReviewsComponent } from './customer-reviews/customer-reviews.component';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  product: any;
  productIdFromRoute: any;
  detailsAndRatingSection = MoreDetailsComponent;
  productData: any;
  cartData: any;
  cartProducts: Array<any> = [];

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.productIdFromRoute = params['productId'];
    });
    this.getProductById();
  }

  getProductById() {
    this.productService
      .getProductById(this.productIdFromRoute)
      .subscribe((product) => {
        this.productData = product;
        this.product = this.productData.data;
      });
  }

  // addToCart(productId) {
  //   this.cartData = this.products.find((m) => m?._id == productId);
  //   this.cartProducts.push(this.cartData);
  //   let unique = [...new Set(this.cartProducts)];
  //   const products = JSON.stringify(unique);
  //   localStorage.setItem('cartProducts', products);
  // }

  assignComponent(component) {
    if (component === 'more-details') {
      this.detailsAndRatingSection = MoreDetailsComponent;
    } else {
      this.detailsAndRatingSection = CustomerReviewsComponent;
    }
  }
}
