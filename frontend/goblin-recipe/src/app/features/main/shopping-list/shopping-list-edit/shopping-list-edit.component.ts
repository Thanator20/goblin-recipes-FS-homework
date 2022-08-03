import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { IngredientViewModel } from '../../../../shared/models/ingredientViewModel';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.scss'],
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('nameInput', { static: true }) nameInputReference: ElementRef;
  @ViewChild('amountInput', { static: true }) numberInputReference: ElementRef;
  @Output() ingredientAdded = new EventEmitter<IngredientViewModel>();
  amountInputReference: any;

  constructor() {}

  ngOnInit(): void {}

  onAddItem(): void {
    const ingName = this.nameInputReference.nativeElement.value;
    const ingAmount = this.numberInputReference.nativeElement.value;
    const newIngredient: IngredientViewModel = {
      name: ingName,
      amount: ingAmount,
    };
    this.ingredientAdded.emit(newIngredient);
  }
}
