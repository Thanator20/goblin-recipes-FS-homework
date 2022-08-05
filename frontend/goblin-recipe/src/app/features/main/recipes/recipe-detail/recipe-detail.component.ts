import { Component, Input, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/core/services/recipe.service';
import { RecipeViewModel } from 'src/app/models/recipeViewModel';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss'],
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: RecipeViewModel;
  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {}

  addIngredientsToShoppingList() {
    this.recipeService.addIngredientToShoppingList(this.recipe.ingredients);
    console.log(this.recipe.ingredients);
  }
}
