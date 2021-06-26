import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListResponseModel } from '../models/listResponseModel';
import { Product } from '../models/product';

import { ProductService } from '../services/product.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  

  //https://localhost:44365/api
  products: Product[] = [];
  productResponseModel:ListResponseModel<Product>;
  constructor(private productService: ProductService, private activatedRoute:ActivatedRoute) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe((params)=>{
      if(params["categoryId"]){
        this.getProductsByCategory(params["categoryId"])
      }else{
        this.getProducts();
      }
    })
  }

  getProducts() {

    this.productService.getProducts()
      .subscribe((response) => {
        this.products = response.data;
      })
  }

  getProductsByCategory(categoryId:number) {

    this.productService.getProductsByCategory(categoryId)
      .subscribe((response) => {
        this.products = response.data;
      })
  }


}
