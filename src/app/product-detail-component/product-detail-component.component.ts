import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Products } from '../core/model/products';
import { ProductServiceService } from '../services/product-service.service';

@Component({
  selector: 'app-product-detail-component',
  templateUrl: './product-detail-component.component.html',
  styleUrls: ['./product-detail-component.component.css']
})
export class ProductDetailComponentComponent implements OnInit {
  id!:number;
  list!:Products[];
  constructor(private route:ActivatedRoute,private service:ProductServiceService,private routes:Router) { }

  ngOnInit(): void {
    this.id= this.route.snapshot.params['id'];
    this.list=this.service.listProdcut;
  }

  // updateProduct(){
  //   this.service.updateProduct(this.product);
  //   this.routes.navigateByUrl("/products");
  // }
}