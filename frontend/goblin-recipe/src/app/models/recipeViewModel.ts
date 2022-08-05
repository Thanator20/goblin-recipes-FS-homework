import { IngredientViewModel } from '../shared/models/ingredientViewModel';

export interface RecipeViewModel {
  name: string;
  description: string;
  imagePath: string;
  ingredients: IngredientViewModel[];
}
