import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RecipeViewModel } from 'src/app/models/recipeViewModel';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss'],
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: RecipeViewModel;
  @Output() recipeSelected = new EventEmitter<void>();
  constructor() {}

  ngOnInit(): void {}
  onSelected(): void {
    this.recipeSelected.emit();
  }
}
