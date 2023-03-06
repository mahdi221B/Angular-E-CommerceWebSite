import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
//Added
import { Products } from '../core/model/products';
import { ConsumerProductService } from '../services/consumer-product.service';
import { ProductServiceService } from '../services/product-service.service';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  product!:Products;
  listProdcut!:Products[];
  constructor(private service:ProductServiceService,private route:Router) { }

  ngOnInit(): void {
    this.product = new Products();
  }

  addProduct(){
    this.service.addProduct(this.product);
    this.route.navigateByUrl("/products");
  }
}