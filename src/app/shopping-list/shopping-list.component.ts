import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent {
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 3)
  ];
  
  // BECAUSE INGREDIENT MODEL TAKES TWO ARGUMENTS IN CONSTRUCTOR, IT CAN TAKE BOTH INPUTS IN HTML AND CREATE AN INGREDIENT
  onIngredientAdded(newIngredient: Ingredient){
    this.ingredients.push(newIngredient);
  };
  
}
