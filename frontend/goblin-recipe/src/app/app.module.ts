import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingListComponent } from './features/main/shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './features/main/shopping-list/shopping-list-edit/shopping-list-edit.component';
import { RecipesComponent } from './features/main/recipes/recipes.component';
import { RecipeListComponent } from './features/main/recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './features/main/recipes/recipe-item/recipe-item.component';
import { HeaderComponent } from './features/main/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeItemComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
