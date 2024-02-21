import { Recipe } from "./recipe.model";

export class RecipeService {
    
    // DECLARE 'recipes' VARIABLE AS AN ARRAY OF THE RECIPE MODEL INSTANCES
    private recipes: Recipe[] = [      
        // Create some initial recipes 
        new Recipe('A Test Recipe', "This is a test", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXW1xZRtcKD3SZlaGgnOSRn_nqkXzB4XYXVTwJzkV_KA&s" ),
        new Recipe('Another Recipe', "This is another test", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXW1xZRtcKD3SZlaGgnOSRn_nqkXzB4XYXVTwJzkV_KA&s" ),
    ];

    getRecipes(){
        return this.recipes.slice(); //returns new array that's an exact copy of what's in service file
    }

}