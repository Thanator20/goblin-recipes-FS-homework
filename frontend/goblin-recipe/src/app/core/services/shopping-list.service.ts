import { EventEmitter, Injectable } from '@angular/core';
import { IngredientViewModel } from 'src/app/shared/models/ingredientViewModel';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  ingredientAdded = new EventEmitter<IngredientViewModel[]>();

  ingredients: IngredientViewModel[] = [
    {
      name: 'apples',
      amount: 12,
    },
    {
      name: 'tomatoes',
      amount: 6,
    },
  ];

  constructor() {}

  getIngredients(): IngredientViewModel[] {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: IngredientViewModel) {
    this.ingredients.push(ingredient);
    this.ingredientAdded.emit(this.ingredients.slice());
  }

  addIngredients(ingredientsFromShoppingList: IngredientViewModel[]) {
    console.log(ingredientsFromShoppingList);
    // for (let i = 0; i < ingredientsFromShoppingList.length; i++) {
    //   this.addIngredient(ingredientsFromShoppingList[i]);
    // }
    this.ingredients.push(...ingredientsFromShoppingList);
    this.ingredientAdded.emit(this.ingredients.slice());
  }
}
