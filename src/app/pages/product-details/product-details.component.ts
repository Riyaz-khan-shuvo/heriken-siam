import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoreDetailsComponent } from './more-details/more-details.component';
import { CustomerReviewsComponent } from './customer-reviews/customer-reviews.component';
import { ProductService } from 'src/app/services/product.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  productIdFromRoute: any;
  detailsAndRatingSection = MoreDetailsComponent;
  product: any;
  productData: any;
  cartProducts: Array<any> = [];
  cartData: any;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private snackBar: MatSnackBar
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

  addToCart(message) {
    this.cartData = this.product;
    this.cartProducts.push(this.cartData);
    let unique = [...new Set(this.cartProducts)];
    const product = JSON.stringify(unique);
    localStorage.setItem('cartProducts', product);
    this.snackBar.open(message, '', {
      duration: 1500,
      panelClass: ['snackbar'],
    });
  }

  assignDetailsOrReviews(component) {
    if (component === 'more-details') {
      this.detailsAndRatingSection = MoreDetailsComponent;
    } else {
      this.detailsAndRatingSection = CustomerReviewsComponent;
    }
  }
}
