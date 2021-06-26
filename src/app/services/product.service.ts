import { Injectable } from  '@angular/core';
import { HttpClient } from  '@angular/common/http';

import { Observable } from "rxjs";
import { ListResponseModel } from '../models/listResponseModel';
import { Product } from '../models/product';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: "root",
})
export class ProductService {
  apiUrl = "https://localhost:44365/api/";
  constructor(private httpClient: HttpClient) { }

  getProducts(): Observable<ListResponseModel<Product>> {

    let newPath = this.apiUrl + "products/getall"
    return this.httpClient.get<ListResponseModel<Product>>(newPath);
  }

  getProductsByCategory(categoryId:number): Observable<ListResponseModel<Product>> {

    let newPath = this.apiUrl + "products/getbycategoryid?categoryId="+categoryId;
    return this.httpClient.get<ListResponseModel<Product>>(newPath);
  }

  getProductsById(productId:number){

    let newPath = this.apiUrl + "products/getbyid?id="+productId;
    return this.httpClient.get<SingleResponseModel<Product>>(newPath);
  }
}
