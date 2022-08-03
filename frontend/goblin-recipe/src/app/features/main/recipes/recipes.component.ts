import { Component, OnInit } from '@angular/core';
import { RecipeViewModel } from 'src/app/models/recipeViewModel';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
})
export class RecipesComponent implements OnInit {
  selectedRecipe: RecipeViewModel;

  constructor() {}

  ngOnInit(): void {}
}
