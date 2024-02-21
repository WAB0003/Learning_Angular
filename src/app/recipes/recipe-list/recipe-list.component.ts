import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})

//Example ImageURL: https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXW1xZRtcKD3SZlaGgnOSRn_nqkXzB4XYXVTwJzkV_KA&s

export class RecipeListComponent implements OnInit {
  // CREATE A NEW EVENTEMITTER VARIABLE AND OUTPUT EMITTED INFORMATION TO PARENT (app.recipes.component)
  @Output() 
  recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[];  // declare recipes as a list of Recipe Instance Types

  //Initialize Recipe Service
  constructor( private recipeService: RecipeService ){

  }
  ngOnInit(){
    this.recipes = this.recipeService.getRecipes();
  }
  
  // EMIT selected recipe FROM CHILD (recipe-item) TO PARENT (recipes)
  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }
  
  


}
