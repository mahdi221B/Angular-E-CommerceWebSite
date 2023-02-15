import { Component, OnInit } from '@angular/core';
//Added
import { Products } from '../core/model/products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  title!:string;
  message!:string;
  listProdcut!:Products[];
  priceMax!: number;
  constructor() { }

  ngOnInit(): void {
    this.title="yello :)";
    this.listProdcut=[
      {id: 1, title: "T-shirt 1", price: 18, quantity: 0, like: 0},
      {id: 2, title: "T-shirt 2", price: 21, quantity: 10, like: 0},
      {id: 3, title: "T-shirt 2", price: 21, quantity: 10, like: 0},
      {id: 4, title: "T-shirt 2", price: 21, quantity: 10, like: 0},
      {id: 5, title: "T-shirt 2", price: 21, quantity: 10, like: 0},
      {id: 6, title: "T-shirt 3", price: 16, quantity: 8, like: 0}, ]
  }

  buy(i:number){
    this.listProdcut[i].quantity -= 1;
    // this.listProdcut[i].quantity--;
    this.message = "LIKED ";
  }
  Like(i:number){
      this.listProdcut[i].like += 1;
      this.message = "BOUGHT";
  }

}
