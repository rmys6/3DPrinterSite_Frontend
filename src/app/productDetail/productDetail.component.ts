import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Product } from "../models/product";
import { CartService } from "../services/cart.service";
import { ProductService } from "../services/product.service";

@Component({
  selector: "app-productDetail",
  templateUrl: "./productDetail.component.html",
  styleUrls: ["./productDetail.component.scss"],
})
export class ProductDetailComponent implements OnInit {
  product: Product;
  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.getProductsById(params["productId"]);
    });
  }

  getProductsById(productId: number) {
    this.productService.getProductsById(productId).subscribe((response) => {
      this.product = response.data;
      console.log(this.product.name);
    });
  }

  addToCart(product: Product) {
    this.cartService.addTocart(product);
  }
}
