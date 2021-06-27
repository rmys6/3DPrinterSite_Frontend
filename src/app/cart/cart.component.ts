import { Component, OnInit } from '@angular/core';
import { CartItem } from '../models/cartItem';
import { Product } from '../models/product';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems:CartItem[]=[];

  public CartProducts = [
    {Name: "Flowerpot", Seller: "Seller 2", Price: 50, Image: "./assets/img/theme/flowerpot.jpeg"},
    {Name: "Glasses", Seller: "Seller 3", Price: 75, Image: "./assets/img/theme/glasses.jpeg"},
   ]; 

  constructor(private cartService: CartService) { }

  ngOnInit(): void {

    this.getCart();
  }

  getCart(){
    this.cartItems = this.cartService.list();
  }

  removeFromCart(product:Product){
    this.cartService.removeFromCart(product);
  }

}
