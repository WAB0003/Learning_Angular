import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.css'
})
export class RecipeItemComponent implements OnInit {
  // INPUT EACH RECIPE ELEMENT FROM PARENT AND DECLARE IT AS A RECIPE MODEL INSTANCE
  @Input() 
  recipe: Recipe;     // Type model

  // DECLARE A NEW OUTPUT VARIABLE TO SEND INFORMATION TO PARENT
  @Output() 
  recipeSelected = new EventEmitter<void>();

  ngOnInit(): void {
  }
  // WHEN RECIPE IS 'CLICKED', EMIT SOMETHING TO FIRE AND EVENT. NO NEED TO PASS RECIPE SINCE RECIPE IS PROVIDED IN PARENT CLASS
  onSelected(){
    this.recipeSelected.emit();
  }

}
