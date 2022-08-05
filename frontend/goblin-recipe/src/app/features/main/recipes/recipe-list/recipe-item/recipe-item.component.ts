import { Component, Input, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/core/services/recipe.service';
import { RecipeViewModel } from 'src/app/models/recipeViewModel';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss'],
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: RecipeViewModel;

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {}
  onSelected(): void {
    this.recipeService.recipeSelected.emit(this.recipe);
  }
}
