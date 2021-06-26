import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routing';
import {HttpClientModule} from '@angular/common/http'


import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

import { HomeModule } from './home/home.module';
import { LoginComponent } from './login/login.component';

import { UserComponent } from './shared/navbar/user/user.component';
import { SettingComponent } from './shared/navbar/user/setting/setting.component'
import { FavoriteComponent } from './shared/navbar/user/favorite/favorite.component';
import { ListComponent } from './shared/navbar/user/list/list.component';
import { AddressComponent } from './shared/navbar/user/address/address.component';


import { CartComponent } from './cart/cart.component';
import { PaymentComponent } from './payment/payment.component';
import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component';
import { NaviComponent } from './navi/navi.component';
import { MainComponent } from './main/main.component';
import { RmysComponent } from './rmys/rmys.component';
import { SigninComponent } from './signin/signin.component';
import { RegisterComponent } from './register/register.component';
import { ProductDetailComponent } from './productDetail/productDetail.component';




@NgModule({
  declarations: [									
    AppComponent,
    SignupComponent,
    LandingComponent,
    ProfileComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    CategoryComponent,
    ProductComponent,
    NaviComponent,

    SettingComponent,
    UserComponent,
    FavoriteComponent,
    ListComponent,
    AddressComponent,

    CartComponent,
    PaymentComponent,
      NaviComponent,
      MainComponent,
      RmysComponent,
      SigninComponent,
      RegisterComponent,
      ProductDetailComponent
   ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    HomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
