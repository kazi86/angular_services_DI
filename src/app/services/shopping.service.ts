import {EventEmitter, Injectable} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";

@Injectable()
export class ShoppingService {

  public ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  public ingredientsChanged = new EventEmitter<Ingredient[]>();

  constructor() {}

  public getIngredients(){

    return this.ingredients.slice();

  }

  public onIngredientAdd(ingredient: Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  public addIngredients(ingredients:Ingredient[]){
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.emit(this.ingredients);
  }

}
