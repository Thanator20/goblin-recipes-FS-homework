import { Component, OnInit } from '@angular/core';
import { RecipeViewModel } from 'src/app/models/recipeViewModel';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss'],
})
export class RecipeItemComponent implements OnInit {
  recipe: RecipeViewModel[] = [];
  constructor() {}

  ngOnInit(): void {}
}
