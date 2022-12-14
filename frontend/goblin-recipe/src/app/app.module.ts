import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingListComponent } from './features/main/shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './features/main/shopping-list/shopping-list-edit/shopping-list-edit.component';
import { RecipesComponent } from './features/main/recipes/recipes.component';
import { RecipeListComponent } from './features/main/recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './features/main/recipes/recipe-list/recipe-item/recipe-item.component';
import { HeaderComponent } from './features/main/header/header.component';
import { RecipeDetailComponent } from './features/main/recipes/recipe-detail/recipe-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownDirective } from './shared/directives/dropdown.directive';
import { ShoppingListService } from './core/services/shopping-list.service';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeItemComponent,
    HeaderComponent,
    RecipeDetailComponent,
    DropdownDirective,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [ShoppingListService],
  bootstrap: [AppComponent],
})
export class AppModule {}
