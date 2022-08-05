import { EventEmitter, Injectable } from '@angular/core';
import { RecipeViewModel } from 'src/app/models/recipeViewModel';
import { IngredientViewModel } from 'src/app/shared/models/ingredientViewModel';
import { ShoppingListService } from './shopping-list.service';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipeSelected = new EventEmitter<RecipeViewModel>();

  constructor(private shoppingListService: ShoppingListService) {}
  recipes: RecipeViewModel[] = [
    {
      name: 'Tasty naga soup',
      description: 'A tasty naga soup for a real hero',
      imagePath:
        'https://assets.bonappetit.com/photos/62bf35ae872a6cfbb260f286/1:1/w_1920,c_limit/0701-tj-recipe-potato-v2.jpg',
      ingredients: [
        {
          name: 'Naga',
          amount: 1,
        },
        {
          name: 'tomatoes',
          amount: 2,
        },
      ],
    },
    {
      name: 'Snake eye stue',
      description: 'really tasty',
      imagePath:
        'https://assets.bonappetit.com/photos/62bf35ae872a6cfbb260f286/1:1/w_1920,c_limit/0701-tj-recipe-potato-v2.jpg',
      ingredients: [
        {
          name: 'Snake eye',
          amount: 1,
        },
        {
          name: 'garlic',
          amount: 2,
        },
      ],
    },
  ];

  getRecipes() {
    //returns a new copy of array of recipes, cannot access to the original array
    return this.recipes.slice();
  }
  addIngredientToShoppingList(ingredient: IngredientViewModel[]) {
    this.shoppingListService.addIngredients(ingredient);
    console.log(ingredient);
  }
}
