import { Component, OnInit } from '@angular/core';

import { Recipe } from './recipe.model';
import {RecipeService} from "../services/recipe.service";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent implements OnInit {
  public selectedRecipe: Recipe;

  constructor(private recipesSvc : RecipeService) { }

  public ngOnInit() {

    this.recipesSvc.recipeSelected.subscribe({
      next:(recipe)=>{
        this.selectedRecipe = recipe;
      }
    });

  }

}
