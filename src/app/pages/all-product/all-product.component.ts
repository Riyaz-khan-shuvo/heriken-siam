import { Component, OnInit } from '@angular/core';
import productsList from 'src/app/data/data';


@Component({
  selector: 'app-all-product',
  templateUrl: './all-product.component.html',
  styleUrls: ['./all-product.component.scss']
})
export class AllProductComponent implements OnInit {



  data = productsList 
  constructor(
   

  ) { }

  ngOnInit(): void {
  }

}
