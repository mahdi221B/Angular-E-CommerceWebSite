import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Products } from '../core/model/products';



@Injectable({
  providedIn: 'root'
})
export class ConsumerProductService {
  url:string="http://localhost:3000/Products";

  constructor(private http : HttpClient) { }
  getProduct(){
    return this.http.get<Products[]>('http://localhost:3000/Products')
  }
  addProduct(product: Products){
    return this.http.post<Products[]>('http://localhost:3000/Products', product);
  }
  deleteProduct(id:number){
    return this.http.delete(this.url+'/'+id);  
  }
}