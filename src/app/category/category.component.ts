import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  categories: Category[] = []
  currentCategory: Category;
  constructor(private categoryService: CategoryService) { }

  ngOnInit() {

    this.getCategories();
  }

  getCategories() {

    this.categoryService.getCategories()
      .subscribe((response) => {
        this.categories = response.data;
      })
  }


  setCurrentCategory(category: Category) {
    this.currentCategory = category;
  }

  // #18 1:35
  getCurrentCategoryClass(category:Category){
    if(category ==this.currentCategory){
      return "list-group-item active"
    }else{
      return "list-group-item"
    }
  }
}
