import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public Products = [
    {Name: "Cube", Seller: "Seller 1", Price: 30, Image: "./assets/img/theme/cube.jpeg"},
    {Name: "Flowerpot", Seller: "Seller 2", Price: 50, Image: "./assets/img/theme/flowerpot.jpeg"},
    {Name: "Glasses", Seller: "Seller 3", Price: 75, Image: "./assets/img/theme/glasses.jpeg"},
    {Name: "Mask", Seller: "Seller 4", Price: 40, Image: "./assets/img/theme/mask.jpeg"},
   ]; 

  constructor() { }

  ngOnInit(): void {
  }

}
