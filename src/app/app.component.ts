import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  //Set a default property for current header to be 'recipe' so that recipe header is displayed
  currentHeader = "recipe";
  
  //Create a method that updates the current header to whatever is selected in the HTML
  onNavigate(header:string ){
    this.currentHeader = header;
  };

}
