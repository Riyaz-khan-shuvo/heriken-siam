import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
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

  constructor(
    private productService: ProductService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    this.productService.getAllProducts().subscribe((results) => {
      (this.productData = results), (this.products = this.productData.data);
    });
  }

  addToCart(productId, message: string) {
    this.cartData = this.products.find((m) => m?._id == productId);
    this.cartProducts.push(this.cartData);
    let unique = [...new Set(this.cartProducts)];
    const products = JSON.stringify(unique);
    localStorage.setItem('cartProducts', products);
    this.snackBar.open(message, '', {
      duration: 1500,
      panelClass: ['snackbar'],
    });
  }
}
