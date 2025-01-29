import {EventEmitter, Injectable} from "@angular/core";
import {Recipe} from "../recipes/recipe.model";

@Injectable()
export class RecipeService {

  public recipeSelected = new EventEmitter<Recipe>();

  public recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Recipe('Another Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')
  ];

  constructor() {}

  public getRecipes(){

    return this.recipes.slice(); // returning the simple this.recipes would return the same reference as of the array above.
                                 //Which means if we set it equal to some array it would have same reference.
                                // So we use slice as it would return a new array.

  }

}
