import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public Products = [
    {Name: "Ball", Seller: "Seller 1", Price: 30},
    {Name: "Bottle", Seller: "Seller 2", Price: 50},
    {Name: "Box", Seller: "Seller 3", Price: 75},
    {Name: "Mouse", Seller: "Seller 4", Price: 40},
   ]; 

  constructor() { }

  ngOnInit(): void {
  }

}
