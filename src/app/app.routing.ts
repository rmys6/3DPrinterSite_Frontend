import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';

import { CartComponent } from './cart/cart.component';
import { FavoriteComponent } from './shared/navbar/user/favorite/favorite.component';
import { ListComponent } from './shared/navbar/user/list/list.component';
import { AddressComponent } from './shared/navbar/user/address/address.component';
import { SettingComponent } from './shared/navbar/user/setting/setting.component';
import { PaymentComponent } from './payment/payment.component';
import { ProductComponent } from './product/product.component';
import { MainComponent } from './main/main.component';
import { RmysComponent } from './rmys/rmys.component';
import { SigninComponent } from './signin/signin.component';
import { RegisterComponent } from './register/register.component';
import { ProductDetailComponent } from './productDetail/productDetail.component';


const routes: Routes = [
  { path: 'home', component: MainComponent },
  { path: 'user-profile', component: ProfileComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'landing', component: LandingComponent },
  { path: 'login', component: LoginComponent },
  { path: 'rmys', component: RmysComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'productDetail/:productId', component: ProductDetailComponent },
 


  //#18 2:03
  { path: 'products/category/:categoryId', component: MainComponent},

  { path: 'cart', component: CartComponent },
  { path: 'favorite', component: FavoriteComponent },
  { path: 'list', component: ListComponent },
  { path: 'address', component: AddressComponent },
  { path: 'setting', component: SettingComponent },
  { path: 'payment', component: PaymentComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
