import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RecipeService } from 'src/app/core/services/recipe.service';
import { RecipeViewModel } from 'src/app/models/recipeViewModel';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<RecipeViewModel>();

  recipes: RecipeViewModel[];
  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }

  onRecipeSelected(recipeElement: RecipeViewModel) {
    this.recipeWasSelected.emit(recipeElement);
  }
}
