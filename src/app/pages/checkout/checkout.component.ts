import { Component } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent {
  CartData: any[] = [
    {
      serial: 1,
      productName: 'Remax Tws-18 Smart Touch Binaural Stereo Wireless...',
      img: 'https://api.heriken.co/api/upload/images/tws1-a4010.webp',
      price: '999Tk',
      discount: '401Tk',
      quantity: 1,
      total: '999Tk',
      action: '',
    },
    {
      serial: 1,
      productName: 'Remax Tws-18 Smart Touch Binaural Stereo Wireless...',
      img: 'https://api.heriken.co/api/upload/images/tws1-a4010.webp',
      price: '999Tk',
      discount: '401Tk',
      quantity: 1,
      total: '999Tk',
      action: '',
    },
  ];
  displayedColumns: string[] = [
    'Serial',
    'Product',
    'Price',
    'Discount',
    'Quantity',
    'Total',
    'Action',
  ];
  dataSource = this.CartData;
}
