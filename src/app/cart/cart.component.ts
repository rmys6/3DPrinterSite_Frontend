import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public CartProducts = [
    {Name: "Ball", Seller: "Seller 1", Price: 30},
    {Name: "Bottle", Seller: "Seller 2", Price: 50},
   ]; 

  constructor() { }

  ngOnInit(): void {
  }

}
