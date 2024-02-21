import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css',
  providers:[RecipeService] //Now its availble in this component and all child components
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;

  //Initialize Recipe Service
  constructor( private recipeService: RecipeService ){
  }

  ngOnInit() {
  }
}
