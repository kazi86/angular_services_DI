import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from '../recipe.model';
import {RecipeService} from "../../services/recipe.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  public recipe: Recipe;

  constructor(private recipeSvc : RecipeService,private route : ActivatedRoute) { }

  public ngOnInit() {

    this.route.params.subscribe({
      next:(result)=>{
        let selectedRecipeId = +result['id'];

        let recipes = this.recipeSvc.getRecipes();

        this.recipe = recipes.find(item=>item.id === selectedRecipeId);

      }
    });


  }

  public onSwitchToShoppingList(){

    this.recipeSvc.addIngredientsToShoppingList(this.recipe.ingredients);

  }

}
