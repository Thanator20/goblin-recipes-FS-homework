import { Component, OnInit } from '@angular/core';
import { IngredientViewModel } from 'src/app/shared/models/ingredientViewModel';
import { ShoppingListService } from 'src/app/core/services/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: IngredientViewModel[];
  constructor(private ShoppingListService: ShoppingListService) {}

  ngOnInit(): void {
    this.ingredients = this.ShoppingListService.getIngredients();
    this.ShoppingListService.ingredientAdded.subscribe(
      (ingredient: IngredientViewModel[]) => {
        this.ingredients = ingredient;
      }
    );
  }
}
