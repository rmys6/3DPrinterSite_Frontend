import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { MainComponent } from './main/main.component';
import { FilterAreaComponent } from './filter-area/filter-area.component';
import { CategoryComponent } from '../category/category.component';
import { ProductComponent } from '../product/product.component';

import { SectionsModule } from '../sections/sections.module';


@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        RouterModule,
        SectionsModule,
        NgbModule
    ],
    declarations: [ HomeComponent,
        MainComponent,
        FilterAreaComponent,

        
    ],
    exports:[ HomeComponent ],
    providers: []
})
export class HomeModule { }
