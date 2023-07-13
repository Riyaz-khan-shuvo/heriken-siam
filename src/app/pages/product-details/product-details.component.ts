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
  productIdFromRoute: any;
  productId: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.productIdFromRoute = params['productId'];
      console.log(this.productIdFromRoute);
      this.product = this.products.find(
        produc => produc.id == this.productIdFromRoute
      );

      console.log(this.product);
    });
  }

  //   const routeParams = this.route.snapshot.paramMap;
  //   this.productIdFromRoute = Number(routeParams.get('productId'));
  //   this.reload();
  // }

  // reload() {
  //   this.product = productsList.find(
  //     (product) => product.id === this.productIdFromRoute
  //   );
  //   // window.location.reload();
  // }
}
