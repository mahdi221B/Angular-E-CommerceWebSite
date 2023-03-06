import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ETIME } from 'constants';
//Added
import { Products } from '../core/model/products';
import { ConsumerProductService } from '../services/consumer-product.service';
import { ProductServiceService } from '../services/product-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  title!:string;
  message!:string;
  priceMax!: number;
  count!: number;
  listProdcut!:Products[];
  p!:Products;
  constructor(private service: ProductServiceService,private route:Router, private consumerProduct:ConsumerProductService) { }
  
  ngOnInit(): void {
    this.title="yello :)";
    //this.listProdcut=this.service.listProdcut;
    this.consumerProduct.getProduct().subscribe({
      next:(data) => this.listProdcut= data
    });
    this.count = this.service.getNumberOf(this.listProdcut,'quantity',10);
  }
  deleteProduct(id:number){
    this.consumerProduct.deleteProduct(id).subscribe({
      next : () => this.listProdcut = this.listProdcut.filter((p)=>p.id != id)
    })
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
   //function  getNumberOf  

}