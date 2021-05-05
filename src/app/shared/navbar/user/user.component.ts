import { Component,NgModule, OnInit } from '@angular/core';
import { AddressComponent } from './address/address.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { ListComponent } from './list/list.component';
import { SettingComponent } from './setting/setting.component';


@NgModule({
  declarations:[
     SettingComponent,
     FavoriteComponent,
     ListComponent,
     AddressComponent,
  ]
  
})

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
