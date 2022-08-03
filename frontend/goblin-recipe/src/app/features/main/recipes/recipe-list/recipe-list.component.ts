import { Component, OnInit } from '@angular/core';
import { recipeViewModel } from 'src/app/models/recipeViewModel';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit {
  recipes: recipeViewModel[] = [
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
  constructor() {}

  ngOnInit(): void {}
}
