import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { FavoriteComponent } from './shared/navbar/user/favorite/favorite.component';
import { ListComponent } from './shared/navbar/user/list/list.component';
import { AddressComponent } from './shared/navbar/user/address/address.component';
import { SettingComponent } from './shared/navbar/user/setting/setting.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes =[
    { path: 'home',             component: HomeComponent },
    { path: 'user-profile',     component: ProfileComponent },
    { path: 'register',           component: SignupComponent },
    { path: 'landing',          component: LandingComponent },
    { path: 'login',          component: LoginComponent },
    { path: 'product',          component: ProductComponent },
    { path: 'cart',          component: CartComponent },
    { path: 'favorite',         component:FavoriteComponent },
    { path: 'list',         component:ListComponent },
    { path: 'address',         component:AddressComponent },
    { path: 'setting',         component:SettingComponent },
    { path: 'payment',         component:PaymentComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
