import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public CartProducts = [
    {Name: "Flowerpot", Seller: "Seller 2", Price: 50, Image: "./assets/img/theme/flowerpot.jpeg"},
    {Name: "Glasses", Seller: "Seller 3", Price: 75, Image: "./assets/img/theme/glasses.jpeg"},
   ]; 

  constructor() { }

  ngOnInit(): void {
  }

}
