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

  // addToDB(id) {
  //   let shoppingCart = {};
  //   let storedCart = localStorage.getItem('cartProducts');
  //   if (storedCart) {
  //     shoppingCart = JSON.parse(storedCart);
  //   }
  //   const quantity = shoppingCart[id];
  //   if (quantity) {
  //     const newQuantity = quantity + 1;
  //     shoppingCart[id] = newQuantity;
  //   } else {
  //     shoppingCart[id] = 1;
  //   }
  //   localStorage.setItem('cartProducts', JSON.stringify(shoppingCart));
  // }

  showCartProducts() {
    const products = localStorage.getItem('cartProducts');
    console.log(products);
  }

  addToCart(productId, message: string) {
    this.cartData = this.products.find((m) => m?._id == productId);
    this.cartProducts.push(this.cartData);
    // this.addToDB(this.cartData._id);
    // this.showCartProducts();
    // console.log(this.cartProducts);
    let unique = [...new Set(this.cartProducts)];
    const products = JSON.stringify(unique);
    localStorage.setItem('cartProducts', products);
    this.snackBar.open(message, '', {
      duration: 1500,
      panelClass: ['snackbar'],
    });
  }
}
