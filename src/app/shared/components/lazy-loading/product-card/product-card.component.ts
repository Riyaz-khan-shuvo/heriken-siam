import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  productData: any;
  products: any;
  cartData: any;
  cartProducts: Array<any> = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    this.productService.getAllProducts().subscribe((results) => {
      (this.productData = results), (this.products = this.productData.data);
    });
  }

  addToCart(productId) {
    this.cartData = this.products.find((m) => m?._id == productId);
    this.cartProducts.push(this.cartData);
    let unique = [...new Set(this.cartProducts)];
    const products = JSON.stringify(unique);
    localStorage.setItem('cartProducts', products);
  }
}
