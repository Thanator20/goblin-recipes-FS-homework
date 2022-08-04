import { Injectable } from '@angular/core';
import { RecipeViewModel } from 'src/app/models/recipeViewModel';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  constructor() {}
  recipes: RecipeViewModel[] = [
    {
      name: 'recipe',
      description: 'test recipe',
      imagePath:
        'https://assets.bonappetit.com/photos/62bf35ae872a6cfbb260f286/1:1/w_1920,c_limit/0701-tj-recipe-potato-v2.jpg',
    },
    {
      name: 'recipe 2',
      description: 'test recipe 2',
      imagePath:
        'https://assets.bonappetit.com/photos/62bf35ae872a6cfbb260f286/1:1/w_1920,c_limit/0701-tj-recipe-potato-v2.jpg',
    },
  ];

  getRecipes() {
    //returns a new copy of array of recipes, cannot access to the original array
    return this.recipes.slice();
  }
}
