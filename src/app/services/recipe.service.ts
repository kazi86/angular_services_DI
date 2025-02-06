import {EventEmitter, Injectable} from "@angular/core";
import {Recipe} from "../recipes/recipe.model";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingService} from "./shopping.service";

@Injectable()
export class RecipeService {

  public recipeSelected = new EventEmitter<Recipe>();

  public recipes: Recipe[] = [
    new Recipe(1,'A Test Recipe',
      'This is simply a test',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
      [new Ingredient('Meat',1)]),
    new Recipe(2,'Another Test Recipe',
      'This is simply a test',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
      [new Ingredient('Fires',20)])
  ];

  constructor(private shoppingSvc : ShoppingService) {}

  public getRecipes(){

    return this.recipes.slice(); // returning the simple this.recipes would return the same reference as of the array above.
                                 //Which means if we set it equal to some array it would have same reference.
                                // So we use slice as it would return a new array.

  }

  public addIngredientsToShoppingList(ingredients: Ingredient[]){

    this.shoppingSvc.addIngredients(ingredients);

  }

}
