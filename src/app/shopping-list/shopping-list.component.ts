import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import {ShoppingService} from "../services/shopping.service";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  public ingredients: Ingredient[] = [];
  constructor(private shoppingSvc : ShoppingService) { }

  ngOnInit() {

    this.ingredients = this.shoppingSvc.getIngredients();

    this.shoppingSvc.ingredientsChanged.subscribe({
      next:(result)=>{
        this.ingredients = result;
      }
    })

  }
}
