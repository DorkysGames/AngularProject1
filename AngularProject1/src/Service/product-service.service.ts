import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductInterface } from '../Model/product-interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  productEndpoint = "http://localhost:4000/api/products";


  getProductData() {

    let productData = this.http.get<ProductInterface[]>(this.productEndpoint);
    return productData;

}

}
