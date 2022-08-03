import { Component, OnInit } from '@angular/core';
import { ingredientViewModel } from 'src/app/shared/models/ingredientViewModel';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: ingredientViewModel[] = [
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

  ngOnInit(): void {}
}
