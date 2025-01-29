import { Component, OnInit} from '@angular/core';

import { Recipe } from '../recipe.model';
import {RecipeService} from "../../services/recipe.service";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  public recipes : Recipe[] = [];

  constructor(private recipeSvc : RecipeService) { }

  public ngOnInit() {

    this.recipes = this.recipeSvc.getRecipes();

  }

}
