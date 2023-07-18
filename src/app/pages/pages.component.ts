import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/router';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
})
export class PagesComponent implements OnInit {
  CartData: any[] = [
    {
      serial: 1,
      productName: 'Remax Tws-18 Smart Touch...',
      img: 'https://api.heriken.co/api/upload/images/tws1-a4010.webp',
      price: '999Tk',
      discount: '401Tk',
      quantity: 1,
      total: '999Tk',
      action: '',
    },
    {
      serial: 1,
      productName: 'Remax Tws-18 Smart Touch...',
      img: 'https://api.heriken.co/api/upload/images/tws1-a4010.webp',
      price: '999Tk',
      discount: '401Tk',
      quantity: 1,
      total: '999Tk',
      action: '',
    },
  ];

  dataSource = this.CartData;

  constructor() {}

  ngOnInit(): void {}
}
